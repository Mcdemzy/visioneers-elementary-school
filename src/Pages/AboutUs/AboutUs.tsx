import {
  Compass,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section>
      <nav className="w-full h-[126.41px] shadow-lg"></nav>
      <main className="mt-12">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          About <p className="text-primary">Us</p>
        </h1>
        <p className="text-center font-[500] font-Inter leading-[19.36px]text-[16px] text-[#333333]">
          Learn more about our school.
        </p>
        <div className="flex justify-start items-center gap-x-[72px] h-[436px] m-auto w-[90%] mt-20">
          <div className="space-y-[40px] w-[50%] h-[436px]">
            <h2 className="text-[42px] leading-[38.73px] font-Inter font-bold text-primary">
              Visioneers Elementary School
            </h2>
            <p className="text-[16px] text-[#333333] font-Inter leading-[19.36px]">
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
          <div className="flex justify-center items-center w-[50%] h-[436px]">
            <img
              className="w-[520.93px] h-[290px] rounded-lg"
              src="/images/about.png"
              alt="about"
            />
          </div>
        </div>
      </main>
      {/* our vision */}
      <div className="mt-12 w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Our <p className="text-primary">Vision</p>
        </h1>
        <div className="flex justify-start items-center gap-x-[48px] h-[456px] m-auto w-[90%] mt-20">
          <div className="w-[55%] h-[436px]">
            <img
              className="w-[751.4px] h-[420px] rounded-lg"
              src="/images/vision.png"
              alt="about"
            />
          </div>
          <div className="w-[35%] h-[436px]">
            <ul className="text-[#333333] space-y-[10px] list-disc font-[300] text-[16px] leading-[19.36px]">
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
      <div className="mt-20 w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Director's <p className="text-primary">Message</p>
        </h1>
        <div className="flex justify-start items-center gap-x-[72px] h-[436px] m-auto w-[90%] mt-20">
          <div className="space-y-[40px] w-[50%] h-[436px]">
            <h2 className="text-[42px] leading-[38.73px] font-Inter font-bold text-primary">
              Visioneers Elementary School
            </h2>
            <p className="text-[16px] text-[#333333] font-Inter leading-[19.36px]">
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
            <p className="text-[#0C1E34] text-[24px] italic font-bold">
              ~ Prof K.A Adeyemo
            </p>
          </div>
          <div className="flex justify-center items-center w-[50%] h-[436px]">
            <img
              className="w-[520.93px] h-[290px] rounded-lg"
              src="/images/about.png"
              alt="about"
            />
          </div>
        </div>
      </div>
      {/* aim & objectives */}
      <div className="mt-20  w-full">
        <h1 className="flex gap-x-1.5 justify-center items-center font-Inter text-[34px] font-bold leading-[29.05px]">
          Aim & <p className="text-primary">Objectives</p>
        </h1>
        <p className="text-[16px] text-center w-[800px] m-auto text-[#333333] my-12">
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
          <div className="text-center w-[510px] h-[558px] m-auto">
            <h2 className="font-Inter font-bold text-white text-[40px]">
              School Anthem
            </h2>
            <p className=" mt-5 text-[24px] font-[300] leading-[40px] font-Inter text-white">
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

      {/* news letters */}
      <div
        style={{ backgroundImage: "url(/images/newsletter.png)" }}
        className="flex justify-center items-center shadow-md rounded-md mt-20 w-[90%] h-[390px] m-auto"
      >
        <div className=" space-y-[40px] w-[60%] h-[117px] m-auto">
          <p className="text-[24px] font-Inter text-center font-[700]">
            JOIN OUR <strong className="text-primary">NEWSLETTER</strong> TO GET
            MORE <strong className="text-primary">INFORMATION</strong> ABOUT US
          </p>
          <form className="space-y-[40px]" action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-[#6B6B6B] text-[20px] font-Inter dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  className="block p-3 w-full  text-base text-black  font-Inter bg-gray-50 rounded-lg border-y-2 border-l-2 border-[#57007B] sm:rounded-none sm:rounded-l-lg focus:ring-primary focus:border-primary-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary"
                  placeholder="Enter your E-mail to receive our news letter"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#57007B] py-3.5 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <Send />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="px-[80px] pt-[20px] w-full border mt-20 bg-[#FCF3FF]">
        <div className="space-y-[200px] mx-auto w-full  p-4 py-6 lg:py-8">
          <div className="space-y-10 md:flex md:justify-start gap-x-[150px]">
            <div className=" mb-6 md:mb-0">
              <a href="#" className="w-[280px] flex flex-col gap-y-[24px]">
                <img
                  src="/images/logo.png"
                  className="w-[90.25px] h-[118px] me-3"
                  alt="FlowBite Logo"
                />
                <p className="text-[12px] font-Inter font-[500] leading-[14.52px] text-[#6B6B6B]">
                  Visioneers Elementary School is dedicated to nurturing every
                  aspect of a child's development in a complex and challenging
                  world. We harness all available resources to provide a
                  distinctive experience for every student at Visioneers.
                </p>
              </a>
            </div>
            <div className="w-full grid grid-cols-2 gap-8 sm:gap-6 sm:flex sm:flex-row sm:justify-between gap-x-[150px] flex-wrap">
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-[#6B6B6B] text-[20px] font-Inter uppercase">
                  Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Academics
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Admission
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Our Staffs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-[#6B6B6B] text-[20px] font-Inter uppercase">
                  Contact Us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex gap-x-[10px] justify-start items-center">
                    <Compass color="#6B6B6B" />
                    <a href="#" className="hover:underline ">
                      visioneerselementaryschool.com
                    </a>
                  </li>
                  <li className="mb-4 flex gap-x-[10px] justify-start items-center">
                    <Mail color="#6B6B6B" />
                    <a href="#" className="hover:underline ">
                      visioneersschool@gmail.com
                    </a>
                  </li>
                  <li className="mb-4 flex gap-x-[10px] justify-start items-center">
                    <Phone color="#6B6B6B" />
                    <div className="flex flex-col ">
                      <a href="#" className="hover:underline ">
                        +234 814 3036019
                      </a>
                      <a href="#" className="hover:underline ">
                        +234 814 3036019
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-[#6B6B6B] text-[20px] font-Inter uppercase">
                  Social Contact
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex gap-x-[10px] justify-start items-center">
                    <Facebook color="#6B6B6B" />
                    <a href="#" className="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4 flex gap-x-[10px] justify-start items-center">
                    <Twitter color="#6B6B6B" />
                    <a href="#" className="hover:underline ">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4 flex gap-x-[10px] justify-start items-center">
                    <Instagram color="#6B6B6B" />
                    <a href="#" className="hover:underline ">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
