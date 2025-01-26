import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Hero from './components/Homepage/Hero';
import Sidebar from './components/Homepage/sidebar';
import Interaction from './components/Homepage/Interaction';
import SignupBanner from './components/Homepage/Footer';
import WaitlistBanner from './components/Homepage/Waitlist';

const Home: React.FC = () => {
  return (


    <div className='w-full bg-white py-8 gap-20 flex flex-col font-[sofia-sans]'>
      <Hero />
      <WaitlistBanner />
      <div className='ml-28 mr-10 flex flex-col gap-8'>
        <Interaction />
        <SignupBanner />
      </div>
    </div>

  );
};

export default Home;
