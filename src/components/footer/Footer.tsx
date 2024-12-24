"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialMediaIcons = [
  {
    src: "/icons/facebook-black.svg",
    alt: "Facebook Icon",
    url: "https://www.facebook.com/share/19cUCmCdjc/",
  },
  {
    src: "/icons/twitter-black.svg",
    alt: "Twitter Icon",
    url: "https://x.com/qooqsuk",
  },
  {
    src: "/icons/instagram-black.svg",
    alt: "Instagram Icon",
    url: "https://www.instagram.com/qooqsuk/",
  },
  {
    src: "/icons/linkedin-black.svg",
    alt: "LinkedIn Icon",
    url: "https://www.linkedin.com/company/qooqs/",
  },
  //   { src: "/icons/tiktok-black.svg", alt: "TikTok Icon", url: "https://www.tiktok.com/@qooqsuk" },
  {
    src: "/icons/youtube-black.svg",
    alt: "Youtube Icon",
    url: "https://www.youtube.com/channel/UCFSa3xVkLB39Mvexk7FSXwA",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-11/12 max-w-screen-xl mx-auto  border-t border-[#EAEAEA] pt-[70px] pb-10">
      <div className="flex flex-col sm:flex-row gap-[50px] sm:gap-[100px] lg:gap-[200px]  mb-[50px] sm:mb-[70px]">
        <div className="flex flex-col gap-5">
          <Image
            src={"/icons/footer-icon.svg"}
            alt={"C Icon"}
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <div className="flex flex-row gap-4">
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
                  width={22}
                  height={22}
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#1E1E1E] text-lg">Company</h4>

          <ul className="flex flex-col gap-4 text-[#727272] text-[17px]">
            <li className="">
              {" "}
              <Link href={"/"}>Terms & Privacy</Link>{" "}
            </li>
            <li className="">
              <Link href={"/"}>English</Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row gap-1 items-center">
        <Image
          src={"/icons/footer-icon.svg"}
          alt={"C Icon"}
          width={36}
          height={36}
          className="cursor-pointer"
        />
        <p className="text-[#1E1E1E] text-lg">QOOQS {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
