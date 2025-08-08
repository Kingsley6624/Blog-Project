import React from "react";
import Herosection from "../Home/Herosection";
import PopularPostCard from "../Home/PopularPostCard";
import Homecard2 from "../Home/Homecard2";
import Homecard1 from "../Home/Homecard1";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Herosection />
      <div className="flex flex-col items-center w-full gap-5">
        <Homecard1 />
        <Homecard2 />
        <PopularPostCard />
      </div>
    </div>
  );
};

export default Home;
