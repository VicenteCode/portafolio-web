import { Layout } from "@/components/layout/Layout";
import { ContentAboutMe } from "@/features/about-me/components/content";
import { ContentStack } from "@/features/stack/components/content";
import { ContentExperience } from "@/features/experience/components/content";
import { NavigationBar } from "@/features/navigation/components/NavigationBar";
import { Hero } from "@/features/start/components/hero";

export default function Page() {
  return (
    <Layout navbar={<NavigationBar />}>
      <Hero />
      <ContentAboutMe />
      <ContentExperience />
      <ContentStack />
    </Layout>
  );
}
