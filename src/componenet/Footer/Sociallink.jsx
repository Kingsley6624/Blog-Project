import React from "react";
import { Link } from "react-router-dom";

const Sociallink = (props) => {
  return (
    <Link 
    className="flex items-center justify-center w-10 h-10 bg-[#7C4EE4] text-white rounded-full hover:bg-[#5a2bbf] transition-colors duration-300"
    to={props.link}>
      <span>{props.name}</span>
    </Link>
  );
};

export default Sociallink;
