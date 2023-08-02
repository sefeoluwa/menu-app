/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import SectionWrapper from '../hoc/SectionWrapper';
import { download } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";


function GetApp() {
  return (
    <>
      <motion.p variants={textVariant()} className="flex justify-center text-[24px] get-text">Get the App and begin to search the menu of your favourte restaurants.</motion.p>
     
     <motion.div variants={fadeIn()} className="flex justify-center items-center  p-1">
        {download.map((download) => { 
          return (
            <Tilt key={download.name} >
          <img 
          src={download.image}
          className="p-6 cursor-pointer app-links"
           />
           </Tilt>
        )
        })}
      </motion.div>
    
    </>
  )
}

export default SectionWrapper(GetApp, '')