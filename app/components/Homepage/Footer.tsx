// components/SignupBanner.tsx
import React from "react";
import SolidBtn from "../buttons/SolidBtn";

const SignupBanner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-md rounded-2xl px-6 py-4 md:px-10 md:py-6">
      <div className="text-left md:text-left">
        <h2 className="text-[32px] md:text-xl font-semibold text-gray-900 tracking-normal">
          Signup to{" "}
          <span className="text-white font-bold bg-[#5F63E1] border-2 border-[#000000] px-2 py-1 rounded-[56px]">
            chowafrica 
          </span>{" "}
         <span className="block md:hidden"> today </span>and say{" "} <br className="hidden md:block"/>
          <span className="text-white font-bold bg-[#000000] border-2 rounded-[56px] border-[#009F79] px-2 py-1 inline-flex items-center">
            goodbye{" "}
            <span className="ml-1">👋</span>
          </span>{" "}
          to mealtime stress.
        </h2>
      </div>
      <div className="mt-4 md:mt-0 w-[200px] h-[56px]">
        <SolidBtn
            text='JOIN WAITLIST'
        />
    
      </div>
    </div>
  );
};

export default SignupBanner;
