import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "Revalidation is not configured." },
      { status: 501 },
    );
  }

  const provided =
    request.headers.get("x-revalidate-secret") ||
    request.nextUrl.searchParams.get("secret");

  if (provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as
    | { slug?: unknown }
    | null;
  const slug = typeof body?.slug === "string" ? body.slug : undefined;

  revalidateTag("blog", "max");
  revalidatePath("/blog/");
  if (slug) {
    revalidatePath(`/blog/${slug}/`);
  }

  return NextResponse.json({ revalidated: true });
}
