import React from "react";
import img7 from "../assets/images/Container (1).png";
import img5 from "../assets/images/Image Placeholder (4).png";
import img9 from "../assets/images/Image Placeholder (5).png";

import Card from "./Card";
import Viewallpost from "./Viewallpost";
import Homecard3 from "./Homecard3";

const Homecard2 = () => {
  const recentCard = [
    {
      id: 7,
      img: img7,
      headline: "",
      date: "13 March 2023",
      head: "8 Rules of Travelling In Sea You Need To Know",
      body: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
      link: "Read More...",
    },
    {
      id: 8,
      img: img5,
      headline: "DEVELOPMENT",
      date: "11March 2023",
      head: "How to build strong portfolio and get a Job in UI/UX",
      body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from",
      link: "Read More...",
    },
    {
      id: 9,
      img: img9,
      headline: "",
      date: "10 March 2023",
      head: "How to Be a Professional Footballer in 2023",
      body: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      link: "Read More...",
    },
  ];
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
