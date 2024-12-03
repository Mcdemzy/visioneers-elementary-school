import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";

export default function Academics() {
  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <section className="min-h-screen pt-28  items-center justify-between px-10 md:px-20 lg:px-28">
        <h1 className="my-6 flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Our <p className="text-primary">Curriculum</p>
        </h1>
        <div className="px-4 md:px-0 gap-y-[80px] gap-x-[30px] py-14 flex flex-col justify-center bg-[#E8E8E8] my-10 w-[100%]">
          <div className="text-center">
            <h2 className="text-[25px] md:text-[40px] text-[#0C1E34] font-[700] font-Inter">
              Curriculum Overview
            </h2>
            <p className="py-1 text-[#333333] text-xs md:text-[16px] font-Inter font-[400] leading-[26px]">
              Visioneers Elementary School Operates Two Curricula:
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[25px] md:text-[40px] text-[#0C1E34] font-[700] font-Inter">
              Nigerian Curriculum
            </h2>
            <p className="text-[#333333] text-xs md:text-[16px] font-Inter font-[400] leading-[26px]">
              (a) Students undergo the Basic Education Certificate Examinations
              (BECE) administered by the National Examination Council (NECO) and
              Oyo State at the junior level.
            </p>
            <p className="py-5 text-[#333333] text-xs md:text-[16px] font-Inter font-[400] leading-[26px]">
              (b)The Senior School Certificate Examinations (SSCE) are conducted
              by both the West African Examinations Council (WAEC) and NECO.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[25px] md:text-[40px] text-[#0C1E34] font-[700] font-Inter">
              British Curriculum
            </h2>
            <p className="text-[#333333] text-sm md:text-[16px] font-Inter font-[400] leading-[26px]">
              Our students follow the British Curriculum, preparing them for the
              Cambridge GCE O Level Examinations and the SAT examinations.
            </p>
            <p className="py-5 text-[#333333] text-sm md:text-[16px] font-Inter font-[400] leading-[26px]">
              This dual-curriculum approach equips our students with a
              comprehensive education that caters to diverse learning pathways
              and global opportunities.
            </p>
          </div>
        </div>
        <div>
          <h1 className="py-20 flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
            JSS Subject <p className="text-primary">Combination</p>
          </h1>
          <div className=" flex flex-row justify-start items-center gap-x-[48px] w-full h-[477px]">
            <div className="hidden md:block bg-[#0000001A] rounded-md h-[420px] w-[60%]"></div>
            <div className="md:h-[477px] w-full md:w-[40%]">
              <div className="rounded-md flex justify-center items-center bg-[#7B02A1] w-full text-white h-[43px]">
                <p className="text-[16px] text-[#FFFFFF] font-Inter leading-[19.36px] font-[700]">
                  Subjects
                </p>
              </div>
              <section className="mt-10 flex flex-row justify-between">
                <div>
                  <ul className="space-y-[20px] text-sm md:text-[16px] font-Inter font-[400] leading-[26px] text-[#333333]">
                    <li>English Language</li>
                    <li>Mathematics</li>
                    <li>Basic Science</li>
                    <li>Basic Technology</li>
                    <li>Agricultural Science</li>
                    <li>Physical and Health Education</li>
                    <li>French Language</li>
                    <li>Yoruba Language</li>
                    <li>Cultural and Creative Arts</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-[20px] text-sm md:text-[16px] font-Inter font-[400] leading-[26px] text-[#333333]">
                    <li>Music</li>
                    <li>Business Studies</li>
                    <li>Civic Education</li>
                    <li>Social Studies</li>
                    <li>Home Economics</li>
                    <li>Christian Religious Studies</li>
                    <li>Islamic Religious Studies</li>
                    <li>History</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* sss subject combination */}
        <div>
          <h1 className="py-20 flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
            SSS Subject <p className="text-primary">Combination</p>
          </h1>

          <section className="flex flex-wrap justify-between items-center">
            <div className="md:h-[477px] w-[30%]">
              <div className="px-4 text-center md:text-start md:px-0 rounded-md flex justify-center items-center bg-[#7B02A1] w-full text-white h-[43px]">
                <p className="text-sm md:text-[16px] text-[#FFFFFF] font-Inter leading-[19.36px] font-[700]">
                  Science Class
                </p>
              </div>
              <section className="mt-10 flex flex-row justify-between">
                <div>
                  <ul className="space-y-[20px] text-[16px] font-Inter font-[400] leading-[26px] text-[#333333]">
                    <li>English Language</li>
                    <li>Mathematics</li>
                    <li>Civic Education</li>
                    <li>Biology</li>
                    <li>Economics / Geography</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Agric / Computer Sciencs / T.D</li>
                    <li>Further Mathematics</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="md:h-[477px] w-[30%]">
              <div className="px-4 text-center md:text-start md:px-0 rounded-md flex justify-center items-center bg-[#7B02A1] w-full text-white h-[43px]">
                <p className="text-sm md:text-[16px] text-[#FFFFFF] font-Inter leading-[19.36px] font-[700]">
                  Commercial Class
                </p>
              </div>
              <section className="mt-10 flex flex-row justify-between">
                <div>
                  <ul className="space-y-[20px] text-[16px] font-Inter font-[400] leading-[26px] text-[#333333]">
                    <li>English Language</li>
                    <li>Mathematics</li>
                    <li>Civic Education</li>
                    <li>Biology</li>
                    <li>Economics / Geography</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Agric/ Computer Science / T.D</li>
                    <li>Further Mathematics</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="md:h-[477px] w-[30%]">
              <div className="px-4 text-center md:text-start md:px-0 rounded-md flex justify-center items-center bg-[#7B02A1] w-full text-white h-[43px]">
                <p className="text-sm md:text-[16px] text-[#FFFFFF] font-Inter leading-[19.36px] font-[700]">
                  Art Class
                </p>
              </div>
              <section className="mt-10 flex flex-row justify-between">
                <div>
                  <ul className="space-y-[20px] text-[16px] font-Inter font-[400] leading-[26px] text-[#333333]">
                    <li>English Language</li>
                    <li>Mathematics</li>
                    <li>Civic Education</li>
                    <li>Biology</li>
                    <li>Economics / Geography</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Agric/ Computer Science / T.D</li>
                    <li>Further Mathematics</li>
                  </ul>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div className="pt-32">
          <h1 className=" flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
            Our Photo <p className="text-primary">Gallery</p>
          </h1>
          <p className="mt-4 text-center text-[#333333] text-sm md:text-[16px] font-Inter font-[500]">
            Join us as we showcase unforgettable moments and exciting events
            through our vibrant gallery!
          </p>
          <div className="mt-12 flex flex-wrap justify-center  gap-[24px] items-center w-full">
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center  gap-[24px] items-center w-full">
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center  gap-[24px] items-center w-full">
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center  gap-[24px] items-center w-full">
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
            <div className="bg-[#E8E8E8] w-[45%] md:w-[23%] h-[130px] md:h-[320px] rounded-[12px]"></div>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
