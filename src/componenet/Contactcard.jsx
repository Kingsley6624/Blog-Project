import React from "react";
import home from "../assets/icons/home.svg";
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";

const Contactcard = () => {
  const cardList = [
    {
      id: 1,
      img: home,
      head: "Office",
      content: "Victoria Street, London, UK",
    },
    {
      id: 2,
      img: email,
      head: "Email",
      content: "hello@zarrin.com",
    },
    {
      id: 3,
      img: phone,
      head: "Phone",
      content: "(001) 2342 3451",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] gap-4 py-8 sm:flex-row w-full px-12 sm-px-20">
      {cardList.map((card) => (
        <div Key={card.id}
        className="flex flex-col justify-center w-full sm:basis-1/3 text-white rounded-[11.17px] h-[170.38px] items-center bg-white gap-2 lg:h-[244px] max-w-[373px] lg:rounded-[16px] lg:gap-5 b">
          <div className="bg-[#7C4EE4] rounded-full h-[48.88px] w-[48.88px] flex items-center justify-center lg:h-[70px] lg:w-[70px]">
            <img
            className="h-[16.76px] w-[16.76px] lg:h-[24px] lg:w-[246px]"
            src={card.img} alt="home icon" />
          </div>
          <h3 className="font-bold text-[13.97px] text-[#7C4EE4] lg:text[20px]">{card.head}</h3>
          <p className="font-medium text-[11.17px]
          text-[#7A7A7A] lg:text-[16px]">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Contactcard;
