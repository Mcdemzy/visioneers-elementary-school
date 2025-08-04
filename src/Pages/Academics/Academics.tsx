import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Gallery from "../Shared/Gallery";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";

export default function Academics() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-28  items-center justify-between px-10 md:px-20 lg:px-28">
        <h1 className="my-6 flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Our <p className="text-primary">Curriculum</p>
        </h1>
        <DoubleLine />
        <div className="w-[100%] h-[233px] md:w-[80%] md:h-[637.5px] m-auto mt-[35.71px]">
          <img
            src="/images/curriculum.png"
            alt="curriculum"
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="px-2 md:px-0 gap-y-[40px] gap-x-[30px] py-14 flex flex-col justify-center my-10 w-[100%]">
          <div className="text-center">
            <h2 className="text-[20px] md:text-[40px] text-[#8D0E4E] font-[700] font-Inter">
              Curriculum Overview
            </h2>
            <p className="py-1 text-[#333333] text-[12px] md:text-[16px] font-Inter font-[400] leading-[26px]">
              Visioneers Elementary School Operates Two Curricula:
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[25px] md:text-[40px] text-[#0C1E34] font-[700] font-Inter">
              Nigerian Curriculum
            </h2>
            <p className="text-[#333333] text-xs md:text-[16px] font-Inter font-[400] leading-[24px]">
              The Nigerian Curriculum for elementary schools, designed by the
              Nigerian Educational Research and Development Council (NERDC),
              covers Primary 1 to 6 (ages 6–11). It aims to build foundational
              skills in literacy, numeracy, and social values while fostering
              national unity and cultural awareness.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[25px] md:text-[40px] text-[#0C1E34] font-[700] font-Inter">
              British Curriculum
            </h2>
            <p className="text-[#333333] text-sm md:text-[16px] font-Inter font-[400] leading-[24px]">
              The British Curriculum, also known as the National Curriculum for
              England, is widely adopted in international schools. It covers Key
              Stage 1 (ages 5–7) and Key Stage 2 (ages 7–11), focusing on
              building knowledge, skills, and understanding through a broad and
              balanced approach.
            </p>
            {/*  */}
            <p className="mt-8 text-[#333333] text-sm md:text-[16px] font-Inter font-[400] leading-[24px]">
              By our 21st century education, we place emphasis on digital
              literacy to equip our children to become global leading light. All
              our classrooms are fitted with interactive white boards and
              projectors to facilitate learning. Digital literacy helps build
              skill set needed <br />
              globally; thus, it equips children for the future needs. 
            </p>
            <p className="mt-1 text-[#333333] text-sm md:text-[16px] font-Inter font-[400] leading-[24px]">
              We currently operate the EYFS, the Nigerian blended with the
              British curriculum. Our carefully designed programmes cater to
              <br /> every stage of our children.
            </p>
          </div>
        </div>
        <div>
          <h1 className="pt-20 flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
            Subject <p className="text-primary">Combination</p>
          </h1>
          <DoubleLine />

          <div className="mt-20  flex flex-col flex-wrap gap-y-[40px] md:flex-row justify-between items-center gap-x-[48px] w-full">
            <div className="block bg-[#0000001A] rounded-md h-[420px] w-full md:w-[50%]">
              <img
                className="rounded-md w-full h-full"
                src="/images/subjects.png"
                alt="subjects"
              />
            </div>
            <section className="space-y-6  md:w-[40%]">
              <p>
                <strong>CRECHÉ (Infant and Toddlers) –</strong> This is a safe
                and loving space where little ones are cared for with warmth,
                engaging activities and gentle guidance.
              </p>
              <p>
                <strong> PRESCHOOL – </strong>This is a nurturing and
                stimulating space that will arouse their curiosity through hands
                on teaching, experiential learning, play based learning which
                nurtures their creativity.
              </p>
              <p>
                <strong>PRIMARY – </strong>This is an engaging learning space
                where our pupils develop critical thinking skills, problem
                solving, creativity and thirst for indepth knowledge. At VES, we
                collaborate and foster cordial relationship with our parent.
                With our robust curriculum, experienced educators, focus on
                academic, talents, personal and character growth, we churn out
                global leaders.
              </p>
              <p>
                At VES, we collaborate and foster cordial relationship with our
                parents and community.
              </p>
            </section>
          </div>
        </div>
        {/* back 2 school */}

        {/* <div className="mt-20 md:mt-24 w-full">
          <div className="flex flex-col-reverse gap-y-10 lg:flex-row-reverse justify-between items-center gap-x-[48px] m-auto  mt-20">
            <div className="w-full lg:w-[45%]">
              <img
                className="w-full md:w-[500x] h-[300px] md:h-[420px] rounded-lg"
                src="/images/back2school.png"
                alt="about"
              />
            </div>
            <div className="w-full px-6 md:px-0 lg:w-[45%]">
              <p>
                Welcome to VES, we look forward to a cordial relationship with
                you.
              </p>
              <p>Please note the following:</p>
              <ul className="text-[#000000] space-y-[24px] list-disc font-[300] text-sm md:text-[16px] leading-[20px] md:leading-[20px]">
                <li>
                  The school resumes at 7:30am and closes at 4:00pm prompt.
                </li>

                <li>
                  The crèche operates between 7:00am and 5:00pm Monday through
                  Friday. (We observe all public holidays)
                </li>

                <li>
                  Your Pre-school child should come to school with the
                  following: <br />• Adequate portion of breakfast, snacks,
                  drinks and lunch. <br />
                  • Trainer pants and diapers (4) sets, if your child is not
                  toilet trained.   <br />
                  • Two sets of clothing, please include sweaters on rainy days
                  in school.
                  <br />
                </li>
                <li>
                  You will be contacted via phone if your child falls ill while
                  in school. In rare cases, your specified medical facility
                  would be consulted. Note all medical bill is borne by parent.
                </li>
                <li>
                  A child with illness/communicable infection must remain at
                  home until fully recovered.
                </li>
                <li>
                  Parents/guardian are expected to pick their children/ward on
                  time. Your child will not be released o stranger unless after
                  a verifiable phone call accompanied by signed letter to the
                  school.
                </li>
                <li>
                  Please note that all fees are to be paid on/before resumption
                  date of every new term.
                </li>
                <li>
                  You will receive periodical report of your children/ward
                  regularly.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="pt-32">
          <h1 className=" flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
            Our Photo <p className="text-primary">Gallery</p>
          </h1>
          <DoubleLine />
          <p className="mt-4 text-center text-[#333333] text-sm md:text-[16px] font-Inter font-[500]">
            Join us as we showcase unforgettable moments and exciting events
            through our vibrant gallery!
          </p>
          <div>
            <Gallery />
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
