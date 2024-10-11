import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { programsData } from "../../../constants/programsData";

const Programs = () => {
  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] " id="programs">
      {/* メイン文 */}
      <div className="flex gap-[5rem] font-bold text-5xl justify-center text-white italic
      max-md:flex-col max-md:gap-[1rem] max-md:text-3xl max-md:items-center max-md:justify-center max-md:mt-[2rem]">
        <span className="stroke-text">本スクール</span>
        <span>プログラム</span>
        <span className="stroke-text">のメリット</span>
      </div>

      {/* カード */}
      <div className="flex gap-[1rem] p-[1rem]
      max-md:flex-col">
        {programsData.map((program) => (
          <div className="flex flex-col bg-gray p-[2rem] gap-[1rem] text-white justify-between hover:bg-gradient-to-br from-pink via-pink to-yellow-500"
          key={program.title}>
            <span className="text-4xl text-white">{program.icon}</span>
            <p className="text-lg font-bold">{program.title}</p>
            <p className="text-sm">{program.datails}</p>
            <a href={program.link} className="flex gap-[1rem]">
              <p className="text-sm">詳しく</p>
              <span className="text-xl cursor-pointer">
                <FaArrowRight />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
