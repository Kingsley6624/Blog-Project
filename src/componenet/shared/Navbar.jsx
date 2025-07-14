import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Logo from "../Logo";
import menu from "../../assets/icons/Menu.svg";
import Button from "../Button";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);}
  const navigate = useNavigate();
  return (
    <div className=" px-[5%] flex items-start justify-between py-4 shadow-md">
      <div className="flex flex-col md:flex-row w-full justify-between md:items-center max-w-[1440px] ">
        <Logo />
        <div className="items-center gap-6 sm:flex">
          <ul className=" hidden md:flex gap-6 text-[1.2rem] font-medium items-center text-[#333333]">
            <NavLink to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <li>
              <CiSearch className="w-[22.06px] h-[22.05px]" />
            </li>
            <li>
              <Button
                text="Contact Us"
                btnstyle="py-2 px-5  bg-[#7C4EE4] text-white rounded-lg whitespace-nowrap"
                click={() => navigate("/contact")}
              />
            </li>
          </ul>

          {isOpen && (
      
            <ul className="flex flex-col gap-6 text-[1.2rem] font-medium w-[153.08px] text-[#333333] md:hidden text-center">
            <NavLink to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <li>
              <CiSearch className="w-[22.06px] h-[22.05px] mx-auto" />
            </li>
            <li>
              <Button
                text="Contact Us"
                btnstyle="py-2 px-5  bg-[#7C4EE4] text-white rounded-lg whitespace-nowrap"
                click={() => navigate("/contact")}
              />
            </li>
          </ul>
          
          )}
        </div>
        
       
      
      </div>
      <button onClick={toggleMenu} className="md:hidden  mt-3">
           <img src={menu} alt="menu bar" 
        />
        </button>
    </div>
  );
};

export default Navbar;
