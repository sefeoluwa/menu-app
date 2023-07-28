/* eslint-disable react-refresh/only-export-components */
import  Confetti  from './Confetti';
import { motion } from 'framer-motion';
import { styles } from "../styles"
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant } from '../utils/motion';



function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
      <h2 className={styles.aboutHeadText} >No impromptu billings</h2>
      <h2 className={styles.aboutHeadText} >No added charges</h2>
      <h2 className={styles.aboutHeadText} >All within your keyboard reach</h2>
      </motion.div>

      <Confetti />
    </>
  );
}

export default SectionWrapper(About, "about")
