/* eslint-disable react-refresh/only-export-components */
import { company, help, icons, terms } from '../constants'
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

function Footer() {
  return (
   <>
    <motion.div variants={textVariant()} className=' footer pt-[5vh] mb-[4vh] flex justify-around mr-7 footer'>
    <div className='footer-menu'>
      <h3 className="text-[35px] font-bold">My Menu</h3>
      <p className="w-60 ">Search the menu of your favorite restaurants</p>
      <div className="flex icons">{icons.map((icons) => (
        <img src={icons.icon} key={icons.name} className='m-2  w-12 cursor-pointer img' alt="social media"/>
      ))}</div>
    </div>

   <div className="footer-links flex w-[55vw] justify-around mr-12 mb-14 h-auto">
   <div className="company">
    <p className="ml-9 text-[23px] font-bold">Company</p>
    <ul className="list-none z-50 justify-between">
          {company.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer p-3"
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>

    <div className="help">
    <p className="ml-9 font-bold text-[23px]">Help</p>
    <ul className="list-none z-50  flex flex-col justify-between">
          {help.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer p-3"
              
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>

    <div className="terms">
    <p className="ml-9 font-bold text-[23px]">Terms</p>
    <ul className="list-none z-50 justify-between flex flex-col w-auto">
          {terms.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium terms-text  cursor-pointer p-3"
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>
   </div>
    </motion.div>
   </>
  )
}

export default SectionWrapper(Footer, 'footer')