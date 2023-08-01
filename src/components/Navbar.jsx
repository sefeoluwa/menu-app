import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center justify-between py-4 pt-8 fixed top-0 z-50 bg-primaryColor`}
    >
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="my menu logo" className="w-9 h-9 object-contain" />
          <p className="text-[30px] font-bold cursor-pointer">My Menu</p>
        </Link>
      </div>


      <div className="flex justify-center  -ml-44 flex-1">
        <ul className="list-none hidden z-50 justify-between w-1/4  sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer"
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
         <img src={ toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"  onClick={() => setToggle(!toggle)} />

         <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-white font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
