import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/home-image.png";
import Button from "./Button";

const Homecard3 = () => {
  return (
    <div className="w-full px-[5%]">
      <div className="bg-white md:bg-transparent flex md:items-stretch border md:border-0 flex-col md:flex-row items-start justify-between  md:gap-[3%] p-4 md:p-0 shadow-md md:shadow-none rounded-xl gap-4  font-['Raleway',_sans-serif]">
        <div
          className=" bg-no-repeat bg-cover bg-center basis-[65%] w-full  min-h-[204px] rounded-xl"
          style={{ backgroundImage: `url(${img})` }}
        ></div>

        <div className=" basis-[35%] flex flex-col gap-4 mx-auto lg:py-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs text-[#333333]">
              DEVELOPMENT
            </span>
            <span className="text-[#999999] text-xs font-medium">
              16 March 2023
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333333]">
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p className="text-base font-normal text-[#666666] mb-0 lg:mb-4">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <Button
            text="Read More"
            style="bg-transparent text-[#7C4EE4] border border-[#7C4EE4] font-bold text-base px-6 py-2 rounded-md hover:bg-[#5a3bbf] hover:text-white transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Homecard3;
