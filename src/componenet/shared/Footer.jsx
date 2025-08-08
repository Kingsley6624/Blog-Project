import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../Footer/Newsletter";
import Logo from "./Logo";
import Sociallink from "../Footer/Sociallink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center  bg-white my-[51px] mx-0 md:mx-[5%] lg:mx-0">
      <Newsletter />
      <div className="flex flex-col items-center w-full py-6">
        <div className="flex flex-col items-center gap-6  w-[85.84%] py-8 border-b border-[#7C4EE4]">
          <Logo />
          <ul className="flex items-center justify-center gap-6 text-[1.2rem] font-medium">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
          <div className="flex items-center justify-center gap-4">
            <Sociallink name="FB" Link="https://www.facebook.com/" />
            <Sociallink name="IG" Link="https://www.instagram.com/" />
            <Sociallink name="LN" Link="https://www.linkedin.com/" />
            <Sociallink name="YT" Link="https://www.youtube.com/" />
          </div>
        </div>

        <p className="pt-6">
          Copyright Ideapeel Inc © {currentYear}. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
