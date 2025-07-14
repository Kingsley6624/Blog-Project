import React from 'react'
import Button from './Button'

const Viewallpost = ({post}) => {
  return (
    <div className='flex items-center justify-between w-full font-bold px-[5%] '>
      <h2 className='text-xl md:text-4xl lg:text-5xl text-[#333333]'>{post}</h2>
      <Button text="View All Posts" style="bg-[#7C4EE4] text-white font-bold text-base px-6 py-2 rounded-md hover:bg-[#5a3bbf] transition duration-300 ease-in-out" />
    </div>
  )
}

export default Viewallpost