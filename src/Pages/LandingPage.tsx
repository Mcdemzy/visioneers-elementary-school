import FeaturesSection from "./Shared/FeaturesSection";
import Footer from "./Shared/Footer";
import HeroSection from "./Shared/HeroSection";
import Navbar from "./Shared/Navbar";
import NewsLetter from "./Shared/NewsLetter";

export default function LandingPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
