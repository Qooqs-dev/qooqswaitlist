import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="bg-[#5386E4]">
      <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-14">
        <div className="flex flex-col justify-center items-center gap-5 w-full h-[196px] sm:h-[367px] relative ">
          <h2 className="z-10 text-white text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] leading-tight font-extrabold">
            {title}
          </h2>

          <Image
            src={"/images/tomatoes.svg"}
            alt={`Tomatoes Image`}
            width={104}
            height={64}
            className="absolute right-20 top-1/2  hidden sm:block"
          />

          <Image
            src={"/images/rice.svg"}
            alt={`Rice Image`}
            width={104}
            height={96}
            className="absolute right-10 -top-1 hidden sm:block"
          />

          <Image
            src={"/images/meat.svg"}
            alt={`Meat Image`}
            width={104}
            height={128}
            className="absolute left-[40%] top-2 hidden sm:block"
          />

          <Image
            src={"/images/pepper.svg"}
            alt={`Pepper Image`}
            width={104}
            height={93}
            className="absolute left-12 top-[25%] hidden sm:block"
          />

          <Image
            src={"/images/banana.svg"}
            alt={`Banana Image`}
            width={104}
            height={96}
            className="absolute left-1/2 bottom-[0px] md:left-[300px] md:bottom-[80px] z-0"
          />

          <Image
            src={"/images/cassava.svg"}
            alt={`Cassava Image`}
            width={104}
            height={93}
            className="absolute left-0 top-[0%] md:left-32 md:top-[40%]"
          />

          <Image
            src={"/images/fish.svg"}
            alt={`Fish Image`}
            width={104}
            height={65}
            className="absolute -right-[10px] bottom-[40%] md:right-[300px] md:bottom-[80px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
