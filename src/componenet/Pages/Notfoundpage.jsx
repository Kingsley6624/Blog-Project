import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pnfImage from "../../assets/images/404.png"

const Notfoundpage = () => {
  const navigate= useNavigate();
  return (
    // <div className="flex items-center justify-center  bg-[#fafafa] h-screen w-full">
    <div className="flex flex-col items-center justify-center bg-[#7C4EE4] text-white size-fit rounded-2xl p-12 mx-[7.08%] max-w-[816px] md:mx-auto mt-20">
      <img src={pnfImage} alt="404" />
      <p className="text-center text-2xl">Sorry!<br/> The link is broken, try to refresh or go to home</p>
      <Link to='/' className="text-blue-500 underline">
        </Link>
        <button 
        className="mt-4 py-2 px-5 bg-white text-[#333333] rounded-lg font-semibold"
        onClick={()=>navigate('/')}>Go to Home</button>
    </div>
    // </div>
  );
};

export default Notfoundpage;
