import React from "react";
import { Link } from "react-router-dom";
import { aboutCardList } from "../../Data/BlogList";

const Aboutcard = () => {
  const cardList = aboutCardList;

  return (
    <div className="flex flex-col items-center gap-4 py-8 sm:flex-row md:items-center md:justify-center md:gap-4">
      {cardList.map((card) => (
       
        <div key={card.id} className="flex flex-col items-start justify-center gap-4 p-6 bg-white shadow-lg rounded-lg text-[#666666] hover:bg-[#7C4EE4] hover:text-white">
          <span className="font-bold text-7xl">{card.No}</span>
          <h2 className="font-bold text-2xl text-[#7C4EE4]">{card.title}</h2>
          <p className="font-['Roboto',_sans-serif] font-normal text-base hover:text-[#F7F6FE]">{card.body}</p>
          <Link className="font-bold text-sm text-white md:text-lg underline">{card.linkName}</Link>
        </div>
      ))}
    </div>
  );
};

export default Aboutcard;
