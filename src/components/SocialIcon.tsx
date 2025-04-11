import React from 'react'

interface SocialProps{
    image: string
}
const SocialIcon = ({ image } : SocialProps) => {
  return (
    <div className="w-[30px] h-[30px] rounded-full border border-[#C4C4C4] flex items-center justify-center text-emerald-600 hover:bg-emerald-100 cursor-pointer">
        <img src={`/images/${image}`} className='w-[14px] h-[12px]' />
    </div>
  )
}

export default SocialIcon