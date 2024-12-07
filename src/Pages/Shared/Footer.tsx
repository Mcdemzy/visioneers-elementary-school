import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { BiSolidEnvelope } from "react-icons/bi";
import { MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className=" py-[30px] px-5 w-full border mt-20 bg-[#FCF3FF]">
      <div className="space-y-[200px] mx-auto w-full py-6 lg:py-8">
        <div className="flex flex-wrap items-start justify-between space-y-10">
          <div className="flex flex-col gap-y-5 my-auto">
            <a href="/">
              <img
                src="/images/logo.png"
                className="w-[100px] h-[130px] me-3"
                alt="FlowBite Logo"
              />
            </a>
            <p className="text-[12px] font-Inter font-medium text-[#6B6B6B] md:w-[280px] w-full">
              Visioneers Elementary School is dedicated to nurturing every
              aspect of a child's development in a complex and challenging
              world. We harness all available resources to provide a distinctive
              experience for every student at Visioneers.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-bold text-xl text-[#6B6B6B] font-[roboto]">
              Quick Links
            </h2>
            <ul className="text-sm md:text-base text-[#8C8C8C] dark:text-gray-400 font-medium space-y-4">
              <li className="flex items-center gap-2">
                <LiaGreaterThanSolid />
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LiaGreaterThanSolid />
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LiaGreaterThanSolid />
                <a href="#" className="hover:underline">
                  Academics
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LiaGreaterThanSolid />
                <a href="#" className="hover:underline">
                  Admission
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LiaGreaterThanSolid />
                <a href="#" className="hover:underline">
                  Our Staffs
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LiaGreaterThanSolid />
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="font-bold text-xl text-[#6B6B6B] font-[roboto]">
              Gallery
            </h2>

            <div className="gap-3 grid grid-cols-3">
              <img src="" alt="" className="w-20 h-12 rounded-md" />
              <img src="" alt="" className="w-20 h-12 rounded-md" />
              <img src="" alt="" className="w-20 h-12 rounded-md" />
              <img src="" alt="" className="w-20 h-12 rounded-md" />
              <img src="" alt="" className="w-20 h-12 rounded-md" />
              <img src="" alt="" className="w-20 h-12 rounded-md" />
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="font-bold text-xl text-[#6B6B6B] font-[roboto]">
              Contact Us
            </h2>
            <ul className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium space-y-4">
              <li className=" flex gap-x-[10px] justify-start items-start">
                <IoMdHome color="#8C8C8C" className="text-xl" />
                <p className="font-medium lg:text-sm text-xs">
                  3, Masha Allah St, Peace Estate, Elebu, <br />
                  Oluyole Extension, Ibadan.
                </p>
              </li>
              <li className=" flex gap-x-[10px] justify-start items-center">
                <BiSolidEnvelope color="#6B6B6B" className="text-xl" />
                <a href="#" className="hover:underline font-medium lg:text-sm text-xs">
                  visioneersschool@gmail.com
                </a>
              </li>
              <li className=" flex gap-x-[10px] justify-start items-center">
                <MdPhone color="#6B6B6B" className="text-xl" />
                <div className="flex flex-col ">
                  <p className="font-medium lg:text-sm text-xs">+234 812 320 5762</p>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a href="#">
                <FaFacebookF className="bg-[#4C67BB] text-[#FFFFFF] lg:text-4xl text-[32px] p-2 rounded-full" />
              </a>
              <a href="#">
                <FaInstagram className="bg-[#F22B84] text-[#FFFFFF] lg:text-4xl text-[32px] p-2 rounded-full" />
              </a>
              <a href="#">
                <FaGoogle className="bg-[#EF413F] text-[#FFFFFF] lg:text-4xl text-[32px] p-2 rounded-full" />
              </a>
              <a href="#">
                <FaXTwitter className="bg-[#51A5E3] text-[#FFFFFF] lg:text-4xl text-[32px] p-2 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
