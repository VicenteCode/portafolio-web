"use client";

import { FileDown } from "lucide-react";

export function PdfButton() {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-150 rounded-sm"
    >
      <FileDown className="w-4 h-4" />
      CV
    </a>
  );
}
