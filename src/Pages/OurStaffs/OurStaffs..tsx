import { StaffCardData } from "../Shared/data";
import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";

function OurStaffs() {
  return (
    <div>
      <Navbar />

      {/* Our Staffs */}
      <section className="py-16 px-36">
        <div className="mx-auto text-center pt-20">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            Our <span className="text-[#7B02A1]">Staff</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter mx-auto">
            Meet Our Staff.
          </p>
        </div>

        <div className="group overflow-hidden shadow-xl shadow-[#0000001A] mt-14 h-[700px] rounded-tl-[33.33px] rounded-br-[33.33px]">
          <img
            src="/images/staffs.jpg"
            alt="Staffs"
            className="rounded-tl-[33.33px] rounded-br-[33.33px] h-[700px] group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </section>

      {/* Our Staffs card */}
      <section className="py-16 px-20">
        <div className="bg-[#57007B] rounded-md p-2 mb-10">
          <h4 className="text-base font-bold font-Inter text-[#FFFFFF] text-center">
            Our Staff Qualities & Qualifications
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {StaffCardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl hover:scale-105 transition-all duration-300 space-y-5"
            >
              <div className="flex items-center justify-center bg-[#FCF3FF] w-[60px] h-[60px] rounded-full">
                <img src={card.icon} alt={card.title} className="w-8 h-8 " />
              </div>
              <h3 className="text-lg font-bold text-[#57007B] font-Inter">
                {card.title}
              </h3>
              <div className="w-12 group-hover:w-20 transition-all duration-300 rounded-sm border-[#7B02A1] border-2"></div>
              <h4 className="font-medium text-xs italic font-[roboto]">
                {card.subTitle}
              </h4>
              <p className="text-[#000000] font-medium text-xs font-[roboto] leading-4 ">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-Inter text-[#333333] text-xl font-medium text-center leading-10 pt-24">
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
