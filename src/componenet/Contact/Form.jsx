import React, { useRef } from "react";
import Input from "./Input";
import Button from "../shared/Button";

const Form = () => {
  const formRef = useRef();
  const handleSubmit = () => {
    formRef.current.reset();
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      method="Post"
      action="https://formbold.com/s/oaxAy"
      className="flex flex-col gap-4 mx-auto items-center p-8 bg-white rounded-lg shadow-md w-fit absolute z-10 bottom-14 sm:bottom-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Input label="Name" type="text" />
        <Input label="Phone" type="tel" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Input label="Email" type="email" />
        <Input label="Subject" type="text" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="message"
          className="text-[11.17px] font-semibold text-gray-700 lg:text-base"
        >
          Message
        </label>
        <textarea
          name="message"
          id=""
          className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 md:h-[145.94] lg:h-[173pxpx] lg:text-base"
        ></textarea>
      </div>
      <Button
        type="submit"
        text="Send Message"
        btnstyle="py-2 px-5  bg-[#7C4EE4] text-white rounded-lg whitespace-nowrap"
      />
    </form>
  );
};

export default Form;
