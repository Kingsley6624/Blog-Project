import React from "react";
import Card from "./shared/Card";
import { blogList } from "../Data/BlogList";

const Blogcard = () => {
  const cardList = blogList;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 font-['Roboto',_sans-serif] items-center justify-center">
      {cardList.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          detail={card.headline}
          date={card.date}
          head={card.head}
          body={card.body}
          linkName={card.linkName}
          link={`/blog/${card.id}`}
        />
      ))}
    </div>
  );
};

export default Blogcard;
