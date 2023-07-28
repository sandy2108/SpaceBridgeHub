"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TitleText, TypingText } from "../components";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="herobg min-h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full h-full"
      >
        <div className="max-w-[1340px] mx-auto p-4">
          <div className="grid grid-cols-1 items-center justify-center">
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="text-2xl font-bold text-white flex items-center justify-center"
            >
              <Image
                src="/space.png"
                width={300}
                height={300}
                className="w-[320px] h-[350px] md:w-[480px] md:h-[480px]"
              />
            </motion.div>
            <motion.div
              variants={textVariant(1.1)}
              className="flex items-center justify-center gap-8"
            >
              <Link href="https://t.me/SpaceBridgeBot"><button className="text-gray-200">SpacebridgeBot</button></Link>
              <Link href="https://t.me/SpaceBridgeBot"> <button className="text-gray-200">Premium</button> </Link>
            </motion.div>
            <motion.div variants={textVariant(1.2)} className="my-10 px-2">
              <TitleText
                title={
                  <>
                    Automated cross chain swaps{" "}
                    <br className="md:block hidden" />
                  </>
                }
                textStyles="text-center"
              />
             
              <h2 className="text-lg md:text-2xl font-normal text-gray-200 flex items-center justify-center my-5 md:py-4 md:px-4">
                 Swap crypto securely and privately directly 
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
