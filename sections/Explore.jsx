'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import FeaturesCard from '../components/FeaturesCard';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} bg-black blackbg `} id="explore">
  
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Space Features " textStyles="text-center text-2xl" />
        <TitleText
          title={<>Choose the Space path <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center min-h-[70vh] gap-5">
        
          <FeaturesCard/>
         
          
        </div>
       
      </motion.div>
    
    </section>
  );
};

export default Explore;
