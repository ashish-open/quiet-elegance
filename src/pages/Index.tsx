import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import DisciplinesSection from "@/components/home/DisciplinesSection";
import FounderSection from "@/components/home/FounderSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PhilosophySection />
      <DisciplinesSection />
      <FounderSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
