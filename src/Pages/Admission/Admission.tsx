// Main Admission.tsx (Refactored)
import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";
import AdmissionForm from "./components/AdmissionForm";
import SchoolInformation from "./components/SchoolInformation";

export default function Admission() {
  return (
    <>
      <Navbar />
      <section className="pt-28 items-center justify-between px-10 md:px-20 lg:px-28">
        <div className="m-auto w-full lg:w-[90%]">
          <h1 className="text-wrap flex gap-x-1.5 justify-center items-center font-Inter text-md md:text-[34px] font-bold leading-[29.05px]">
            Application For <p className="text-primary">Admission</p>
          </h1>
          <DoubleLine />
          <h2 className="mt-6 text-[#333333] flex gap-x-1.5 justify-center items-center font-Inter text-sm md:text-[27px] font-bold leading-[29.05px]">
            Registration Form
          </h2>
          <AdmissionForm />
        </div>
      </section>
      <SchoolInformation />
      <NewsLetter />
      <Footer />
    </>
  );
}