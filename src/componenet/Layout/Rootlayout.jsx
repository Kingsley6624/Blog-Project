import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from '../shared/Footer';
import ScrollToTop from "../ScrollToTop";

const Rootlayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer  className="mt-auto"/>
    </div>
  );
};

export default Rootlayout;
