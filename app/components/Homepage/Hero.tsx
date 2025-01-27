import React from 'react';
import HeroCarousel from './carousel';
import Star from '../../assets/images/star.png'
import Image from 'next/image';
import Sidebar from './sidebar';
import Icon from '../icons';
import SolidBtn from '../buttons/SolidBtn';

function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:px-8">
       <div className='w-[10%] hidden md:block'><Sidebar/></div>
      {/* Main Content */}
      <div className='flex flex-row md:hidden justify-between px-4 items-center'>
        <Icon name='logoIcon'/>
       <div className='flex gap-4 items-center'>
       <button className='bg-[#D87023] rounded-[56px] text-[12px] w-[144px] h-[32px]'>JOIN WAITLIST</button>
       <Icon name='menu'/>
       </div>
      </div>
      <main className="md:w-[85%] herobg bg-cover bg-center rounded-[5px] md:rounded-[14px] pt-24">
    
        <section className="py-8 bg-opacity-70 text-white text-center flex flex-col justify-center items-center">
            <div className='flex justify-center items-center gap-4'>
            
                <Icon name='whiteStar'/>
                <p className='text-[12px] md:text-[15px] font-[400]'>Join the chow africa waitlist</p>
                <Icon name='whiteStar'/>
            </div>
          <h1 className="md:text-[96px] text-[35px] font-[500]">
            Find chow, <span className="text-[#009F79] italic font-[400] border-b-2 border-[#D87023] transform skew-y-6">Asap!</span>
          </h1>
          <p className="hidden md:block mt-4 text-[14px] md:text-[20px] font-[400] ">
            The patient dog eats leftovers. Be the first to know when we <br className=''/> launch. Join our Waitlist 😎 <span className='block md:hidden'> launch. Join our Waitlist </span>
          </p>

          <p className="md:hidden mt-4 text-[12px] md:text-[20px] font-[400] ">
            The patient dog eats leftovers. Be the first to know when we launch. Join our Waitlist 
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 px-4" >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-[12px] md:w-80 w-64 text-black focus:outline-none"
            />
            <button className="p-3 bg-[#009F79] rounded-[56px] border-2 border-white text-white hover:bg-green-600 md:w-[200px]">
              JOIN WAITLIST
            </button>
          </div>
        </section>

        <div>
          <HeroCarousel />
        </div>
      </main>
    </div>
  );
}

export default Hero;
