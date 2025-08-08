import React from "react";
import { popularPostsList } from "../../Data/BlogList";
import Viewallpost from "./Viewallpost";
import Card from "../shared/Card";

const cardList = popularPostsList;
const PopularPostCard = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Viewallpost post="Popular Post" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 font-['Roboto',_sans-serif] items-center justify-center px-[5%] w-full">
        {cardList.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            detail={card.headline}
            date={card.date}
            head={card.head}
            body={card.body}
            linkName={card.link}
            link=""
          />
        ))}
      </div>
    </div>
  );
};

export default PopularPostCard;
