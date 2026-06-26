import type { ReactNode } from "react";
import { SUPPORTED_LANGS } from "@/lib/i18n/types";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export default function LangLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
