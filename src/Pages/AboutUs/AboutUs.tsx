import NewsLetter from "../Shared/NewsLetter";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import DoubleLine from "../Shared/DoubleLine";
import SchoolPrayer from "../Shared/SchoolPrayer";
import { useNavigate } from "react-router-dom";
import SchoolAnthem from "../Shared/SchoolAnthem";
import SchoolSongs from "../Shared/SchoolSongs";

export default function AboutUs() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <section>
      <Navbar />
      <main className="pt-28 mt-12">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          About <p className="text-primary">Us</p>
        </h1>
        <DoubleLine />
        <p className="mt-2 text-center font-[500] font-Inter leading-[19.36px]text-[16px] text-[#333333]">
          Learn more about our school.
        </p>
        <div className="flex flex-col gap-y-10 lg:flex-row justify-start items-center gap-x-[72px] m-auto w-[90%] mt-10 md:mt-20">
          {/* <div className="space-y-[40px] w-full lg:w-[50%]"> */}
          <div className="space-y-[40px] w-full">
            <h2 className="text-[32px] leading-10 md:text-[42px] md:leading-[38.73px] font-Inter font-bold text-[#8D0E4E]">
              Visioneers Elementary School
            </h2>
            <p>Welcome to Visioneers Elementary School</p>
            <p className="mt-6">
              At Visioneers Elementary School, we are committed on all round
              development of every pupils from academic excellence to skill
              acquisition and character development. Our mission is to nurture
              children to achieve their full potential by fostering a love for
              learning, creativity, and integrity.
            </p>
            <p className="mt-6">
              Through an all encompassing model, we blend rigorous academics
              with enriching activities in sports, arts, and skill-set
              development to develop global citizens. Our curriculum is designed
              not only to educate but also to instill essential life skills and
              values in children.
            </p>
            <p className="mt-6">
              Our vibrant school environment inspires creativity and
              exploration. Our state-of-the-art facilities ranges from our fully
              digital classrooms, well equipped music room, ICT laboratory and
              luxurious outdoor equipment enhances swift development of our
              students mentally and physically. Our "per child" mantra is the
              watch word of our teaching staff hence implementing this by
              attending to individual needs of every child in terms of time,
              passion and attention. At Visioneers Elementary School, we prepare
              our students to become global leading lights in whichever
              endeavour they find themselves in the future.
            </p>
            {/* <p className="text-sm md:text-[16px] text-[#333333] font-Inter leading-[26px]">
              Visioneers Elementary School, with a focus on academic excellence
              and character development, we nurture young minds to reach their
              full potential. Our holistic approach includes academics, sports,
              arts, and character-building activities, creating well-rounded
              individuals with essential life skills and values. Located in
              Ibadan, our campus inspires creativity, and our state-of-the-art
              facilities support growth in various disciplines. Our dedicated
              teaching staff provides personalized attention to nurture each
              student's unique talents. At Visioneers Elementary School, we
              prepare students for success in academics and life, instilling
              values of integrity, respect, and perseverance.
            </p> */}
            <p className="text-primary text-[20px] md:text-[24px] italic font-bold">
              ~ Proprietress, Visioneers Elementary School
            </p>
          </div>
          {/* <div className="flex justify-center items-center w-full lg:w-[50%]">
            <img
              className="w-full lg:w-[520.93px] h-[290px] rounded-lg"
              src="/images/directors-message.png"
              alt="about"
            />
          </div> */}
        </div>
      </main>
      {/*  vision statement */}
      <div className="mt-20 md:mt-24 w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Vision <p className="text-primary">Statement</p>
        </h1>
        <DoubleLine />
        <div className="flex flex-col-reverse gap-y-10 lg:flex-row justify-between items-center gap-x-[48px] m-auto w-[90%] mt-20">
          <div className="w-full lg:w-[45%]">
            <img
              className="w-full md:w-[500x] h-[300px] md:h-[420px] rounded-lg"
              src="/images/about.png"
              // src="/images/vision.png"
              alt="about"
            />
          </div>
          <div className="w-full px-6 md:px-0 lg:w-[45%]">
            <ul className="text-[#000000] space-y-[24px] list-disc font-[300] text-sm md:text-[24px] leading-[20px] md:leading-[44px]">
              <li>
                To raise self-actualized individuals by laying in them a strong
                foundation of academic competence, moral uprightness, mental
                fitness, emotional and social intelligence early in life.
              </li>
              <li>
                To enhance pupils to meet up with globally accepted standards.
              </li>

              <li>To develop global leading lights in all human endeavours.</li>
            </ul>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={handleClick}
                className="mt-4 bg-[#8D0E4E] text-white rounded-[4px] w-[166px] h-[51px] text-[16px] font-[500]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mission statement */}
      <div className="mt-20 md:mt-24 w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Mission <p className="text-primary">Statement</p>
        </h1>
        <DoubleLine />

        <div className="flex flex-col-reverse gap-y-10 lg:flex-row-reverse justify-between items-center gap-x-[48px] m-auto w-[90%] mt-20">
          <div className="w-full lg:w-[45%]">
            <img
              className="w-full md:w-[500x] h-[300px] md:h-[420px] rounded-lg"
              src="/images/vision.png"
              alt="about"
            />
          </div>
          <div className="w-full px-6 md:px-0 lg:w-[45%]">
            <ul className="text-[#000000] space-y-[24px] list-disc font-[300] text-sm md:text-[24px] leading-[20px] md:leading-[40px]">
              <li>
                To be a citadel of learning, where the fear of God and love to
                humanity is inculcated in our pupils.
              </li>
              <li>
                To identify and nurture the innate abilities and talents of
                every pupil.
              </li>

              <li>
                To create a safe and supportive learning environment, where
                every child feels valued and respected.
              </li>
              <li>
                To cultivate the skills and attitudes necessary for pupils to
                become self-directed learners and productive members of society.
              </li>
              <li>
                To inculcate and develop the art of visioneering, innovation and
                good character skills in our students for them to be outstanding
                in a highly competitive world.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* aim & objectives */}
      <div className="mt-10 md:mt-28  w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
          Aim & <p className="text-primary">Objectives</p>
        </h1>
        <DoubleLine />
        <div className="mt-20 md:mt-24 w-full">
          <div className="flex flex-col-reverse gap-y-10 lg:flex-row justify-between items-center gap-x-[40px] m-auto w-[90%] mt-20">
            <div className="w-full lg:w-[45%]">
              <img
                className="w-full md:w-[400x] h-[200px] md:h-[292px] rounded-lg"
                src="/images/directors-message.png"
                alt="about"
              />
            </div>
            <div className="w-full px-6 md:px-0 lg:w-[50%]">
              <p className="text-[16px] leading-[44px]">
                Visioneers Elementary School is dedicated to nurturing every
                aspect of a child's development in a complex and challenging
                world. A child's early education significantly shapes their life
                journey. We harness all available resources to provide a
                distinctive experience for every student at VES. Our approach
                focuses on understanding each child's unique qualities and
                supporting them in realizing their inherent potential and
                purpose in life.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <p className="text-sm md:text-[16px] text-center w-[90%] md:w-[80%] m-auto text-[#000000] my-4 md:my-16 leading-[30px]">
          Our aim is to identify and recognize the individual differences in
          children and to provide them with a positive and complete educational
          experience. We seek to identify and nurture the innate abilities and
          talents of every child by paying close attention to “Per Child” No
          child is a failure, we subscribe to the fact that every child can
          learn, but not at the same pace. We deliver a fully self-actualized
          child who has undergone thorough academic learning process through
          learning forms that are learner centered,
          content focused, an interactive and participatory methods of
          learning.  To achieve our ‘Per child’ mantra, we maintain a small
          class size of 10:1 in nursery section and 15:1 in the primary section
          The ‘Per child’ model adopted by VES grooms every child into a TOTAL
          CHILD who possesses optimum capacity academically and morally with
          life skill sets that fits into acceptable global standard. Your child
          under our care will gradually turn out to be a global leading light in
          any chosen endeavour.
        </p>
        {/* <div
          style={{ backgroundImage: "url(/images/anthem.png)" }}
          className="bg-[#00000033] opacity-[70%] flex justify-center items-center rounded-md w-[90%] m-auto h-[780px]"
        >
          <div className="text-center w-[510px] h-fit md:h-[558px] m-auto">
            <h2 className="font-Inter font-bold text-white text-[30px] md:text-[40px]">
              School Anthem
            </h2>
            <p className="mt-5 text-base md:text-[24px] font-[300] leading-[40px] font-Inter text-white">
              Great Kasmoz, Great Kasmoz, <br />
              Oyo state's most beautiful school <br />
              We are the leaders of tomorrow,
              <br />
              <p className="inline text-[#AB626F]">Knowledge is power</p>
              , our motto. <br />
              Forward ever, backward never,
              <br />
              <p className="inline text-[#AB626F]">
                Impacting knowledge, securing future,
              </p>
              <br />
              Great Kasmoz, Great!! <br /> I love you, aiming high, shooting
              high. <br /> There is no other Kasmoz in the universe, <br />{" "}
              Another Kasmoz is a counterfeit. <br /> Great! Great! Great!
              Great! Great! <br /> Kasmoz! Kasmoz! Kasmoz!!
            </p>
          </div>
        </div> */}
      </div>
      <div className="w-[90%] m-auto">
        <SchoolPrayer />
      </div>
      <div className="mt-12 w-[90%] m-auto">
        <SchoolAnthem />
      </div>
      <div className="mt-12 w-[90%] m-auto">
        <SchoolSongs />
      </div>
      <NewsLetter />
      <Footer />
    </section>
  );
}
