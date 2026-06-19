import { Layout } from "@/components/layout/Layout";
import { Footer } from "@/components/layout/Footer";
import { ContentAboutMe } from "@/features/about-me/components/content";
import { ContentStack } from "@/features/stack/components/content";
import { ContentExperience } from "@/features/experience/components/content";
import { NavigationBar } from "@/features/navigation/components/navigation/NavigationBar";
import { Hero } from "@/features/start/components/hero";
import { ContentSkills } from "@/features/skills/components/content/ContentSkills";
import { ContentEducation } from "@/features/education/components/content";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export default function Page() {
  return (
    <Layout navbar={<NavigationBar />} footer={<Footer />}>
      <Hero />
      <RevealOnScroll><ContentAboutMe /></RevealOnScroll>
      <RevealOnScroll><ContentExperience /></RevealOnScroll>
      <RevealOnScroll><ContentStack /></RevealOnScroll>
      <RevealOnScroll><ContentSkills /></RevealOnScroll>
      <RevealOnScroll><ContentEducation /></RevealOnScroll>
    </Layout>
  );
}
