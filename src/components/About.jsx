/* eslint-disable react-refresh/only-export-components */
import Confetti from './Confetti';
import { motion } from 'framer-motion';
import { styles } from "../styles"
import  SectionWrapper  from '../hoc/SectionWrapper';
import { slideIn, textVariant } from '../utils/motion';
import { screens } from "../constants"
import { Tilt } from 'react-tilt';
import AnimatedSection  from './AnimatedSection';

function About() {
  return (
    <>
   <AnimatedSection>
   <div className='h-[60vh] about overflow-visible'>
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.aboutHeadText} about-heading`} >No impromptu billings</h2>
        <h2 className={`${styles.aboutHeadText} about-heading`} >No added charges</h2>
        <h2 className={`${styles.aboutHeadText} about-heading`} >All within your keyboard reach</h2>
      </motion.div>

      
      <motion.div variants={slideIn("left", "fade", ".5", "1")} className='flex justify-center gap-14 pt-[30vh] about-screens  items-center h-2/4'>
        {screens.map((screen) => (
          <Tilt
            key={screen.name}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <img src={screen.image} alt="app screenshots" className="shadow-2xl screens  h-[50vh]"/>
          </Tilt>
        ))}
      </motion.div>
     

    </div>
    </AnimatedSection>
      <Confetti />
   
   </>
  );
}

export default SectionWrapper(About, "about");
