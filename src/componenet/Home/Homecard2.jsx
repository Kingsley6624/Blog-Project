import React from "react";
import { recentCard } from "../../Data/BlogList";
import Card from "../shared/Card";
import Viewallpost from "./Viewallpost";
import Homecard3 from "./Homecard3";

const Homecard2 = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <Viewallpost post="Our Recent Post" />
      <Homecard3 />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 font-['Roboto',_sans-serif] items-center justify-center px-[5%]">
        {recentCard.map((card) => (
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

export default Homecard2;
