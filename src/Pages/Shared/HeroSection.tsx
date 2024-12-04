import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="bg-[#FCF3FF] min-h-screen pt-28 flex items-center justify-around">
      <div className="max-w-lg space-y-6">
        <h1 className="text-2xl text-[#57007B] font-medium font-Inter">
          Welcome to Visioneers Elementary {" "}
          <br />
           School
        </h1>
        <h2 className="text-5xl font-bold leading-[58.51px] font-[freckle-face] text-[#8D0E4E]">
        Developing The Future Leading Lights.
        </h2>
        <p className="text-base font-medium text-[#57007B] leading-5">
          At VISIONEERS ELEMENTARY SCHOOL, every child is valued, every
          potential is recognized, and every step forward is a step toward
          greatness.
        </p>
        <div className="flex gap-6">
          <Link to={'/contact'}>
            <button className="bg-[#8D0E4E] text-white py-3 px-10 rounded-lg shadow hover:bg-[#681e43] transition">
              Contact Us
            </button>
          </Link>
          <button className="border-2 border-[#8D0E4E] text-[#8D0E4E] py-3 px-10 rounded-lg hover:bg-[#8D0E4E] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:h-[560px] h-[420px] xl:w-[700px] w-[520px] relative">
        <div className="group overflow-hidden rounded-tl-[20px] rounded-br-[20px] xl:w-80 xl:h-80 w-60 h-60">
          <img
            src="images/hero1.png"
            alt=""
            className="transition-all duration-300 xl:w-80 xl:h-80 w-60 h-60 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110"
          />
        </div>
        <div className="group absolute bottom-0 right-0 overflow-hidden rounded-tl-[20px] rounded-br-[20px] xl:w-80 xl:h-80 w-60 h-60">
          <img
            src="images/hero2.png"
            alt=""
            className="transition-all duration-300 xl:w-80 xl:h-80 w-60 h-60 rounded-tl-[20px] rounded-br-[20px] group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
