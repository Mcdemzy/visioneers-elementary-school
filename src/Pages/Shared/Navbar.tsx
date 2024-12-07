import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="">
      <nav
        className={`flex items-center justify-between px-6 xl:py-6 py-3 bg-opacity-0 transition-shadow duration-300 fixed w-full top-0 z-[9998] ${
          hasShadow
            ? "backdrop-blur-lg backdrop-brightness-90 bg-white/40 border border-white/20 rounded-lg shadow-lg"
            : ""
        }`}
      >
        <NavLink to={"/"}>
          <div className="xl:w-18 w-16">
            <img src="/images/logo.png" alt="Logo" />
          </div>
        </NavLink>

        <ul className="hidden md:flex items-center gap-10 font-medium text-xl">
          {["About Us", "Academics", "Admission", "Our Staffs", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `transition duration-200 ${
                      isActive ? "text-[#7B02A1]" : "text-black"
                    } hover:text-[#7B02A1]`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <button
          className="md:hidden text-black text-3xl focus:outline-none z-[10000]"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </nav>

      {/* mobilebar */}
      <div
        className={`fixed top-0 h-auto w-full bg-white shadow-lg z-[9999] transform transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } ${
          hasShadow
            ? "backdrop-blur-lg backdrop-brightness-80 bg-white/40 rounded-lg shadow-lg"
            : ""
        }`}
      >
        <button
          className="absolute top-8 right-6 text-3xl text-black focus:outline-none"
          onClick={closeSidebar}
        >
          <FiX />
        </button>

        {/* mobilebar Links */}
        <ul className="flex flex-col p-6 gap-4 font-medium text-lg mt-10">
          {[
            "Home",
            "About Us",
            "Academics",
            "Admission",
            "Our Staffs",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-[#8D0E4E] font-bold text-base"
                      : "text-[#6B6B6B] font-normal text-base"
                  } hover:text-[#8D0E4E]`
                }
                onClick={closeSidebar}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
