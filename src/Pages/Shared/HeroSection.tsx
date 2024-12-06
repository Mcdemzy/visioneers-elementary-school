import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-[#FCF3FF] min-h-screen pt-28 flex items-center justify-around">
      <div className="max-w-lg space-y-6 mx-2">
        <div className="space-y-8 mt-5 mb-8">
          <h1 className="md:text-2xl text-lg text-center lg:text-start text-[#57007B] font-medium font-Inter">
            Welcome to Visioneers Elementary <br className="lg:block hidden" />
            School
          </h1>
          <h2 className="md:text-5xl sm:text-[38px] text-[28px] leading-none font-bold md:leading-[58.51px] font-[freckle-face] text-[#8D0E4E] text-center lg:text-start">
            Developing The Future
            <br className=""/>
             Leading Lights.
          </h2>
        </div>

        <div className="block xl:h-[560px] lg:h-[420px] h-80 xl:w-[700px] lg:w-[520px] w-80  relative lg:hidden my-8 mx-auto">
          <div className="group overflow-hidden rounded-tl-[20px] rounded-br-[20px] xl:w-80 xl:h-80 lg:w-60 lg:h-60 w-40 h-40 ">
            <img
              src="images/hero1.png"
              alt=""
              className="transition-all duration-300 xl:w-80 xl:h-80 lg:w-60 lg:h-60 w-40 h-40 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110"
            />
          </div>
          <div className="group absolute bottom-0 right-0 overflow-hidden rounded-tl-[20px] rounded-br-[20px] xl:w-80 xl:h-80 w-40 h-40">
            <img
              src="images/hero2.png"
              alt=""
              className="transition-all duration-300 xl:w-80 xl:h-80 lg:w-60 lg:h-60 w-40 h-40 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110"
            />
          </div>
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

      <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-6 xl:h-[560px] h-[420px] xl:w-[700px] w-[520px] relative hidden">
        <div className="group overflow-hidden rounded-tl-[20px] rounded-br-[20px] xl:w-80 xl:h-80 w-60 h-60">
          <img
            src="images/hero1.png"
            alt=""
            className="transition-all duration-300 xl:w-80 xl:h-80 lg:w-60 lg:h-60 w-40 h-40 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110"
          />
        </div>
        <div className="group absolute bottom-0 right-0 overflow-hidden rounded-tl-[20px] rounded-br-[20px] xl:w-80 xl:h-80 w-60 h-60">
          <img
            src="images/hero2.png"
            alt=""
            className="transition-all duration-300 xl:w-80 xl:h-80 lg:w-60 lg:h-60 w-40 h-40 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
