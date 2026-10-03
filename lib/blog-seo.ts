import {
  DESCRIPTION_MAX,
  DESCRIPTION_MIN,
  TITLE_MAX,
  TITLE_MIN,
  countCharacters,
} from "@/lib/seo";

function decodeEntities(value: string) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
}

export function stripHtml(value: string) {
  return decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function inRange(value: string, min: number, max: number) {
  const length = countCharacters(value);
  return length >= min && length <= max;
}

const TITLE_SUFFIXES = [
  " | PMS",
  " | PMS Blog",
  " | Australia",
  " Australia | PMS",
  " | Marine Survey",
  " | Inspection PMS",
  " | PMS Australia",
];

const TRAILING_FUNCTION_WORDS =
  /(?:\s+(?:in|and|or|of|the|a|an|with|for|to|at|on|by|from))$/i;

function stripDanglingWords(value: string) {
  let next = value.trim();
  while (TRAILING_FUNCTION_WORDS.test(next) && next.split(" ").length > 3) {
    next = next.replace(TRAILING_FUNCTION_WORDS, "").trim();
  }
  return next.replace(/[,:;–—-]+$/, "").trim();
}

function lastMeaningfulWord(value: string) {
  return (
    value
      .split(/\s+/)
      .pop()
      ?.replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase() || ""
  );
}

function applySuffixes(base: string, suffixes: string[], min: number, max: number) {
  if (inRange(base, min, max)) {
    return base;
  }

  const lastWord = lastMeaningfulWord(base);

  for (const suffix of suffixes) {
    if (lastWord && suffix.toLowerCase().includes(lastWord)) {
      continue;
    }
    const next = `${base}${suffix}`;
    if (inRange(next, min, max)) {
      return next;
    }
  }

  return null;
}

const DESCRIPTION_SUFFIXES = [
  ".",
  " in WA.",
  " in Australia.",
  " for vessel operators.",
  " for Australian operators.",
];

function trimToWordBoundary(value: string, max: number) {
  if (countCharacters(value) <= max) {
    return value;
  }

  const words = value.split(" ");
  let built = "";

  for (const word of words) {
    const next = built ? `${built} ${word}` : word;
    if (countCharacters(next) > max) {
      break;
    }
    built = next;
  }

  return stripDanglingWords(built);
}

export function fitSeoTitle(rawTitle: string) {
  const title = stripHtml(rawTitle);
  if (inRange(title, TITLE_MIN, TITLE_MAX)) {
    return title;
  }

  if (countCharacters(title) < TITLE_MIN) {
    const padded = applySuffixes(title, TITLE_SUFFIXES, TITLE_MIN, TITLE_MAX);
    if (padded) {
      return padded;
    }
  }

  const trimmed = trimToWordBoundary(title, TITLE_MAX);
  if (inRange(trimmed, TITLE_MIN, TITLE_MAX)) {
    return trimmed;
  }

  const paddedTrim = applySuffixes(trimmed, TITLE_SUFFIXES, TITLE_MIN, TITLE_MAX);
  if (paddedTrim) {
    return paddedTrim;
  }

  throw new Error(`Unable to create a 50–55 character SEO title from: ${title}`);
}

export function fitSeoDescription(excerpt: string, content: string) {
  const excerptText = stripHtml(excerpt);
  const contentText = stripHtml(content);
  const combined = [excerptText, contentText].filter(Boolean).join(" ");
  const source = combined || excerptText;

  if (inRange(source, DESCRIPTION_MIN, DESCRIPTION_MAX)) {
    return source;
  }

  if (countCharacters(source) > DESCRIPTION_MAX) {
    const trimmed = trimToWordBoundary(source, DESCRIPTION_MAX);
    if (inRange(trimmed, DESCRIPTION_MIN, DESCRIPTION_MAX)) {
      return trimmed;
    }

    const padded = applySuffixes(
      trimmed,
      DESCRIPTION_SUFFIXES,
      DESCRIPTION_MIN,
      DESCRIPTION_MAX,
    );
    if (padded) {
      return padded;
    }
  }

  const paddedShort = applySuffixes(
    source,
    DESCRIPTION_SUFFIXES,
    DESCRIPTION_MIN,
    DESCRIPTION_MAX,
  );
  if (paddedShort) {
    return paddedShort;
  }

  throw new Error("Unable to create a 150–155 character SEO description.");
}
