import { useState } from "react";
import FeaturesSection from "./Shared/FeaturesSection";
import Footer from "./Shared/Footer";
import HeroSection from "./Shared/HeroSection";
import Navbar from "./Shared/Navbar";
import NewsLetter from "./Shared/NewsLetter";
import Overlay from "./Shared/Overlay";

export default function LandingPage() {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="bg-[#FFFFFF] relative">
      <Navbar />
      {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
      <HeroSection />
      <FeaturesSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
