import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-around xl:py-6 py-3 gap-80 bg-opacity-0 transition-shadow duration-300 fixed w-full top-0 z-[10000] ${
        hasShadow
          ? 'backdrop-blur-lg backdrop-brightness-90 bg-white/40 border border-white/20 rounded-lg shadow-lg'
          : ''
      }`}
    >
      <NavLink to={'/'}>
        <div className="xl:w-16 w-14">
          <img src="/images/logo.png" alt="Logo" />
        </div>
      </NavLink>

      <ul className="flex items-center gap-20 font-medium text-xl">
        {['About Us', 'Academics', 'Admission', 'Our Staffs', 'Contact'].map(
          (item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive ? 'text-[#7B02A1]' : 'text-black'
                  } hover:text-[#7B02A1]`
                }
              >
                {item}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
