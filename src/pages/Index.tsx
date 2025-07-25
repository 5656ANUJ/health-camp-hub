import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkingProcess from "@/components/WorkingProcess";
import CampListings from "@/components/CampListings";
import OrganizerSection from "@/components/OrganizerSection";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WorkingProcess />
      <CampListings />
      <OrganizerSection />
      <TrustSignals />
      <Footer />
    </div>
  );
};

export default Index;
