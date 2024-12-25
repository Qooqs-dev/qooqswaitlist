import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/bulk.svg",
    title: "Buy in Unit or in Bulk",
    text: "Buy in unit or in bulk removing the stress of planning long wholesale market trip",
  },
  {
    icon: "/icons/savings.svg",
    title: "Purposeful Savings",
    text: "You are saving money to invest in personal or family causes – vacation, gifts, investments.",
  },
  {
    icon: "/icons/wallet.svg",
    title: "Earn of Referrals",
    text: "You earn free money for referring once and earn for every time a purchase is made",
  },
  {
    icon: "/icons/time.svg",
    title: "Save Travel Time",
    text: "Buy You are removing travel time back and forth to grocery shops that affords you the opportunity to have enough time to rest",
  },
  {
    icon: "/icons/growth.svg",
    title: "Support Poor Growers",
    text: "You are also a member of community that help growers from developing countries earn a decent living - a move to ending poverty",
  },
  {
    icon: "/icons/wallet.svg",
    title: "Convenience",
    text: "Your favorite groceries delivered with a click.",
  },
];

const Features = () => {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col gap-14 mt-[70px] mb-[70px] sm:mb-[140px]">
      <h2 className="text-[26px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-extrabold text-black text-center sm:text-left w-full sm:w-3/4 leading-tight">
        You are not just buying fresh groceries at affordable prices with free
        delivery - you are being empowered 😃.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F4F4F4] rounded-xl px-[22px] sm:px-8 py-[29px] sm:py-[42px] flex flex-col items-start text-left gap-4"
          >
            <div className="p-[12px] sm:p-[15px] rounded-[20px] shadow bg-white">
              <Image
                src={feature.icon}
                alt={`${feature.title} Icon`}
                width={70}
                height={70}
                className="w-[47px] sm:w-[70px] h-[47px] sm:h-[70px]"
              />
            </div>

            <h3 className="font-extrabold text-[22px] sm:text-[30px] text-black">
              {feature.title}
            </h3>
            <p className="text-[#4A4A4A] text-[12px] sm:text-[16px]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
