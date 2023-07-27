import { motion } from 'framer-motion';
import { heroScreens } from "../constants";
import { styles } from "../styles";


function Hero() {
  const marginTopForSecondImage = 'mt-3';
  return (
    <>
          <p className={`${styles.heroHeadText} pt-16`}>Be a Part of My Menu</p>
      <div className=" mt-9 div-map">
        {heroScreens.map((homeScreens, index) => { 
         return (
            <div className="p-2 z-10" key={homeScreens.name}>
              <img
                src={homeScreens.image}
                alt={homeScreens.name}
                className={` ${index === 1 ? marginTopForSecondImage : ''}`}
              />
            </div>
          );
        })}
        <div className="rectangular-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
    </>
  );
}

export default Hero;
