import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n/types";
import { translations } from "@/lib/i18n/translations";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/features/navigation/components/navigation/NavigationBar";
import { Hero } from "@/features/start/components/hero";
import { ContentAboutMe } from "@/features/about-me/components/content";
import { ContentExperience } from "@/features/experience/components/content";
import { ContentProject } from "@/features/project/components/content/ContentProject";
import { ContentStack } from "@/features/stack/components/content";
import { ContentSkills } from "@/features/skills/components/content/ContentSkills";
import { ContentEducation } from "@/features/education/content";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

type Props = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", es: "/es" },
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <Layout navbar={<NavigationBar lang={lang} />} footer={<Footer />}>
      <Hero t={t.hero} />
      <RevealOnScroll><ContentAboutMe t={t.about} /></RevealOnScroll>
      <RevealOnScroll><ContentExperience t={t.experience} /></RevealOnScroll>
      <RevealOnScroll><ContentProject t={t.project} /></RevealOnScroll>
      <RevealOnScroll><ContentStack lang={lang} /></RevealOnScroll>
      <RevealOnScroll><ContentSkills lang={lang} /></RevealOnScroll>
      <RevealOnScroll><ContentEducation t={t.education} /></RevealOnScroll>
    </Layout>
  );
}
