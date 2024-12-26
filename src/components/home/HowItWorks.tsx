import React from "react";
import Image from "next/image";

const steps = [
  {
    icon: "/icons/download-app.svg",
    title: "Download App",
    text: "You download the app on App or Play Store",
  },
  {
    icon: "/icons/reward.svg",
    title: "Earn Reward Points",
    text: "Add your items to cart, checkout and earn reward points!",
  },
  {
    icon: "/icons/expect-items.svg",
    title: "Expect your Items",
    text: "Wait for your happy delivery in a matter of hours",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-14 my-[70px]">
      <div className="flex flex-col gap-2">
        <h3 className="text-black text-[26px] sm:text-[50px] text-center sm:text-left font-bold">
          How it works
        </h3>
        <p className="text-[#727272] text-center sm:text-left">
          Enjoy seamless shopping in simple steps—download the app, shop for
          your favorite items, earn rewards, and receive your order with fast
          delivery.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-4 items-left">
            <Image
              src={step.icon}
              alt={`${step.title} Icon`}
              height={14}
              width={14}
              className="w-14 h-14"
            />
            <div>
              <h4 className="text-black text-[21px] sm:text-[22px] font-bold">
                {step.title}
              </h4>
              <p className="text-[#727272] text-[17px]">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
