import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#5386E4]">
      <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center gap-14 py-[70px]">
        <div className="flex flex-col gap-5 w-full sm:w-7/12">
          <h2 className="text-center sm:text-left text-white text-[32px] sm:text-[50px] leading-tight font-extrabold">
            Your affordable and fresh Asian, African and Caribbean groceries
            with free delivery
          </h2>

          <p className="text-white font-bold text-base sm:text-2xl">
            Saves you up to £1,357 yearly as you enjoy additional loads of
            benefits
          </p>
        </div>
        <div>
          <Image
            src={"/images/hero-bg1.png"}
            alt={`Hero Background Image`}
            width={623}
            height={500}
            className="hidden sm:block"
          />
          <Image
            src={"/images/hero-bg2.png"}
            alt={`Hero Background Image`}
            width={342}
            height={506}
            className="block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
