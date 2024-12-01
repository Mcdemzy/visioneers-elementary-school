import FeaturesSection from "./Shared/FeaturesSection";
import Footer from "./Shared/Footer";
import HeroSection from "./Shared/HeroSection";
import Navbar from "./Shared/Navbar";

export default function LandingPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
