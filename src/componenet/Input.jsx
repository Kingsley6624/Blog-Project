import React from "react";

const Input = ({ label, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <label 
      className="text-[11.17px] font-semibold text-gray-700 lg:text-base"
      htmlFor="Name">{label}</label>
      <input
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:h-[54px] lg:w-[311px] lg:text-base"
        id={label}
        name={label}
        required
      type={type} />
    </div>
  );
};

export default Input;
