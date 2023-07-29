import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { spaceBridgeBotFeatures } from "../constants";
import Link from "next/link";


const FeaturesCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {spaceBridgeBotFeatures.map((feature, index) => (
        <div
          key={index}
          className={`w-auto h-[300px] sm:h-[380px] md:h-[400px] lg:h-[300px] my-5 bg-gray-700 rounded-2xl p-4  items-center justify-between ${
            hoveredIndex === index ? "border-2 border-blue-400" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="gap-2 flex items-center justify-between">
            <div>
              <Image
                src="/star.png"
                alt="feature icons"
                height={60}
                width={60}
                className="rounded-2x p-1"
                
               />
            </div>
            <div className="mt-4 h-full">
              <h1 className="font-bold text-purple-500 text-[20px]">
                {feature.title}
              </h1>
            </div>
          </div>
          <div className="mt-5 ">
            <div className=" mx-auto text-[18px] text-secondary-white">{feature.description}</div>
            {hoveredIndex === index && (
              <div>
                <Link href={feature.destiny} className="my-2 flex">
                  <h1 className="my-2 text-yellow-400 font-extrabold">
                    Get Started.{" "}
                  </h1>
                  <BsArrowRight className="mt-3 ml-2 text-white" />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesCard;