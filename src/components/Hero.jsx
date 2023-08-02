/* eslint-disable react-refresh/only-export-components */
import { heroScreens } from "../constants";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import  Confetti  from "./Confetti"
import GetApp from "./GetApp";


function Hero() {
  const marginTopForSecondImage = 'mt-3';
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImagesLoaded = () => {
    setImagesLoaded(true); 
  };

  return (
    <>
    <Confetti />
      <motion.p  variants={textVariant()} className={`${styles.heroHeadText} hero-heading`}>Be a Part of My Menu</motion.p>
      <motion.div
      variants={fadeIn("up", "slide", ".5", "1")}
        className={`mt-9 div-map h-full hero-screens-container flex `} 
        style={{ position: "relative" }}
      >
        {heroScreens.map((homeScreens, index) => { 
          return (
            <div
              key={homeScreens.name}
              className="p-2 z-10 flex-shrink-0 hero-screens" 
            >
              <img
                src={homeScreens.image}
                alt={homeScreens.name}
                className={`${
                  index === 1 ? marginTopForSecondImage : ""
                } shadow-2xl transition-transform transform scale-100 hover:scale-110 cursor-pointer`}
                onLoad={handleImagesLoaded} 
                style={{ objectFit: imagesLoaded ? "cover" : "none" }} 
              />
            </div>
          );
        })}
        <div
          className={`rectangular-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            imagesLoaded ? "" : "hidden"
          }`} 
        ></div>
      </motion.div>
      <GetApp />
    </>
  );
}

export default SectionWrapper(Hero, "hero");