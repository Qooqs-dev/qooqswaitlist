import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialMediaIcons = [
  { src: "/icons/facebook.svg", alt: "Facebook Icon", url: "/" },
  { src: "/icons/twitter.svg", alt: "Twitter Icon", url: "/" },
  { src: "/icons/instagram.svg", alt: "Instagram Icon", url: "/" },
  { src: "/icons/linkedin.svg", alt: "LinkedIn Icon", url: "/" },
  { src: "/icons/tiktok.svg", alt: "TikTok Icon", url: "/" },
  { src: "/icons/youtube.svg", alt: "Youtube Icon", url: "/" },
];

const Header = () => {
  return (
    <header className="sticky z-20 top-0 h-[80px] md:h-[96px] ">
      <div className="h-8 bg-[#5386E4] ">
        <div className="w-11/12 max-w-screen-xl mx-auto ">
          <div className="flex flex-row gap-[22px] items-center justify-end py-1.5">
            {socialMediaIcons.map((icon, index) => (
              <Link
                href={icon.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-16 bg-[#F4F4F4] ">
        <div className="w-11/12 max-w-screen-xl mx-auto  flex  py-5">
          {/* <Image
            src={"/icons/qooqs-logo1.png"}
            alt={"Qooqs Logo"}
            width={200}
            height={20}
           className="w-[200px] h-auto"
          /> */}
          Logo
        </div>
      </div>
    </header>
  );
};

export default Header;
