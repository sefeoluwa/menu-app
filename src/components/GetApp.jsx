/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import SectionWrapper from '../hoc/SectionWrapper';
import { download } from "../constants";


function GetApp() {
  return (
    <>
      <motion.p className="flex justify-center text-[20px]">Get the App and begin to search the menu of your favourte restaurants.</motion.p>
      <motion.div className="flex justify-center items-center  p-5">
        {download.map((download) => { 
          return (
          <img 
          key={download.name} 
          src={download.image}
          className="p-6 cursor-pointer"
           />
        )
        })}
      </motion.div>
    </>
  )
}

export default SectionWrapper(GetApp, '')