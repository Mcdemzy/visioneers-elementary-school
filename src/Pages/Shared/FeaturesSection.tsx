import { useRef, useState, useEffect } from "react";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";
import {
  cardData,
  features,
  galleries,
  school,
  StaffCardData,
  staffs,
} from "./data";
import DoubleLine from "./DoubleLine";
import "../Shared/scrollbar.css"

function FeaturesSection() {
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
    <main className="bg-white">
      {/* Card Section */}
      <section className="lg:py-16 py-10 lg:px-10 px-5">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[#F5E9FF] w-[60px] h-[60px] rounded-full mb-5">
                <img src={card.icon} alt={card.title} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#8D0E4E] mb-5 font-Inter">
                {card.title}
              </h3>
              <div className="w-12 group-hover:w-20 transition-all duration-300 rounded-sm border-[#FB39AD] border-2 mb-5"></div>
              <p className="text-[#000000] font-normal text-xs leading-4 font-Inter">
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
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="min-w-full bg-white p-5 rounded-xl space-y-5"
                >
                  <div className="flex items-center justify-center bg-[#FCF3FF] w-[60px] h-[60px] rounded-full">
                    <img src={card.icon} alt={card.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#8D0E4E] font-Inter">
                    {card.title}
                  </h3>
                  <div className="w-12 rounded-sm border-[#FB39AD] border-2"></div>
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
                  width: `${((currentCard + 1) / StaffCardData.length) * 100}%`,
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
      </section>

      {/* Environment Section */}
      <section className="lg:py-16 py-10 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="lg:text-2xl text-base font-bold text-[#000000] font-Inter">
            We Provide A{" "}
            <span className="text-[#7B02A1]">Nurturing And Encouraging</span>{" "}
            Environment For{" "}
            <span className="text-[#7B02A1]">Effective Learning</span>.
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium lg:text-base text-xs leading-[19.36px] font-Inter lg:w-[720px] w-full mx-auto">
            Our school is committed to providing a welcoming and inclusive space
            that ensures every student feels valued and motivated to learn. We
            work closely with parents, teachers, and students to cultivate an
            atmosphere where curiosity and creativity can thrive.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:space-y-0 lg:space-y-0 space-y-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-start">
              <div className="overflow-hidden group h-56 w-full mb-6 rounded-xl shadow-xl shadow-gray-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full mb-6 rounded-xl group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h3 className="lg:text-xl text-base font-bold text-[#8D0E4E]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[#000000] font-normal text-xs font-Inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* School Anthem here 😒*/}
      <section className="lg:py-16 py-10 lg:px-20 md:px-10 px-5">
        <div className="mx-auto rounded-xl w-full lg:h-[780px] h-[500px] bg-[#00000033]">
          <h3 className="text-[#FFFFFF] text-4xl font-bold text-center pt-24">
            School Anthem
          </h3>
        </div>
      </section>

      {/* Events & Gallery */}
      <section className="lg:py-16 py-10 px-5 lg:px-20">
        <div className="mx-auto text-center">
          <h2 className="lg:text-2xl text-base font-bold text-[#000000] font-Inter">
            Events & <span className="text-[#7B02A1]">Gallery</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium lg:text-base text-xs leading-[19.36px] font-Inter mx-auto">
            Join us as we showcase unforgettable moments and exciting events
            through our vibrant gallery!
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-5 max-w-6xl mx-auto">
          {galleries.map((gallery, index) => (
            <div key={index} className="">
              <div className="overflow-hidden group h-full w-full rounded-xl shadow-xl shadow-gray-300">
                <img
                  src={gallery.image}
                  alt="Gallery"
                  className="h-full w-full mb-6 rounded-xl group-hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our School */}
      <section className="lg:py-16 py-10 px-5 lg:px-16">
        <div className="mx-auto text-center">
          <h2 className="lg:text-2xl text-base font-bold text-[#000000] font-Inter">
            Our <span className="text-[#7B02A1]">School</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium lg:text-base text-xs leading-[19.36px] font-Inter mx-auto">
            Discover what makes our school a home for learning, growth, and
            unforgettable memories.
          </p>
        </div>

        <div className="mt-14 flex gap-6 w-full overflow-auto lg:overflow-hidden scrollbar-hide scroll-smooth mx-auto">
          {school.map((grade, index) => (
            <div
              key={index}
              className="bg-[#FEF1F9] shadow-[#0000001A] shadow-lg p-6 rounded-md text-center flex flex-col items-center w-full mx-auto"
            >
              <div className="py-3 flex-1">
                <h3 className="text-2xl font-bold text-[#8D0E4E] mb-5 font-Inter">
                  {grade.title}
                </h3>
                <p className="text-[#000000] font-medium leading-5 text-sm font-Inter w-80">
                  {grade.description}
                </p>
              </div>
              <button className="bg-[#8D0E4E] text-white rounded-md px-6 py-3 mt-6 hover:bg-[#681e43] font-bold text-xs">
                {grade.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Our Staff */}
      <section className="lg:py-16 py-10 px-5 lg:px-20 bg-[#FCF3FF]">
        <div className="mx-auto text-center">
          <h2 className="lg:text-2xl text-base font-bold text-[#000000] font-Inter">
            Our <span className="text-[#7B02A1]">Staff</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium lg:text-base text-xs leading-[19.36px] font-Inter mx-auto">
            Discover the amazing individuals who work tirelessly to nurture and
            inspire our students.
          </p>
        </div>

        <div className="mt-14 flex gap-6 w-full overflow-auto lg:overflow-hidden scrollbar-hide scroll-smooth mx-auto">
          {staffs.map((staff, index) => (
            <div key={index} className="flex items-center flex-col">
              <div className="overflow-hidden group rounded-full lg:h-64 lg:w-64 h-40 w-40">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="rounded-full lg:h-64 lg:w-64 h-40 w-40 group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <h3 className="mt-6 text-[#8D0E4E] font-bold lg:text-xl text-base whitespace-nowrap font-[roboto]">
                {staff.name}
              </h3>
              <p className="mt-3 font-normal text-xs font-Inter text-[#000000]">
                {staff.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoneers */}
      {/* <section className="py-16">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            What Our Past <span className="text-[#7B02A1]">Students</span> Say
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter mx-auto">
            Our students rave about the school, praising its welcoming
            atmosphere, dedicated teachers, and endless opportunities for growth
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimoneers.map((person, index) => (
            <div key={index} className="bg-[#FCF3FF] rounded-xl p-6">
              <div className="flex gap-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-full w-16 h-16 hover:scale-110 transition-all duration-300"
                />
                <div className="space-y-4">
                  <p className="font-normal text-xs font-Inter text-[#000000]">
                    {person.description}
                  </p>
                  <h3 className="text-[#000000] font-bold text-xl font-[roboto] text-start">
                    {person.name}
                  </h3>
                  <StarRating />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}

export default FeaturesSection;
