
import { BtnProps } from '@/app/types'
import React, { FC } from 'react'

const SolidBtn: FC<BtnProps> = ({
    text,
    className,
    disabled,
    loading,
    onClick,
    prefix
}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={`flex justify-center items-center gap-2 py-2 text-white font-[sofia-pro] font-[400] bg-[#009F79] rounded-[56px] shadow-md border-2 border-white   ${className ? className : 'w-full'} ${disabled ? 'opacity-40' : 'opacity-100'}`}>
      { prefix }
      { text }
    </button>
  )
}

export default SolidBtn
