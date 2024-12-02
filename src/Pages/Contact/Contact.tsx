import { contacts } from "../Shared/data";
import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";
import Map from "../Shared/Map";

function Contact() {
  return (
    <div>
      <Navbar />

      <section className="py-16 px-20">
        <div className="mx-auto text-center pt-20 pb-14">
          <h2 className="text-2xl font-bold text-[#000000] font-Inter">
            Contact <span className="text-[#7B02A1]">Us</span>{" "}
          </h2>
          <DoubleLine />
          <p className="mt-5 text-[#333333] font-medium text-base leading-[19.36px] font-Inter mx-auto">
            We're here to answer your questions and provide the support you
            need—reach out to us anytime!
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-lg py-6 px-10 mx-auto space-y-10">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <form action="" className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text- base font-medium text-[#333333] font-[roboto] mb-1"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Ex. John Doe"
                className="w-full p-3 border rounded-lg bg-[#FCF3FF] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text- base font-medium text-[#333333] font-[roboto] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ex. email@mail.com"
                className="w-full p-3 border rounded-lg bg-[#FCF3FF] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text- base font-medium text-[#333333] font-[roboto] mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Description"
                className="w-full p-3 border rounded-lg bg-[#FCF3FF] focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-full hover:w-9/12 hover:bg-[#5e2071] transition-all duration-700 bg-[#7B02A1] text-white p-3 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Map />

      <section className="mt-16 px-20">
        <div className="bg-[#57007B] py-[60px] px-10 rounded-2xl flex justify-between gap-3">
          {contacts.map((contact, index) => (
            <div key={index} className="text-[#FFFFFF] flex gap-4 flex-1">
              <img
                src={contact.icon}
                alt={contact.title}
                className="w-11 h-11"
              />
              <div className="space-y-4">
                <h3 className="font-bold text-2xl">{contact.title}</h3>
                <p className="font-medium text-sm font-[roboto]">
                  {contact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
