import { Send } from "lucide-react";

function NewsLetters() {
  return (
    <div
      style={{ backgroundImage: 'url(/images/newsletter.png)' }}
      className="flex justify-center items-center shadow-md rounded-md mt-20 w-[90%] h-[300px] md:h-[390px] m-auto"
    >
      <div className=" space-y-[40px] m-auto">
        <p className="text-2xl font-Inter text-center font-bold">
          JOIN OUR <strong className="text-primary">NEWSLETTER</strong> TO GET
          MORE <strong className="text-primary">INFORMATION</strong> ABOUT US 
        </p>
        <form className="w-full  md:space-y-[40px]" action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm flex justify-start sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-[#6B6B6B] text-[20px] font-Inter dark:text-gray-300"
              >
                Email address
              </label>
              <input
                className="block p-3 w-full text-sm md:text-base text-black  font-Inter bg-gray-50 rounded-lg border-y-2 border-l-2 border-[#57007B] sm:rounded-none sm:rounded-l-lg focus:ring-primary focus:border-primary-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary"
                placeholder="Enter your E-mail to receive our news letter"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="-mt-4 md:-mt-0 bg-[#57007B]  py-3 md:py-3.5 px-5 w-full text-sm font-medium text-center text-white rounded-lg border-y cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <Send />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsLetters
