"use client";

export default function PrintChecklistButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="guide-no-print inline-flex min-h-11 items-center rounded-sm border border-pms-navy bg-white px-4 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
    >
      Print this checklist
    </button>
  );
}
