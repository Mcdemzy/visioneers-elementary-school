import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";

export default function Admission() {
  return (
    <>
      <Navbar />
      <section className=" pt-28  items-center justify-between px-10 md:px-20 lg:px-28">
        <img
          src="/images/admission.png"
          alt="admission"
          className="m-auto w-full lg:w-[50%] h-[583.3px] md:h-[900px]"
        />
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
