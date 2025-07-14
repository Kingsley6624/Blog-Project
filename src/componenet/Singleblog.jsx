import React from 'react'
import Card from './Card'
import Viewallpost from './Viewallpost'

import img4 from "../assets/images/Container (1).png";
import img5 from "../assets/images/Image Placeholder (4).png";
import img6 from "../assets/images/Container (3).png";
import { useParams } from 'react-router-dom';
import Singlebloglist from './Singlebloglist';
// import Singlebloglist from './Singlebloglist';



const Singleblog = () => {
  const {id} = useParams();
 
    const cardList = [
    
     {
      id: 4,
      img: img4,
      headline: "Travel",
      date: "13 March 2023",
      head: "Who is the best singer on chart?Know him?",
      body: "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and",
      link: "Read More...",
    },
    {
      id: 5,
      img: img5,
      headline: "DEVELOPMENT",
      date: "11March 2023",
      head: "How to start export import business from home?",
      body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
      link: "Read More...",
    },
    {
      id: 6,
      img: img6,
      headline: "Sports",
      date: "10 March 2023",
      head: "Make some drinks with chocolates chocolates and milk",
      body: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      link: "Read More...",
    },
  ];
  return (
<div>
  <Singlebloglist />
    <div className="flex flex-col items-center w-full">

      <Viewallpost post="Popular Post" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 font-['Roboto',_sans-serif] items-center justify-center px-[5%]">
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
    </div>
  )
}

export default Singleblog