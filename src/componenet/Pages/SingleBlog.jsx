import React from "react";
import Card from "../shared/Card";
import Viewallpost from "../Home/Viewallpost";
import { singlePageList } from "../../Data/BlogList";
// import { useParams } from 'react-router-dom';
import SingleBlogContent from "../SingleBlogContent";

const cardList = singlePageList;

const SingleBlog = () => {
  ///const {id} = useParams();

  return (
    <div>
      <SingleBlogContent />
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
  );
};

export default SingleBlog;
