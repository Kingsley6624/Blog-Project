import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from '../shared/Footer';

const Rootlayout = () => {
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto min-h-screen bg-[#fafafa]">
      <Navbar />
      <Outlet />
      <Footer  className="mt-auto"/>
    </div>
  );
};

export default Rootlayout;
