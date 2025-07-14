import React from "react";
import Button from "./Button";
import homeimg from "../assets/images/home-image.png";

const Homecard1 = () => {
  return (
    <div className="hidden md:block w-fit relative h-[499.75px] lg:h-[696px] mx-[5%]">
      <img className="w-full h-[413.58px] lg:h-[576px]" src={homeimg} alt="" />
      
      <div className="flex flex-col self-end gap-2 bg-white p-4 rounded-xl lg:rounded-2xl font-['Raleway',_sans-serif] w-[70%] lg-w-[65%] absolute right-0 bottom-0">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs text-[#333333]">DEVELOPMENT</span>
          <span className="text-[#999999] text-xs font-medium">
            16 March 2023
          </span>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333333]">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p className="font-normal text-[#666666] text-xs lg:text-base">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <Button
          text="Read More"
          style="bg-transparent text-[#7C4EE4] border border-[#7C4EE4] font-bold text-base px-6 py-2 rounded-md hover:bg-[#5a3bbf] hover:text-white transition duration-300 ease-in-out"
        />
      </div>
    </div>
 
  );
};

export default Homecard1;
