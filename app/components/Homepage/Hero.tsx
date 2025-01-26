import React from 'react';
import HeroCarousel from './carousel';
import Star from '../../assets/images/star.png'
import Image from 'next/image';
import Sidebar from './sidebar';
import Icon from '../icons';

function Hero() {
  return (
    <div className="w-full flex gap-4 px-8">
       <div className='w-[10%]'><Sidebar/></div>
      {/* Main Content */}
      <main className="w-full herobg bg-cover bg-center rounded pt-24">
        <section className="p-8 bg-opacity-70 text-white text-center flex flex-col justify-center items-center">
            <div className='flex justify-center items-center gap-4'>
            
                <Icon name='whiteStar'/>
                <p className='text-[15px] font-[400]'>Join the chow africa waitlist</p>
                <Icon name='whiteStar'/>
            </div>
          <h1 className="text-[96px] font-[500]">
            Find chow, <span className="text-green-500 italic font-[400] border-b-2 border-[#D87023]">Asap!</span>
          </h1>
          <p className="mt-4 text-[20px] font-[400]">
            The patient dog eats leftovers. Be the first to know when we <br /> launch. Join our Waitlist 😎
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-[12px] w-80 text-black focus:outline-none"
            />
            <button className="p-3 bg-green-500 rounded-[56px] border-2 border-white text-white hover:bg-green-600">
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
