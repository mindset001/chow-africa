import React from 'react'
import Left from '../../assets/images/left.png'
import Right from '../../assets/images/right.png'
import Image from 'next/image'

function Interaction() {
  return (
<main className='bg-[#FFF8F2] md:p-6 rounded-md w-full'>
  <div className='w-full flex md:flex-row flex-col'>
    <Image
      src={Left}
      alt='lt'
    />
    <Image
      src={Right}
      alt='right'
    />
  </div>

</main>
    
  )
}

export default Interaction