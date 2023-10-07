"use client";

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
          className="btn  z-20 top-1/2 right-0 transform translate-y-(-50%) translate-x(100%)"
        >
          Next
        </button>
        <button
          onClick={() => nextBtnHandler()}
          className="btn   left-0 transform translate-y-(-50%) translate-x(100%)"
        >
          Pre
        </button>
        <div className=" flex justify-center gap-10 items-center h-[220px]">
          <Image
            width={100}
            height={100}
            className="w-36  h-[220px] rounded-lg transition duration-500 ease-in-out delay-500"
            src={sliderData[prevItem]?.image}
            alt=""
          />

          <div className="grid grid-cols-3 h-[220px]">
            <div className="">
              <Image
                width={100}
                height={100}
                className="h-full w-full rounded-s-md transition duration-500 ease-in-out"
                src={sliderData[currentItem]?.image}
                alt=""
              />
            </div>
            <div className="bg-yellow-400 w-full col-span-2 p-10  rounded-e-lg">
              <h2 className="font-bold">Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                enim!
              </p>
            </div>
          </div>
          <Image
            width={100}
            height={100}
            className="w-36 h-full rounded-lg transition duration-500 ease-in-out"
            src={sliderData[nextItem]?.image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Slider;
