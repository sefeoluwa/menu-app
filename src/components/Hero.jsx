import { motion } from 'framer-motion';
import { heroScreens } from "../constants"
import { styles } from "../styles"


function Hero() {
  return (
    <>
      <p className={`${styles.heroHeadText} pt-16`}>Be a Part of My Menu</p>
      <div className="hero-div">
      <div className='flex flex-row mt-9'>{heroScreens.map((homeScreens) => (
        <div className="" key={homeScreens.name}>
        <img
              src={homeScreens.image}
              alt={homeScreens.name}
              className=""
            />
        </div>
      ))}
      </div>
      </div>
      
    </>
    
  )
}

export default Hero