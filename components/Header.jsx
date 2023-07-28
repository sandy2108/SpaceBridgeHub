import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { navLinks } from './Constants';
import {RiMenu5Line} from "react-icons/ri";
import {AiOutlineClose} from "react-icons/ai"
import logo from '../assets/logo.png'
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Header = () => {

  const [active, setActive] = useState("Home");
  const [toggle , setToggle] = useState(false);

  return (
    <nav className='w-full h-[90px] bg-gray-900 opacity-75'>
    <div className='max-w-[1340px] mx-auto flex justify-between items-center py-2 px-4 '>
        <Link href="/">
            <Image src={logo} width={70} height={50} alt='logo' className='cursor-pointer' />   
        </Link>

        <ul className='list-none sm:flex hidden justify-end items-center '>
           {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-lg ${active === nav.title ? "text-white" : "text-gray-200"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
               <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
           ))}
        </ul>

        <div className='hidden md:flex '>
            <button className='bg-purple-500 text-white rounded-lg py-3 px-4 hover:bg-purple-600'>Premium</button>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
           {toggle ? <AiOutlineClose className='text-2xl text-white '  onClick={() => setToggle(!toggle)}/> : <RiMenu5Line className='text-2xl text-white' onClick={() => setToggle(!toggle)} />}
            
           <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-slate-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
    </div>
    </nav>
  )
}
export default Header