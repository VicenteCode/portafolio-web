import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { NavLinks } from "@/features/navegation/constants/NavLinks";

export default function Page() {
  return (
    <Layout navbar={<Navbar links={NavLinks} />}>
      <></>
    </Layout>
  );
}
