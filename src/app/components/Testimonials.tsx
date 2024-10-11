"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { testimonialsData } from "../../../constants/tesrimonialsData";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div
      className="flex gap-[1rem] px-[2rem] max-md:flex-col"
      id="testimonials"
    >
      {/* 左側 */}
      <div className="flex flex-col flex-1 gap-[2rem] text-white">
        <span className="text-pink font-bold">Testimonials</span>
        <div>
          <span className="stroke-text font-bold text-5xl max-md:text-3xl">
            生徒の
          </span>
          <span className="font-bold text-5xl max-md:text-3xl">皆さんに</span>
        </div>
        <span className="font-bold text-5xl max-md:text-3xl">
          聞いてみました！
        </span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="text-justify tracking-widest leading-[2.5rem] normal-case"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span className="">
          <span className="text-pink">{testimonialsData[selected].name}</span>ー
          {testimonialsData[selected].town}
        </span>
      </div>

      {/* 右側 */}
      <div className="flex-1 relative max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-[2rem]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="absolute w-[16rem] h-[20rem] right-[10rem] border-[2px] border-pink max-md:relative max-md:hidden"
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="absolute w-[16rem] h-[20rem] right-[7rem] top-[2rem] bg-gradient-to-br from-yellow-500 via-pink to-pink  max-md:relative max-md:hidden"
        />

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
          className="absolute w-[17rem] h-[20rem] object-cover top-[1rem] right-[8rem] max-md:top-0 max-md:right-0 max-md:relative max-md:self-center"
        />
        <div className="flex gap-[1rem] absolute bottom-[1rem] left-[3rem] max-md:-bottom-[3rem] max-md:left-[8rem]">
          <FaArrowLeft
            className="text-2xl text-white cursor-pointer"
            onClick={() => {
              if (selected === 0) {
                setSelected(testimonialsLength - 1);
              } else {
                setSelected((prev) => prev - 1);
              }
            }}
          />

          <FaArrowRight
            className="text-2xl text-white cursor-pointer"
            onClick={() => {
              if (selected === testimonialsLength - 1) {
                setSelected(0);
              } else {
                setSelected((prev) => prev + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
