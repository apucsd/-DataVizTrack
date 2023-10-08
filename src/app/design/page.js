"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sliderData from "@/data/sliderData";
import Image from "next/image";
import { useState } from "react";
const Slider = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const [prevItem, setPrevItem] = useState(0);
  const [nextItem, setNextItem] = useState(2);
  // prev button handler
  const prevBtnHandler = () => {
    if (currentItem > 1) {
      setCurrentItem((prev) => prev - 1);
      setPrevItem((prev) => prev - 1);
      setNextItem((prev) => prev - 1);
    }
  };
  // next button handler
  const nextBtnHandler = () => {
    if (nextItem !== sliderData.length - 1) {
      console.log(currentItem, prevItem, nextItem);
      setCurrentItem((prev) => prev + 1);
      setPrevItem((prev) => prev + 1);
      setNextItem((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto my-10 relative">
        <button
          onClick={() => prevBtnHandler()}
          className="z-20 absolute text-white top-[40%] right-10 transform translate-y-(-50%) translate-x(100%)"
        >
          <FaChevronRight className="text-[50px]"></FaChevronRight>
        </button>
        <button
          onClick={() => nextBtnHandler()}
          className=" absolute top-[40%] z-30 left-10 text-white  transform translate-y-(-50%) translate-x(100%)"
        >
          <FaChevronLeft className="text-[50px]"></FaChevronLeft>
        </button>
        <div className=" flex justify-center gap-3 items-center h-[220px]">
          <Image
            width={100}
            height={100}
            className="w-40 z-20 h-[220px] rounded-lg  delay-500"
            src={sliderData[prevItem]?.image}
            alt=""
          />

          <div className="grid grid-cols-3 h-[220px]">
            <div className="">
              <Image
                width={100}
                height={100}
                className="h-[220px] w-[230px] rounded-s-md "
                src={sliderData[currentItem]?.image}
                alt=""
              />
            </div>
            <div className="bg-yellow-400 w-full col-span-2 p-10  rounded-e-lg space-y-2">
              <h2 className="font-bold text-lg text-start">
                {sliderData[currentItem]?.description}
              </h2>
              <p className="text-green-700">
                {sliderData[currentItem]?.author}
              </p>
              <p>{sliderData[currentItem]?.role}</p>
            </div>
          </div>
          <Image
            width={100}
            height={100}
            className="w-40 h-full rounded-lg "
            src={sliderData[nextItem]?.image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Slider;
