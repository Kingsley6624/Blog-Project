import React from "react";
import Cardlist from "../Cardlist";
import Pagehead from "../Pagehead";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 px-[7.08%] bg-[#F9F9F9]">
      <Pagehead 
      welcome="OUR BLOGS"
      heading="Find our all blogs from here"
      bodyText="our blogs are written from very research research and well known writers
        writers so that we can provide you the best blogs and articles articles
        for you to read them all along"
      />      
      <Cardlist />
    </div>
  );
};

export default Blog;
