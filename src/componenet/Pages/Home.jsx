import React from "react";
import Herosection from "../Herosection";
import Homecard from "../Homecard";
import Viewallpost from "../Viewallpost";
import Homecard2 from "../Homecard2";
import Card from "../Card";
import Homecard1 from "../Homecard1";
import Homecard3 from "../Homecard3";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Herosection />
      <div className="flex flex-col items-center w-full gap-5">
        <Homecard1 />
        <Homecard2 />
       
        <Homecard />
      </div>
    </div>
  );
};

export default Home;
