import React from 'react'

const Pagehead = ({welcome,heading, bodyText}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 max-w-[756px]">
      <span className="text-base font-bold text-[#666666]">{welcome}</span>
      <h1 className="font-bold text-5xl text-center text-[#333333]">{heading}</h1>
      <p className="text-center font-normal text-base text-[#666666]">{bodyText}</p>
      </div>
  )
}

export default Pagehead