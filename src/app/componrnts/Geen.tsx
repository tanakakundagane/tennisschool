"use client";
import React from "react";

const Geen = () => {
  return (
    <div className="flex px-[2rem] gap-[10rem] max-md:flex-col max-md:gap-[1rem]" id="geen">
      {/* 左 */}
      <div className="text-white font-bold relative flex flex-col gap-[2rem] text-5xl max-md:text-3xl">
        <hr className="absolute border-[2px] text-pink w-[11rem] rounded-full -m-[10px]" />
        <div>
          <span className="stroke-text">いますぐ</span>
          <span>確実に</span>
        </div>
        <div>
          <span>レベルアップ</span>
          <span className="stroke-text">できる！</span>
        </div>
      </div>

      {/* 右 */}
      <div className="flex justify-center items-end max-md:p-[2rem]">
        <form className="flex gap^[3rem] bg-gray py-[1rem] px-[2rem] max-md:w-[20rem]">
          <input
            type="email"
            name="user_email"
            placeholder="メールアドレス"
            className="bg-transparent border-none outline-none placeholder:text-lightGray max-md:p-0 max-md:w-[10rem]"
          />
          <button className="w-[6rem] text-white bg-pink p@-[0.5rem] border-[2px] border-transparent font-bold max-md:min-w-[4rem] max-md:text-sm max-md:mr-[2rem]">
            参加
          </button>
        </form>
      </div>
    </div>
  );
};

export default Geen;
