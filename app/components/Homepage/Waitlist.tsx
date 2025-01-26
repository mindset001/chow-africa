'use client'
import Image from "next/image";
import React from "react";
import Left from "@/app/assets/images/leftsnow.png"
import Right from "@/app/assets/images/rightsnow.png"
import Star from '@/app/assets/images/blackstar.png'
import Icon from "../icons";

const WaitlistBanner: React.FC = () => {
  return (
    <div className="relative bg-white flex flex-col items-center text-center px-6 py-12 md:py-16">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20px] top-48">
            <Image src={Left} alt=""  width={250} height={250} className="w-[308px]"/>
        </div>
        <div className="absolute right-[50px] bottom-20 ">
        <Image src={Right} alt="" width={250} height={250}  className="w-[178px]"/>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Subheading */}
        <p className="text-[15px] font-[400] uppercase tracking-wide text-gray-500 flex items-center justify-center gap-2 mb-4">
          <span>
          <Icon name='blackStar'/>
            </span> Join the chowafrica waitlist <span> <Icon name='blackStar'/></span>
        </p>

        {/* Main Heading */}
      
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

        {/* Supporting Text */}
        <p className="mt-4 text-[#000] text-[18px] font-[500]">
          Do you crave new and exciting dishes? Look no further! Chow is the <br />
          perfect solution for discovering your next dish.
        </p>
      </div>
    </div>
  );
};

export default WaitlistBanner;
