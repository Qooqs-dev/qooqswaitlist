import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#5386E4]">
      <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-14 py-[70px]">
        <div className="flex flex-col gap-5 w-full md:w-7/12 relative">
          <h2 className="text-center text-white text-[32px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] leading-tight font-extrabold">
            Terms and Privacy
          </h2>

          <Image
            src={"/images/pepper.svg"}
            alt={`Pepper Image`}
            width={104}
            height={93}
            className="absolute left-0 top-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
