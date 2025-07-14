import React from "react";
import img1 from "../assets/images/home-image.png";import img2 from "../assets/images/singlepageIMG.png";


const Singlebloglist = () => {
 

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full py-8 px-[7.08%] md:px-0 lg:px-[5%] font-['Roboto',_sans-serif] text-[#666666] font-normal text-[13.46px] lg:text-base">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xs text-[#333333]">DEVELOPMENT</span>
        <span className="text-[#999999] text-xs font-medium">16 March 2023</span>
      </div>
      <h2>How to make a Game look more attractive with New VR & AI Technology</h2>
      <img src={img1} alt="" />
      <div className="flex flex-col items-start justify-center gap-4">
          <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.<br/><br/>We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.</p>
   
        <div className="mx-0 md:mx-11 py-4 px-0 md:px-4">
          <p className="font-['Raleway',_sans-serif] font-normal text-xl lg:text-2xl border-l-2 border-[#7C4EE4] md:boder-l-[4.2px] lg:border-l-[5px] pl-1 md:pl-2 lg:pl-3 mb-4">"People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world."</p>
          <span className="font-medium text-[#333333] text-sm lg:text-base pl-[6px] md:pl-3 lg:pl-[17px]">– Pedro Domingos</span>
        </div>
        <div className="flex flex-col gap-8">
          <p>More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.</p>
          <div className="px-0 md:px-[2.8rem] ">
          <img src={img2} alt="" className="w-full" />
          </div>
          
          <p>We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead.</p>
        </div>
      </div>
    </div>
  );
};

export default Singlebloglist;
