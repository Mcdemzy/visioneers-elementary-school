import { useEffect, useRef, useState } from "react";
import { StaffCardData } from "../Shared/data";
import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";
import "../Shared/scrollbar.css";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";

function OurStaffs() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        setCardWidth(scrollContainerRef.current.clientWidth);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToCard = (index: any) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      setCurrentCard(index);
    }
  };

  const scrollLeft = () => {
    if (currentCard > 0) {
      scrollToCard(currentCard - 1);
    }
  };

  const scrollRight = () => {
    if (currentCard < StaffCardData.length - 1) {
      scrollToCard(currentCard + 1);
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentCard(newIndex);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Our Staffs */}
      <section className="py-0 lg:px-[140px] px-5">
        <div className="mx-auto text-center pt-36">
          <h2 className="lg:text-2xl text-xl font-bold text-[#000000] font-Inter">
            Our <span className="text-[#7B02A1]">Staff</span>{" "}
          </h2>
          <DoubleLine />
          <p className="md:mt-5 mt-3 text-[#333333] font-medium lg:text-base md:text-sm text-xs leading-[19.36px] font-Inter mx-auto">
            Meet Our Staff.
          </p>
        </div>

        <div className="group overflow-hidden shadow-xl shadow-[#0000001A] rounded-lg lg:mt-14 mt-10 h-full rounded- w-full lg:mb-14 mb-0">
          <img
            src="/images/staff.png"
            alt="Staffs"
            className="rounded-lg h-full w-full group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </section>

      {/* Our Staffs card */}
      <section className="lg:py-16 py-10 lg:px-20 px-5">
        <div className="bg-[#8D0E4E] rounded-md p-2 mb-10">
          <h4 className="text-base font-bold font-Inter text-[#FFFFFF] text-center">
            Our Staff Qualities & Qualifications
          </h4>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-2 gap-10">
            {StaffCardData.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl hover:scale-105 transition-all duration-300 space-y-5"
              >
                <div className="flex items-center justify-center bg-[#FCF3FF] w-[60px] h-[60px] rounded-full">
                  <img src={card.icon} alt={card.title} className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#8D0E4E] font-Inter">
                  {card.title}
                </h3>
                <div className="w-12 group-hover:w-20 transition-all duration-300 rounded-sm border-[#FB39AD] border-2"></div>
                <h4 className="font-medium text-sm italic font-[roboto]">
                  {card.subTitle}
                </h4>
                <p className="text-[#000000] font-medium lg:text-sm text-xs leading-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="relative md:hidden">
            <div className="rounded-lg shadow-md pb-4">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto space-x-5 scrollbar-hide scroll-smooth px-5"
              >
                {StaffCardData.map((card, index) => (
                  <div
                    key={index}
                    className="min-w-full bg-white p-5 rounded-xl space-y-5"
                  >
                    <div className="flex items-center justify-center bg-[#FCF3FF] w-[60px] h-[60px] rounded-full">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#8D0E4E] font-Inter">
                      {card.title}
                    </h3>
                    <div className="w-12 rounded-sm border-[#FB39AD] border-2"></div>
                    <h4 className="font-medium text-sm italic font-[roboto]">
                      {card.subTitle}
                    </h4>
                    <p className="text-[#000000] font-medium lg:text-sm text-xs leading-4">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mx-12 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-[#8D0E4E] transition-all duration-200"
                  style={{
                    width: `${
                      ((currentCard + 1) / StaffCardData.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-5 items-center mt-4">
              <button
                onClick={scrollLeft}
                className="bg-[#8D0E4E] text-white p-2 rounded-full shadow-lg bg-gradient-to-tl from-[#270416] to-[#8D0E4E]"
              >
                <HiMiniArrowSmallLeft className="text-xl" />
              </button>
              <button
                onClick={scrollRight}
                className="bg-[#8D0E4E] text-white p-2 rounded-full shadow-lg bg-gradient-to-tl from-[#8D0E4E] to-[#270416]"
              >
                <HiMiniArrowSmallRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <p className="font-Inter text-[#333333] lg:text-xl md:text-base text-sm font-medium text-center lg:leading-10 leading-4 pt-24">
          The qualities and qualifications mentioned above have been central to
          the selection of our staff. Our team is comprised of dedicated and
          diligent individuals who collaborate harmoniously to ensure effective
          outcomes. Within our school, a nurturing environment prevails,
          characterized by outstanding rapport between staff and students. Our
          staff's collective focus extends to addressing the unique social and
          emotional needs of each child, fostering their self-esteem through
          tailored encouragement and support. The school's overarching goal is
          to foster a compassionate and supportive ambiance that cultivates
          positive self-esteem, self-discipline, confidence, independence,
          tolerance, and empathy among all students. These objectives are
          markedly realized.
        </p>
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default OurStaffs;
