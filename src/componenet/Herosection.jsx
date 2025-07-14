import React from "react";
import Button from "./Button";
import heroimg from "../assets/images/hero-image.png";

const Herosection = () => {
  return (
    <div className="flex flex-col bg-[#7C4EE4] gap-10 py-8 sm:flex-row font-['Raleway', sans-serif] max-w-[1440px] w-full items-center justify-between px-[5%]">
      <div className=" flex flex-col justify-center font-bold text-white  gap-5 w-fit basis-1/2 self-start">
        <span className="text-[11.49px]">Featured Post</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl ">
          How AI will
          <br /> Change the Future
        </h2>
        <div className="flex flex-col gap-4 max-w-[416px] sm:pr-5">
          <p className="font-normal text-[11.49px] md:text-[16px]">
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </p>
        <Button
          text="Read more"
          style="py-2 px-5  bg-white text-[#373737] text-[10.05px] rounded-[5.74px] whitespace-nowrap"
        />
        </div>
        
      </div>
      <div className="basis-1/2 flex justify-end items-center">
        <img className="w-[326px] md:w-[436.56px]" src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Herosection;
