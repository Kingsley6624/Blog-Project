import React from "react";
import Pagehead from "../Pagehead";
import aboutimg from "../../assets/images/Image Placeholder (6).png"
import Aboutcard from "../shared/Aboutcard";
import Howwework from "../Howwework";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-8 px-[7.08%] bg-[#FAFAFA] max-w-[1440px] mx-auto">
      <Pagehead
        welcome="ABOUT US"
        heading="Creative Blog Writting and publishing site"
        bodyText="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
      />
      <img src={aboutimg} alt="aboutImage" />p
      <Howwework />
      <Aboutcard />
    </div>
  );
};

export default About;
