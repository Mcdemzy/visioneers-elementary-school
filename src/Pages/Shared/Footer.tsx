import {
  Compass,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

function Footer() {
  return (
    <footer className=" pt-[20px] w-full border mt-20 bg-[#FCF3FF]">
      <div className="space-y-[200px] mx-auto w-full  p-6 py-6 lg:py-8">
        <div className="space-y-10 md:flex md:justify-start">
          <div className="w-full  grid-cols-2 gap-8 sm:gap-6 flex flex-row justify-between gap-x-[8px] md:gap-x-[150px] flex-wrap">
            <div className=" mb-6 md:mb-0">
              <a href="#" className="w-[280px] flex flex-col gap-y-10">
                <img
                  src="/images/logo.png"
                  className="w-[90.25px] h-[118px] me-3"
                  alt="FlowBite Logo"
                />
                <p className="text-[12px] font-Inter font-medium text-[#6B6B6B]">
                  Visioneers Elementary School is dedicated to nurturing every
                  aspect of a child's development in a complex and challenging
                  world. We harness all available resources to provide a
                  distinctive experience for every student at Visioneers.
                </p>
              </a>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#6B6B6B] text-[20px] font-Inter uppercase">
                Links
              </h2>
              <ul className="text-sm md:text-base text-[#8C8C8C] dark:text-gray-400 font-medium space-y-4">
                <li className="">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    Academics
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    Admission
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    Our Staffs
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#6B6B6B] text-[20px] font-Inter uppercase">
                Contact Us
              </h2>
              <ul className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li className=" flex gap-x-[10px] justify-start items-center">
                  <Compass color="#6B6B6B" />
                  <a href="#" className="hover:underline ">
                    visioneerselementaryschool.com
                  </a>
                </li>
                <li className=" flex gap-x-[10px] justify-start items-center">
                  <Mail color="#6B6B6B" />
                  <a href="#" className="hover:underline ">
                    visioneersschool@gmail.com
                  </a>
                </li>
                <li className=" flex gap-x-[10px] justify-start items-center">
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
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#6B6B6B] text-[20px] font-Inter uppercase">
                Social Contact
              </h2>
              <ul className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li className=" flex gap-x-[10px] justify-start items-center">
                  <Facebook color="#6B6B6B" />
                  <a href="#" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li className=" flex gap-x-[10px] justify-start items-center">
                  <Twitter color="#6B6B6B" />
                  <a href="#" className="hover:underline ">
                    Twitter
                  </a>
                </li>
                <li className=" flex gap-x-[10px] justify-start items-center">
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
  );
}

export default Footer;
