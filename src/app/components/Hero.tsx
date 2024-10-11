"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import CountUp from "react-countup";
import Link from "next/link";
import { MdOutlineSportsTennis } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  const [mobile , setMobile] = useState(false);
  useEffect(() => {
    const handleResize =() => {
      setMobile(window.innerWidth <= 768 ? true:false)
    }
    handleResize();
    window.addEventListener('resize' , handleResize)
    return() =>{
      window.removeEventListener('resize' ,handleResize)
    }
  })

  return (
    <div
      id="home"
      className="justify-between grid grid-cols-12 md:overflow-hidden 
      max-md:flex max-md:flex-col"
    >
      {/* ブラー */}
      <div className="blur w-[22rem] h-[30rem] left-0 max-md:w-[14rem]" />
      {/* 左 */}
      <div className="flex flex-col col-span-8 p-[2rem] pt-[1.5rem] gap-[2rem] ">
        {/* ヘッダー */}
        <Header />

        {/* セールス文 */}
        <div className="relative flex mt-[4rem] bg-darkdarkGray rounded-full w-fit py-[1.2rem] px-[0.8rem] text-white text-center justify-start max-md:my-[1.5rem] max-md:text-sm max-md:self-center max-md:transform max-md:scale-75">
          <motion.div
            initial={{ left: mobile ? "178px" : "245px" }} //初めの位置
            whileInView={{ left: "8px" }} //終わりの位置
            transition={{ ...transition, type: "tween" }}
            className="absolute bg-pink w-[5.5rem] h-[80%] left-[0.5rem] rounded-full bottom-[0.375rem] z-10 "
          ></motion.div>
          <p className="z-20">全国100店舗オープンを目指しています！</p>
        </div>

        {/* タイトル */}
        <div className="flex flex-col gap-[1.5rem] text-7xl font-bold text-white max-md:text-4xl max-md:text-center max-md:justify-center max-md:gap-[1rem]">
          <div>
            <span className="stroke-text">ORIGIN</span>
            <span>.Doc</span>
          </div>
          <div>
            <span>テニススクール</span>
          </div>
          <div className="text-lg font-normal w-[80%] tracking-wider normal-case max-md:text-sm max-md:tracking-wider max-md:self-center">
            <p>
              役5000人のお客様にご愛願いただいております。会社帰りに職場の近くのテニススクールへ・休日にご自宅近くのテニススクールへ。
            </p>
          </div>
        </div>

        {/* 軽い実績 */}
        <div
          className="flex gap-[2rem] pt-[2rem] text-center 
        max-md:self-center"
        >
          <div className="flex flex-col">
            <span className="text-white text-3xl
            max-md:text-xl">
              <CountUp start={100} end={140} duration={3} />人
            </span>
            <p className="text-gray 
            max-md:text-sm">在籍コーチ</p>
          </div>
          <div>
            <span className="text-white text-3xl
            max-md:text-xl">
              <CountUp start={5000} end={5978} duration={3} />名
            </span>
            <p className="text-gray
            max-md:text-sm">会員数</p>
          </div>
          <div>
            <span className="text-white text-3xl
            max-md:text-xl">
              <CountUp start={10} end={62} duration={3} />
              施設
            </span>
            <p className="text-gray
            max-md:text-sm">店舗数</p>
          </div>
        </div>

        {/* 案内ボタン */}
        <div className="flex gap-[1rem] font-normal pt-[1rem] 
        max-md:justify-center">
          <Link
            href="/"
            className="text-white bg-pink w-[8rem] p-[0.5rem] font-bold text-center"
          >
            会員
          </Link>
          <Link
            href="/"
            className="text-white bg-transparent w-[8rem] p-[0.5rem] border-[4px] border-pink font-bold text-center"
          >
            体験
          </Link>
        </div>
      </div>

      {/* 右 */}
      <div className="col-span-4 relative bg-gradient-to-br from-pink via-pink to-yellow-500
      max-md:relative max-md:bg-none">
        {/* レート */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="absolute flex flex-col gap-[1rem] bg-darkGray w-fit p-[1rem] text-start rounded-md right-[4rem] top-[8rem]
          max-md:left-[1rem] max-md:top-[2rem]"
        >
          <MdOutlineSportsTennis className="text-5xl text-pink" />
          <span className="text-gray">UTR Rate</span>
          <span className="text-white text-2xl">9.5</span>
        </motion.div>

        {/* メイン写真 */}
        <Image
          src={"/assets/heroImg.png"}
          alt="heroimage"
          width={300}
          height={600}
          className="absolute right-[13rem] top-[13rem] w-[25rem]
          max-md:relative max-md:w-[15rem] max-md:left-[7rem] max-md:top-[4rem] max-md:self-center"
        />

        {/* 背景写真 */}
        <motion.img
          initial={{ right: "4rem" }}
          whileInView={{ right: "12rem" }}
          transition={transition}
          src={"/assets/herobg.png"}
          alt="herobg"
          className="absolute top-[4rem] right-[12rem] -z-10 h-[43rem]
          max-md:w-[20rem] max-md:left-[2rem] max-md:top-[2rem] max-md:h-[27rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
