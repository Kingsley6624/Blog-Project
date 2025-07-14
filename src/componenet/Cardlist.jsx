import React from "react";
import img1 from "../assets/images/Image Placeholder.png";
import img2 from "../assets/images/Image Placeholder (1).png";
import img3 from "../assets/images/Image Placeholder (2).png";
import img4 from "../assets/images/Container (1).png";
import img5 from "../assets/images/Image Placeholder (4).png";
import img6 from "../assets/images/Container (3).png";
import img7 from "../assets/images/Image Placeholder (3).png";
import img8 from "../assets/images/Container (2).png";
import img9 from "../assets/images/Image Placeholder (5).png";
import Card from "./Card";

const Cardlist = () => {
  const cardList = [
    {
      id: 1,
      img: img1,
      headline: "Travel",
      date: "13 March 2023",
      head: "Train Or Bus Journey?Which one suits?",
      body: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      linkName: "Read More...",
    },
    {
      id: 2,
      img: img2,
      headline: "DEVELOPMENT",
      date: "11March 2023",
      head: "Best Website to research for your next project",
      body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from",
      linkName: "Read More...",
    },
    {
      id: 3,
      img: img3,
      headline: "Sports",
      date: "10 March 2023",
      head: "How to Be a Dancer in 2023 with proper skills?",
      body: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      linkName: "Read More...",
    },
    {
      id: 4,
      img: img4,
      headline: "Travel",
      date: "13 March 2023",
      head: "Who is the best singer on chart?Know him?",
      body: "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and",
      linkName: "Read More...",
    },
    {
      id: 5,
      img: img8,
      headline: "DEVELOPMENT",
      date: "11March 2023",
      head: "How to start export import business from home?",
      body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
      linkName: "Read More...",
    },
    {
      id: 6,
      img: img6,
      headline: "Sports",
      date: "10 March 2023",
      head: "Make some drinks with chocolates chocolates and milk",
      body: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      linkName: "Read More...",
    },
    {
      id: 7,
      img: img7,
      headline: "",
      date: "13 March 2023",
      head: "8 Rules of Travelling In Sea You Need To Know",
      body: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
      linkName: "Read More...",
    },
    {
      id: 8,
      img: img5,
      headline: "DEVELOPMENT",
      date: "11March 2023",
      head: "How to build strong portfolio and get a Job in UI/UX",
      body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from",
      linkName: "Read More...",
    },
    {
      id: 9,
      img: img9,
      headline: "",
      date: "10 March 2023",
      head: "How to Be a Professional Footballer in 2023",
      body: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      linkName: "Read More...",
  
    },
  ];

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

export default Cardlist;
