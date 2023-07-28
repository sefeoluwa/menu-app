/* eslint-disable react-refresh/only-export-components */
import { heroScreens } from "../constants";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useState } from "react";


function Hero() {
  const marginTopForSecondImage = 'mt-3';
  const [imagesLoaded, setImagesLoaded] = useState(false); // Use state to track if images are loaded

  const handleImagesLoaded = () => {
    setImagesLoaded(true); // Set the state to true when images are loaded
  };

  return (
    <>
      <motion.p  variants={textVariant()} className={`${styles.heroHeadText}`}>Be a Part of My Menu</motion.p>
      <div
        className={`mt-9 div-map h-full flex`} // Set the fixed height and use display: flex
        style={{ position: "relative" }}
      >
        {heroScreens.map((homeScreens, index) => { 
          return (
            <div
              key={homeScreens.name}
              className="p-2 z-10 flex-shrink-0" // Use flex-shrink: 0 to prevent items from expanding
            >
              <img
                src={homeScreens.image}
                alt={homeScreens.name}
                className={`${
                  index === 1 ? marginTopForSecondImage : ""
                } shadow-2xl transition-transform transform scale-100 hover:scale-110 cursor-pointer`}
                onLoad={handleImagesLoaded} // Call the function when the image is loaded
                style={{ visibility: imagesLoaded ? "visible" : "hidden" }} // Hide the images until they are loaded
              />
            </div>
          );
        })}
        <div
          className={`rectangular-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            imagesLoaded ? "" : "hidden"
          }`} // Hide the rectangular box until images are loaded
        ></div>
      </div>
    </>
  );
}

export default SectionWrapper(Hero, "hero");