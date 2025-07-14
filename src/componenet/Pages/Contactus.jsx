import React from "react";
import Pagehead from "../Pagehead";
import Contactcard from "../Contactcard";
import Form from "../Form";


const Contactus = () => {
  return (
    <div className="max-w-[1440px] bg-[#F9F9F9] flex flex-col items-center w-full">
      <Pagehead
        heading="Get in Touch"
        bodyText="Contact us to publish your content and show ads to our website and get a good reach."
      />
      <Contactcard />

      <div className="relative z-0 w-full h-[908.42px] flex flex-col items-center sm:h-[750.25px]">
        <div className="bg-no-repeat  bg-cover  bg-mobile md:bg-tablet lg:bg-desktop h-[382px] w-full"></div>
        <Form/>
    </div>
      </div>
      
  );
};

export default Contactus;
