import React from 'react'

import Icon from '../icons';

function Sidebar() {
  return (
    <div className=' bg-white flex"'>
         {/* Sidebar */}
         <aside className=" p-2 flex flex-col">
           <div className="mb-8 text-2xl font-bold text-green-700"><Icon name='logoIcon'/></div>
           <nav className="flex flex-col gap-4">
             <a href="#" className="text-green-600 font-medium hover:text-green-800">Home</a>
             <a href="#" className="text-gray-600 font-medium hover:text-green-800">Join waitlist</a>
           </nav>
           <div className="mt-10 flex gap-2">
             <a href="#" className=""><Icon name='facebook'/></a>
             <a href="#" className=""><Icon name='twitterIcon'/></a>
             <a href="#" className=""><Icon name='facebook'/></a>
           </div>
         </aside>
    </div>
  )
}

export default Sidebar