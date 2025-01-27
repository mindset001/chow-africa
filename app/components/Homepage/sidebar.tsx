import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../icons';

function Sidebar() {
  return (
    <div className=' bg-white flex font-[sofia-sans]'>
      {/* Sidebar */}
      <aside className="  flex flex-col justify-between h-auto">
        <div className='p-2'>
          <div className="mb-8 text-2xl font-bold text-green-700"><Icon name='logoIcon' /></div>
          <nav className="flex flex-col gap-4">
            <div className='flex'>
              <Icon name='sidebarIcon' />
              <a href="#" className="text-[#353542]  hover:text-green-800 text-[18px] font-[500] ml-6">Home</a>
            </div>
            <a href="#" className="text-[#353542] text-[18px] font-[500] hover:text-green-800  ml-6">Join waitlist</a>
          </nav>
          <div className="mt-10 flex gap-2">
            <a href="#" className=""><Icon name='facebook' /></a>
            <a href="#" className=""><Icon name='twitterIcon' /></a>
            <a href="#" className=""><Icon name='instagramIcon' /></a>
          </div>

          
        </div>
        <div className="relative ml-[-30px] w-full  overflow-hidden top-16">

<Icon name="circlesIcon" />

</div>
      </aside>
    </div>
  )
}

export default Sidebar