import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="bg-[#FCF3FF] min-h-screen pt-28 flex items-center justify-between px-10 md:px-20 lg:px-28">
      <div className="max-w-lg space-y-6">
        <h1 className="text-2xl text-[#57002C] font-medium font-Inter">
          Welcome to Visioneers Elementary School
        </h1>
        <h2 className="text-5xl font-bold leading-[58.51px] font-[Montserrat] text-[#57007B]">
          KNOWLEDGE IS POWER
        </h2>
        <p className="text-base font-medium text-[#57002C] leading-5">
          At VISIONEERS ELEMENTARY SCHOOL, every child is valued, every
          potential is recognized, and every step forward is a step toward
          greatness.
        </p>
        <div className="flex gap-6">
          <Link to={'/contact'}>
            <button className="bg-[#7B02A1] text-white py-3 px-10 rounded-lg shadow hover:bg-[#650180] transition">
              Contact Us
            </button>
          </Link>
          <button className="border-2 border-[#7b02a1] text-[#7b02a1] py-3 px-10 rounded-lg hover:bg-[#7b02a1] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[560px] w-[700px] relative">
        <div className="">
          <img
            src="images/schoolBoyy.jpg"
            alt=""
            className="border-[#57007B] border-2 absolute w-80 h-80 rounded-tl-[20px] rounded-br-[20px] top-0 left-0"
          />
        </div>
        <div className="">
          <img
            src="images/schoolGirll.jpg"
            alt=""
            className="border-[#57007B] border-2 absolute w-80 h-80 rounded-tl-[20px] rounded-br-[20px] bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
