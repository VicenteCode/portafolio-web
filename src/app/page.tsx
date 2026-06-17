import { Layout } from "@/components/layout/Layout";
import { NavigationBar } from "@/features/navigation/components/NavigationBar";
import { Hero } from "@/features/about-me/components/hero";

export default function Page() {
  return (
    <Layout navbar={<NavigationBar />}>
      <Hero />
    </Layout>
  );
}
