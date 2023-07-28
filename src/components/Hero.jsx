/* eslint-disable react-refresh/only-export-components */
import { heroScreens } from "../constants";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useState } from "react";


function Hero() {
  const marginTopForSecondImage = 'mt-3';
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImagesLoaded = () => {
    setImagesLoaded(true); 
  };

  return (
    <>
      <motion.p  variants={textVariant()} className={`${styles.heroHeadText}`}>Be a Part of My Menu</motion.p>
      <div
        className={`mt-9 div-map h-full flex`} 
        style={{ position: "relative" }}
      >
        {heroScreens.map((homeScreens, index) => { 
          return (
            <div
              key={homeScreens.name}
              className="p-2 z-10 flex-shrink-0" 
            >
              <img
                src={homeScreens.image}
                alt={homeScreens.name}
                className={`${
                  index === 1 ? marginTopForSecondImage : ""
                } shadow-2xl transition-transform transform scale-100 hover:scale-110 cursor-pointer`}
                onLoad={handleImagesLoaded} 
                style={{ visibility: imagesLoaded ? "visible" : "hidden" }} 
              />
            </div>
          );
        })}
        <div
          className={`rectangular-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            imagesLoaded ? "" : "hidden"
          }`} 
        ></div>
      </div>
    </>
  );
}

export default SectionWrapper(Hero, "hero");