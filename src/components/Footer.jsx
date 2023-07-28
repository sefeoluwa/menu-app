/* eslint-disable react-refresh/only-export-components */
import { company, help, icons, terms } from '../constants'
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

function Footer() {
  return (
   <>
    <motion.div variants={textVariant()} className='pt-[5vh] flex justify-around mr-7 footer'>
    <div>
      <h3 className="text-[35px] font-bold">My Menu</h3>
      <p>Search the menu of your favorite restaurants</p>
      <div className="flex ">{icons.map((icons) => (
        <img src={icons.icon} key={icons.name} className='m-3  cursor-pointer img'/>
      ))}</div>
    </div>

    <div className="company">
    <p>Company</p>
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
    <p>Help</p>
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
    <p>Terms</p>
    <ul className="list-none z-50 justify-between flex flex-col w-auto">
          {terms.map((link) => (
            <li
              key={link.id}
              className="text-[20px] pl-10 font-medium cursor-pointer p-3"
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

export default Footer;