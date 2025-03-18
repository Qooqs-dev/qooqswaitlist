import React from "react";
import Image from "next/image";
import NotifyMeForm from "../forms/NotifyForm";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#5386E4]">
      <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-14 py-[70px]">
        <div className="flex relative flex-col gap-5 w-full md:w-7/12">
          <h2 className="text-center md:text-left text-white text-[32px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] leading-tight font-extrabold">
            Your affordable and fresh Asian, African and Caribbean groceries
            with free delivery
          </h2>

          <p className="text-center md:text-left text-white font-bold text-base md:text-xl lg:text-2xl">
            Saves you up to £1,357 yearly as you enjoy additional loads of
            benefits
          </p>

          <NotifyMeForm />

          <div>
            <p className="font-extralight text-white text-[17px] md:text-lg text-center sm:text-left">
              By participating in our wait list campaign, you confirm that you
              have read, understood, and agreed to the{" "}
              <Link className="font-bold underline" href={"/terms"}>
                Terms and Conditions
              </Link>
              ,{" "}
              <Link className="font-bold underline" href={"/privacy"}>
                Privacy Policy
              </Link>
              , and {" "}
              <Link className="font-bold underline" href={"/cookies"}>
                Cookies Policy
              </Link>{" "}
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Image
              src={"/icons/hero-star.svg"}
              alt={`Hero Star Icon`}
              width={20}
              height={20}
              className="h-5 w-5 md:h-8 md:w-8"
            />
            <p className=" text-white text-[17px] md:text-lg font-extralight">
              Earn the right to be one of 1,000 to enjoy benefit of{" "}
              <span className="relative inline-block font-extrabold">
                referring once and earning for life
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 120 15"
                  preserveAspectRatio="none"
                  style={{ height: "0.5rem" }}
                >
                  <path
                    d="M0,10 C15,0 35,15 60,10 C85,5 105,12 120,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </p>
          </div>
          <Image
            src={"/images/cassava.svg"}
            alt={`Cassava Image`}
            width={104}
            height={93}
            className="w-[70px] block md:hidden absolute -left-[10px] -top-[50px]"
          />
          <Image
            src={"/images/banana.svg"}
            alt={`Banana Image`}
            width={104}
            height={96}
            className="w-[70px] block md:hidden absolute -right-[10px] -top-[45px]"
          />

          <Image
            src={"/images/fish.svg"}
            alt={`Fish Image`}
            width={104}
            height={65}
            className="w-[80px] block md:hidden absolute right-[0px]  -bottom-[30px]"
          />
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
            src={"/images/hero-bg3.png"}
            alt={`Hero Background Image`}
            width={342}
            height={506}
            className="block sm:hidden w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
