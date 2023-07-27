/* eslint-disable react-refresh/only-export-components */
import { heroScreens } from "../constants";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';


function Hero() {
  const marginTopForSecondImage = 'mt-3';
  return (
    <>
          <p className={`${styles.heroHeadText}`}>Be a Part of My Menu</p>
      <div className=" mt-9 div-map">
        {heroScreens.map((homeScreens, index) => { 
         return (
            <div className="p-2 z-10" key={homeScreens.name}>
              <img
                src={homeScreens.image}
                alt={homeScreens.name}
                className={` ${index === 1 ? marginTopForSecondImage : ''} shadow-2xl transition-transform transform scale-100 hover:scale-110 cursor-pointer`}
              />
            </div>
          );
        })}
        <div className="rectangular-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
    </>
  );
}

export default SectionWrapper( Hero, 'hero' );
