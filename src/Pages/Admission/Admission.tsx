import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";

export default function Admission() {
  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <section className="min-h-screen pt-28  items-center justify-between px-10 md:px-20 lg:px-28">
        <img
          src="/images/admission.png"
          alt="admission"
          className="m-auto my-10 w-[50%] h-[900px]"
        />
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
