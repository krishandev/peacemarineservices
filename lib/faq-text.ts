import { isValidElement, type ReactNode } from "react";

export function normalizeFaqText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function reactNodeToPlainText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node
      .map((child) => reactNodeToPlainText(child))
      .map((part) => part.trim())
      .filter(Boolean)
      .join(" ");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return reactNodeToPlainText(node.props.children);
  }

  return "";
}
