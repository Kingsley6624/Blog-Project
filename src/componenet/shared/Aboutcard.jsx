import React from "react";
import { Link } from "react-router-dom";

const Aboutcard = () => {
  const cardList = [
    {
      id: 1,
      No: "01",
      title: "Brainstorming",
      body: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
      linkName: "Learn More",
      link: "",
    },
    {
      id: 2,
      No: "02",
      title: "Analysing",
      body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
      linkName: "Learn More",
      link: "",
    },
    {
      id: 3,
      No: "03",
      title: "News Publishing",
      body: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
      linkName: "Learn More",
      link: "",
    },
  ];
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
