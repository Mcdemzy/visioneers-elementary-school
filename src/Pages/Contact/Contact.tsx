import { contacts } from "../Shared/data";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";
import Map from "../Shared/Map";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_2k1n5gf",
        "template_yz36xxm",
        form.current,
        "nBQdrw_fvwp3-YQ9w"
      )
      .then(
        () => {
          setShowSuccessPopup(true);
          form.current?.reset();
        },
        (error) => {
          alert(`Failed to send email: ${error.text}`);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <Navbar />
      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Message Received!
              </h3>
              <div className="mt-4 text-gray-600">
                <p>
                  Your message has been received. A staff member from Visioneers
                  will respond to you shortly.
                </p>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setShowSuccessPopup(false)}
                  className="px-6 py-2 bg-[#8D0E4E] text-white rounded-lg hover:bg-[#681e43] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Working on Contact Page */}
      <section className="py-16 lg:px-20 px-5">
        <div className="mx-auto text-center pt-20 pb-14">
          <h2 className="lg:text-2xl text-xl font-bold text-[#000000] font-Inter">
            Contact <span className="text-[#7B02A1]">Us</span>{" "}
          </h2>
          <DoubleLine />
          <p className="md:mt-5 mt-3 text-[#333333] font-medium lg:text-base md:text-sm text-xs leading-[19.36px] font-Inter mx-auto">
            We're here to answer your questions and provide the support you
            need—reach out to us anytime!
          </p>
        </div>

        <div className="border border-[#F9E2FF] rounded-lg shadow-lg py-6 px-10 mx-auto space-y-10">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text- base font-medium text-[#333333] font-[roboto] mb-1"
              >
                Full name
              </label>
              <input
                required
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Ex. John Doe"
                className="w-full p-3 border rounded-lg bg-[#FEF1F9] focus:outline-none focus:ring-2 focus:ring-[#8D0E4E]"
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
                required
                type="email"
                name="email"
                id="email"
                placeholder="Ex. email@mail.com"
                className="w-full p-3 border rounded-lg bg-[#FEF1F9] focus:outline-none focus:ring-2 focus:ring-[#8D0E4E]"
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
                required
                id="description"
                rows={4}
                name="message"
                placeholder="Description"
                className="w-full p-3 border rounded-lg bg-[#FEF1F9] focus:outline-none focus:ring-2 focus:ring-[#8D0E4E]"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={isSending}
                className="w-full hover:w-9/12 hover:bg-[#681e43] transition-all duration-700 bg-[#8D0E4E] text-white p-3 rounded-lg"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Map />

      <section className="mt-16 lg:px-20 px-5">
        <div className="bg-[#8D0E4E] lg:py-[50px] py-10 lg:px-10 px-5 rounded-2xl flex lg:flex-row flex-col justify-between gap-3">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="text-[#FFFFFF] flex gap-4 flex-1 p-4 rounded-xl transition-transform transform hover:scale-105 hover:bg-[#9E1A5E] hover:shadow-lg"
            >
              <img
                src={contact.icon}
                alt={contact.title}
                className="lg:w-11 lg:h-11 w-10 h-10"
              />
              <div className="space-y-4">
                <h3 className="font-bold lg:text-2xl text-xl">
                  {contact.title}
                </h3>
                <p className="font-medium lg:text-sm text-xs font-[roboto]">
                  {contact.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
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