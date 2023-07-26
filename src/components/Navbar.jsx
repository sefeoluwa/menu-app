import React, { useState} from "react";
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";





const Navbar = () => {

  const [active, setActive] = useState("");
const [toggle, setToggle] = useState(false);
const [scrolled, setScrolled] = useState(false);

  return (
    <nav  className={`${ styles.paddingX } w-full flex items-center py-4 fixed top-0 z-50`}>
    <div className="w-full flex justify-start items-center max-w-7xl mx-auto">
        <Link to="/" 
        className="flex items-center gap-2"  
        onClick={() => {setActive("");
        window.scrollTo(0,0)}}>

          <div className="flex ">
           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className=' text-[20px] font-bold cursor-pointer flex'>My Menu</p>
          </div>
       </Link>

       <ul className="list-none hidden sm:flex flex-row  ml-24 gap-10">
        {navLinks.map((Link) => ( 
          <li
          key={Link.id}
          className={`${
            active === Link.title ? "text-white" : "text-secondary"
          }hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(Link.title)}
          >
            <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
        ))}
        </ul>
     </div>
    </nav>
  )
}

export default Navbar