"use client"
import React from "react";
import Bowl from "../../../../public/images/bowl.svg";
import Image from "next/image";
import Phone from "../../../../public/images/phone.svg";


export default function HeadingComponent() {
  return (
    <div className="flex flex-col-reverse md:flex-row  justify-around  items-center">
      <div className="w-full px-4 md:w-[40%] justify-around flex flex-col gap-4">
        <h1 className="text-2xl md:text-6xl font-bold whitespace-break-spaces">
          Satify Your{" "}
          <span className="relative text-orange-600">
            Craving
            <span className="absolute left-0 bottom-[-5px] w-full h-[8px] underline bg-no-repeat bg-contain"></span>
          </span>{" "}
          with <span className="text-orange-600">Every Bite!</span>
        </h1>
        <h2>
        &quot;Delight in every bite with our freshly crafted momos, made to satisfy
          your cravings and warm your soul!&quot;
        </h2>

        <div className="flex flex-row gap-10">
          <button className="bg-orange-500   rounded-full sm:flex px-4 py-1 text-white text-sm">
            Order Now
          </button>
          <button className="flex px-5 bg-orange-500  rounded-full md:hidden md:px-4 md:py-1 items-center ">
            <span>
              <Image src={Phone} alt="phone" className="h-2 md:h-4" />
            </span>
            <span className="text-white text-sm md:text-xl">Contact</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={Bowl}
          alt="bowl"
          className="h-60 w-full sm:h-96 sm:w-full  flex items-center"
        />
      </div>
    </div>
  );
}
