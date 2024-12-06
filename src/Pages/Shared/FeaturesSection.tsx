import {
  cardData,
  features,
  galleries,
  school,
  staffs,
} from "./data";
import DoubleLine from "./DoubleLine";

function FeaturesSection() {
  return (
    <main className="bg-white">
      {/* Card Section */}
      <section className="py-16 px-10"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
      </section>

      {/* Environment Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            We Provide A{" "}
            <span className="text-[#7B02A1]">Nurturing And Encouraging</span>{" "}
            Environment For{" "}
            <span className="text-[#7B02A1]">Effective Learning</span>.
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter w-[720px] mx-auto">
            Our school is committed to providing a welcoming and inclusive space
            that ensures every student feels valued and motivated to learn. We
            work closely with parents, teachers, and students to cultivate an
            atmosphere where curiosity and creativity can thrive.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 text-start">
              <div className="overflow-hidden group h-56 w-full mb-6 rounded-xl shadow-xl shadow-gray-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full mb-6 rounded-xl group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8D0E4E]">
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
      <section className="py-16 lg:px-20 md:px-10 px-5">
        <div className="mx-auto rounded-xl w-full lg:h-[780px] h-[500px] bg-[#00000033]">
          <h3 className="text-[#FFFFFF] text-4xl font-bold text-center pt-24">
            School Anthem
          </h3>
        </div>
      </section>

      {/* Events & Gallery */}
      <section className="py-16">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            Events & <span className="text-[#7B02A1]">Gallery</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter mx-auto">
            Join us as we showcase unforgettable moments and exciting events
            through our vibrant gallery!
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleries.map((gallery, index) => (
            <div key={index} className="">
              <div className="overflow-hidden group h-64 w-full rounded-xl shadow-xl shadow-gray-300">
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
      <section className="py-16">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            Our <span className="text-[#7B02A1]">School</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter mx-auto">
            Discover what makes our school a home for learning, growth, and
            unforgettable memories.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {school.map((grade, index) => (
            <div
              key={index}
              className="bg-[#FEF1F9] shadow-[#0000001A] shadow-lg p-6 rounded-md text-center flex flex-col items-center"
            >
              <div className="py-3 flex-1">
                <h3 className="text-2xl font-bold text-[#8D0E4E] mb-5 font-Inter">
                  {grade.title}
                </h3>
                <p className="text-[#000000] font-medium leading-5 text-sm font-Inter w-[309.33px]">
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
      <section className="py-16 bg-[#FCF3FF]">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            Our <span className="text-[#7B02A1]">Staff</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter mx-auto">
            Discover the amazing individuals who work tirelessly to nurture and
            inspire our students.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {staffs.map((staff, index) => (
            <div key={index} className="flex items-center flex-col">
              <div className="overflow-hidden group rounded-full h-64 w-64">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="rounded-full h-64 w-64 group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <h3 className="mt-6 text-[#8D0E4E] font-bold text-xl font-[roboto]">
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
