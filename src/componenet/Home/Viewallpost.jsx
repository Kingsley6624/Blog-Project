import React from "react";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

const Viewallpost = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full font-bold px-[5%] ">
      <h2 className="text-xl md:text-4xl lg:text-5xl text-[#333333]">{post}</h2>
      <Button
        text="View All Posts"
        btnstyle="bg-[#7C4EE4] text-white font-bold text-base px-6 py-2 rounded-md hover:bg-[#5a3bbf] transition duration-300 ease-in-out"
        click={() => navigate("/blog/:id")}
      />
    </div>
  );
};

export default Viewallpost;
