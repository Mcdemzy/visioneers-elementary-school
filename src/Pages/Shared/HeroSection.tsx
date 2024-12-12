import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-[#FEF1F9] min-h-screen py-28 flex items-center justify-around lg:bg-none bg-[url('images/hero1.png')] bg-no-repeat bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-white bg-opacity-75 pointer-events-none z-0"></div>
      <div className="max-w-lg space-y-6 relative z-10">
        <div className="space-y-8 mt-5 mb-8">
          <h1 className="md:text-2xl text-lg text-center lg:text-start text-[#57007B] font-medium font-Inter">
            Welcome to Visioneers Elementary <br className="lg:block hidden" />
            School
          </h1>
          <h2 className="md:text-5xl sm:text-[38px] text-[28px] leading-none font-bold md:leading-[58.51px] font-[freckle-face] text-[#8D0E4E] text-center lg:text-start">
            Developing Global
            <br className="" />
            Leading Lights.
          </h2>
        </div>

        {/* one image */}
        <div className="rounded-tl-[20px] rounded-br-[20px] block lg:hidden mx-auto w-fit my-8">
          <img
            src="images/hero1.png"
            alt=""
            className=" rounded-tl-[20px] rounded-br-[20px] "
          />
        </div>

        <div className="space-y-8 flex flex-col pb-14 items-center lg:items-start mt-8">
          <p className="md:text-base text-sm mx-5 font-medium text-[#57007B] leading-5 lg:text-start text-center">
            At VISIONEERS ELEMENTARY SCHOOL, every child is valued, every
            potential is recognized, and every step forward is a step toward
            greatness.
          </p>
          <div className="flex gap-6 space-y-0">
            <Link to={"/contact"}>
              <button className="border-2 border-[#8D0E4E] bg-[#8D0E4E] text-white lg:py-3 py-2 lg:px-10 px-8 rounded-lg shadow hover:bg-[#681e43] transition">
                Contact Us
              </button>
            </Link>
            <Link to={"#"}>
              <button className="border-2 border-[#8D0E4E] text-[#8D0E4E] lg:py-3 py-2 lg:px-10 px-8 rounded-lg hover:bg-[#8D0E4E] hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* desktop image */}
      <div className="group overflow-hidden rounded-tl-[20px] rounded-br-[20px] lg:block hidden z-10">
        <img
          src="images/hero0.png"
          alt=""
          className="transition-all duration-300 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110 w-[420px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
