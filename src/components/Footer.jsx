import React from 'react'
import { company, help, icons, terms } from '../constants'
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant } from '../utils/motion';

function Footer() {
  return (
   <>
    <motion.div variants={textVariant()} className='pt-[5vh]'>
    <div>
      <h3>My Menu</h3>
      <p>Search the menu of your favorite restaurants</p>
      <div className="">{icons.map((icons) => (
        <img src={icons.icon} key={icons.name} className='m-3 bg-black'/>
      ))}</div>
    </div>

    <div className="">
    <ul className="list-none hidden z-50 justify-between w-1/4  sm:flex flex-row gap-10">
          {company.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer"
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>

    <div className="">
    <ul className="list-none hidden z-50 justify-between w-1/4  sm:flex flex-row gap-10">
          {help.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer"
              
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>

    <div className="">
    <ul className="list-none hidden z-50 justify-between w-1/4  sm:flex flex-row gap-10">
          {terms.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer"
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>
    </motion.div>
   </>
  )
}

export default SectionWrapper(Footer, 'footer')