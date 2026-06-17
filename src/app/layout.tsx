import type { Metadata } from "next";
import { bangers, montserrat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VicenteCode - Portfolio Website",
    template: "%s | VicenteCode",
  },
  description:
    "Software developer specialized in the JavaScript ecosystem — web apps, frontend architecture and modern tooling.",
  keywords: ["VicenteCode", "software developer", "JavaScript", "TypeScript", "React", "Next.js", "frontend"],
  authors: [{ name: "VicenteCode" }],
  creator: "VicenteCode",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "VicenteCode - Portfolio Website",
    description:
      "Software developer specialized in the JavaScript ecosystem — web apps, frontend architecture and modern tooling.",
    siteName: "VicenteCode",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${bangers.variable} ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
