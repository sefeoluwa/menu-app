import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center justify-between py-4 fixed top-0 z-50 bg-primaryColor`}
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
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[30px] font-bold cursor-pointer">My Menu</p>
        </Link>
      </div>


      <div className="flex justify-center -ml-44 flex-1">
        <ul className="list-none hidden justify-between w-1/4  sm:flex flex-row gap-10">
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
      </div>
    </nav>
  );
};

export default Navbar;
