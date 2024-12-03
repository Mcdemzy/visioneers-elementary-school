import NewsLetter from "../Shared/NewsLetter";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

export default function AboutUs() {
  return (
    <section>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <main className="pt-28 mt-12">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          About <p className="text-primary">Us</p>
        </h1>
        <p className="text-center font-[500] font-Inter leading-[19.36px]text-[16px] text-[#333333]">
          Learn more about our school.
        </p>
        <div className="flex flex-col-reverse gap-y-10 lg:flex-row justify-start items-center gap-x-[72px] m-auto w-[90%] mt-10 md:mt-20">
          <div className="space-y-[40px] w-full lg:w-[50%]">
            <h2 className="text-[32px] leading-10 md:text-[42px] md:leading-[38.73px] font-Inter font-bold text-primary">
              Visioneers Elementary School
            </h2>
            <p className="text-sm md:text-[16px] text-[#333333] font-Inter leading-[19.36px]">
              Visioneers Elementary School, is a prestigious Nigerian secondary
              school offering an exceptional educational experience since 2010.
              With a focus on academic excellence and character development, we
              nurture young minds to reach their full potential. Our holistic
              approach includes academics, sports, arts, and character-building
              activities, creating well-rounded individuals with essential life
              skills and values. Located in Ibadan, our campus inspires
              creativity, and our state-of-the-art facilities support growth in
              various disciplines. Our dedicated teaching staff provides
              personalized attention to nurture each student's unique talents.
              At KPS, we prepare students for success in academics and life,
              instilling values of integrity, respect, and perseverance. Our
              students consistently excel in competitions and events, making
              notable contributions to society as proud alumni. Join the Kasmoz
              family for an exciting educational journey filled with growth and
              endless possibilities.
            </p>
            <button className="bg-primary text-white rounded-[4px] w-[166px] h-[51px] text-[16px] font-[500]">
              Contact Us
            </button>
          </div>
          <div className="flex justify-center items-center w-full lg:w-[50%]">
            <img
              className="w-full lg:w-[520.93px] h-[290px] rounded-lg"
              src="/images/about.png"
              alt="about"
            />
          </div>
        </div>
      </main>
      {/* our vision */}
      <div className="mt-20 md:mt-12 w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Our <p className="text-primary">Vision</p>
        </h1>
        <div className="flex flex-col gap-y-10 lg:flex-row justify-start items-center gap-x-[48px] m-auto w-[90%] mt-20">
          <div className="w-full lg:w-[55%]">
            <img
              className="w-full md:w-[751.4px] h-[300px] md:h-[420px] rounded-lg"
              src="/images/vision.png"
              alt="about"
            />
          </div>
          <div className="w-full px-6 md:px-0 lg:w-[35%]">
            <ul className="text-[#333333] space-y-[10px] list-disc font-[300] text-sm md:text-[16px] leading-[19.36px]">
              <li>
                To uphold an exceptional and innovative approach to education
                that consistently aligns with the highest international
                standards. This is achieved through a blend of rigorous academic
                pursuits, mentorship, practical fieldwork, and hands-on
                experimentation.
              </li>
              <li>
                To nurture students in a nurturing and morally-grounded
                environment, guiding their aspirations toward a virtuous way of
                life that naturally evolves into genuine leadership.
              </li>
              <li>
                To instill in students the values of obedience, kindness,
                diligence, and honesty.
              </li>
              <li>
                To assist students in comprehending the importance of mutual
                respect and in cultivating a continuous sense of self-esteem.
              </li>
              <li>
                To ignite curiosity within them and cultivate their intellectual
                abilities, fostering emotional, physical, and psychological
                growth in students.
              </li>
              <li>
                To establish an inclusive environment where students can not
                only learn about the significance of peaceful coexistence but
                also put it into practice harmoniously, regardless of their
                cultural backgrounds or religious beliefs.
              </li>
              <li>
                To utilize personalized learning techniques in educating and
                equipping our students for the future challenges they aspire to
                conquer, aligning with their unique sense of purpose.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* directors message */}
      <div className="mt-10 md:mt-20 w-full">
        <h1 className="text-[24px] flex gap-x-1.5 justify-center items-center font-Inter md:text-[34px] font-bold leading-[29.05px]">
          Director's <p className="text-primary">Message</p>
        </h1>
        <div className="flex flex-col-reverse gap-y-10 lg:flex-row justify-start items-center gap-x-[72px] m-auto w-[90%] mt-10 md:mt-20">
          <div className="space-y-[40px] w-full lg:w-[50%]">
            <h2 className="text-[32px] md:text-[42px] leading-[38.73px] font-Inter font-bold text-primary">
              Visioneers Elementary School
            </h2>
            <p className="text-sm md:text-[16px] text-[#333333] font-Inter leading-[19.36px]">
              Visioneers Elementary School, is a prestigious Nigerian secondary
              school offering an exceptional educational experience since 2010.
              With a focus on academic excellence and character development, we
              nurture young minds to reach their full potential. Our holistic
              approach includes academics, sports, arts, and character-building
              activities, creating well-rounded individuals with essential life
              skills and values. Located in Ibadan, our campus inspires
              creativity, and our state-of-the-art facilities support growth in
              various disciplines. Our dedicated teaching staff provides
              personalized attention to nurture each student's unique talents.
              At KPS, we prepare students for success in academics and life,
              instilling values of integrity, respect, and perseverance. Our
              students consistently excel in competitions and events, making
              notable contributions to society as proud alumni. Join the Kasmoz
              family for an exciting educational journey filled with growth and
              endless possibilities.
            </p>
            <p className="text-[#0C1E34] text-[20px] md:text-[24px] italic font-bold">
              ~ Prof K.A Adeyemo
            </p>
          </div>
          <div className="flex justify-center items-center  w-full lg:w-[50%]">
            <img
              className=" w-full lg:w-[520.93px] h-[290px] rounded-lg"
              src="/images/about.png"
              alt="about"
            />
          </div>
        </div>
      </div>
      {/* aim & objectives */}
      <div className="mt-10 md:mt-20  w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[24px] md:text-[34px] font-bold leading-[29.05px]">
          Aim & <p className="text-primary">Objectives</p>
        </h1>
        <p className="text-sm md:text-[16px] text-center w-[90%] md:w-[800px] m-auto text-[#333333] my-4 md:my-12">
          Visioneers Elementary School is dedicated to nurturing every aspect of
          a child's development in a complex and challenging world. A child's
          early education significantly shapes their life journey. We harness
          all available resources to provide a distinctive experience for every
          student at Kasmoz. Our approach focuses on understanding each child's
          unique qualities and supporting them in realizing their inherent
          potential and purpose in life.
        </p>
        <div
          style={{ backgroundImage: "url(/images/anthem.png)" }}
          className="flex justify-center items-center rounded-md w-[90%] m-auto h-[780px]"
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
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </section>
  );
}
