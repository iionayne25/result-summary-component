import React from "react";

const Summary = ({ icon, category, score }) => {
  return (
    <>
      <div className="flex flex-col  xl:gap-4 text-[18px] font-bold ">
        {category == "Reaction" ? (
          <div className="flex gap-2 items-center px-4 py-3.5 rounded-lg justify-between w-full bg-[#FF5757]/10 text-black">
            <div className="flex-none">
              <img src={icon}></img>
            </div>
            <div className="flex-1 w-24  text-[#FF5757]">{category}</div>
            <div className="text-[#303B5A]">
              {score} <span className="text-[#303B5A]/50"> / 100</span>
            </div>
          </div>
        ) : category == "Memory" ? (
          <div className="flex gap-2 items-center px-4 py-3.5 rounded-lg justify-between w-full bg-[#FFB01F]/10 text-black">
            <div className="flex-none">
              <img src={icon}></img>
            </div>
            <div className="flex-1 w-24  text-[#FFB01F]">{category}</div>
            <div className="text-[#303B5A]">
              {score} <span className="text-[#303B5A]/50"> / 100</span>
            </div>
          </div>
        ) : category == "Verbal" ? (
          <div className="flex gap-2 items-center px-4 py-3.5 rounded-lg justify-between w-full bg-[#00BD91]/10 text-black">
            <div className="flex-none">
              <img src={icon}></img>
            </div>
            <div className="flex-1 w-24  text-[#00BD91]">{category}</div>
            <div className="text-[#303B5A]">
              {score} <span className="text-[#303B5A]/50"> / 100</span>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center px-4 py-3.5 rounded-lg justify-between w-full bg-[#1125D4]/10 text-black">
            <div className="flex-none ">
              <img src={icon}></img>
            </div>
            <div className="flex-1 w-24 text-sm  text-[#1125D4]">
              {category}
            </div>
            <div className="text-[#303B5A]">
              {score} <span className="text-[#303B5A]/50"> / 100</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Summary;
