import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../constants';
import logo from '../public/logo.png';
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from '../styles';

const Header = () => {

  const [active, setActive] = useState("Home");
 

  return (
    <motion.nav  variants={navVariants}
    initial="hidden"
    whileInView="show" className='w-full h-[90px] bg-gray-900 opacity-75'>
    <div className='max-w-[1340px] mx-auto flex justify-between items-center py-2 px-4 '>
    <div className="absolute w-[50%] inset-0 gradient-02" />
        <Link href="/">
            <Image src={logo} width={70} height={50} alt='logo' className='cursor-pointer' /> 
        </Link>

        <ul className='list-none sm:flex hidden justify-end items-center '>
           {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-bold cursor-pointer text-xl ${active === nav.title ? "text-white" : "text-gray-200"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
               <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
           ))}
        </ul>

        <div className=' md:flex '>
            <Link href="https://t.me/SpaceBridgeBot"><button className='bg-purple-500 text-white text-xl rounded-lg py-3 px-4 hover:bg-purple-600'>Premium</button></Link>
        </div>

        
    </div>
    </motion.nav>
  )
};
export default Header;