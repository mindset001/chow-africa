'use client'
import Image from "next/image";
import React from "react";
import Left from "@/app/assets/images/leftsnow.png"
import Right from "@/app/assets/images/rightsnow.png"
import Star from '@/app/assets/images/blackstar.png'
import Icon from "../icons";

const WaitlistBanner: React.FC = () => {
  return (
    <div className="relative bg-white flex flex-col items-center text-center md:px-6 py-12 md:py-16">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute md:left-[20px] md:top-48">
            <Image src={Left} alt=""  width={250} height={250} className="md:w-[308px] w-[100px]"/>
        </div>
        <div className="absolute md:right-[50px] right-11 md:bottom-20 ">
        <Image src={Right} alt="" width={250} height={250}  className="md:w-[178px] w-[70px]"/>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Subheading */}
        <p className="text-[10px] md:text-[15px] font-[400] uppercase tracking-wide text-gray-500 flex items-center justify-center gap-2 mb-4">
          <span>
          <Icon name='blackStar'/>
            </span> Join the chowafrica waitlist <span> <Icon name='blackStar'/></span>
        </p>

        {/* Main Heading */}
      
        <div className="hidden md:block">
        <h1 className="text-3xl md:text-[64px] font-[500] text-gray-800">
          tired of eating the
      
        </h1>

        <div className="flex items-center justify-center mt-4 bg-[#D87023] border-2 border-[#000] text-white px-4 py-2 rounded-full text-xl md:text-2xl shadow-md font-semibold ">
      
            <p className="">
              🍛
            </p>
            <p>  same dishes everyday? </p>
            <p className="">
            🍝
            </p>
        </div>
        </div>

        ]<div className="block md:hidden text-[#353542] text-[32px] font-[500]">
          <p>Are you tired of eating the same <br /> dishes <span className="bg-[#D87023] rounded-[56px] text-white p-1 border-2 border-black">everyday?</span></p>
        </div>

        {/* Supporting Text */}
        <p className="mt-4 text-[#000] text-[14px] md:text-[18px] font-[500]">
          Do you crave new and exciting dishes? Look no further! Chow is the <br className="hidden md:block"/>
          perfect solution for discovering your next dish.
        </p>
      </div>
    </div>
  );
};

export default WaitlistBanner;
