import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="bg-[#7C4EE4] text-white text-center py-16  flex flex-col items-center justify-center  gap-5 w-full">
      <div className=" flex flex-col items-center gap-5 px-16"> 
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
          Get our stories delivered From us to your inbox weekly.
        </h1>
        </div>
        <form action="" className="flex  gap-1">
          <input
            className="px-4 rounded-xl"
            type="email"
            placeholder="Your Email"
          />
          <Button 
          text="Get Started"
          style="bg-transparent  border border-white px-4 py-2 rounded-xl whitespace-nowrap"/>
        </form>
        <div className=" px-6">
        <p>
          Get a response tomorrow if you submit by 9pm today. If we received
          after
          <br /> 9pm will get a reponse the following day.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
