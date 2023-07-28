'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 bg-black`}>
    <div className="gradient-06 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About SpaceBrideBot" textStyles="text-center text-2xl" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className=" mt-10 font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold text-purple-700 my-10">SpaceBridgeBot</span> {' '}
         is the Telegram Bot helps you trade between ETH, BNB, SOL, DOGE, TRON, XMR, and XRP both publicly or privately in just a few simple steps in{' '}
        <span className="font-extrabold text-purple-700">
          Anonymously and untraceable transactions.
        </span>{' '}
         
      </motion.p>

        

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className=" mt-10 font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
      
         Spacers Hub Offers { ' '}
        <span className="font-extrabold text-yellow-400">Premium</span>  {' '}
         the high-end service with extra perks! Staking $XFER tokens unlocks exclusive trade routes, unrestricted size, staking rewards, referral rewards, and priority trades! 
        {' '}
        <span className="font-extrabold text-yellow-400">explore</span> the Features 
        of the SpacersHub by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
