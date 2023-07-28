'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import Link from 'next/link';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import {BsTelegram ,BsTwitter} from 'react-icons/bs'

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} bg-black py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>


      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            SPACEBRIDGEBOT
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © SpaceBridgeBot. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="https://t.me/SpaceBridgePortal" alt="/">
              <BsTelegram className='text-white hover:text-purple-600' size={40}/>
            </Link>
            <Link href="https://t.me/SpaceBridgePortal" alt="/">
              <BsTwitter className='text-white hover:text-purple-600' size={40}/>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
