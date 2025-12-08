import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { MinistriesSection } from "@/components/home/MinistriesSection";
import { SermonsPreview } from "@/components/home/SermonsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AnnouncementsSection />
      <MinistriesSection />
      <SermonsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
