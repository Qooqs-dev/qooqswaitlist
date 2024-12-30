"use client";

import { X, Copy, PartyPopper } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WaitlistData } from "../../../types/waitlist.types";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  WaitlistData: WaitlistData;
}

export default function WaitlistModal({
  isOpen,
  onClose,
  WaitlistData,
}: WaitlistModalProps) {
  const [copied, setCopied] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  // Function to calculate the number of days remaining until January 1, 2025
  const calculateDaysRemaining = () => {
    const today = new Date();
    const endDate = new Date("2025-04-01T00:00:00");
    const timeDiff = endDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  // Effect to initialize and update the countdown every day
  useEffect(() => {
    setDaysRemaining(calculateDaysRemaining());

    const timer = setInterval(() => {
      setDaysRemaining(calculateDaysRemaining());
    }, 86400000); // Update every 24 hours

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);


  if (!isOpen) return null;

  const copyToClipboard = async () => {
    try {
      //   await navigator.clipboard.writeText(`https://qooqs.co.uk?referralCode=${referralLink}`);
      await navigator.clipboard.writeText(
        `http://localhost:3000?referralCode=${WaitlistData?.user?.referralCode}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center gap-6">
          {/* <Image
            src="/icons/qooqs-logo.svg"
            alt="Qooqs Logo"
            width={80}
            height={80}
            className="mb-2"
          /> */}
          <Image
            src={"/icons/qooqs-logo2.png"}
            alt={"Qooqs Logo"}
            width={200}
            height={20}
            className="w-auto h-[40px] mb-2"
          />

          <div className="text-center">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-1">
              You&apos;re on the waitlist! <PartyPopper className="w-6 h-6" />
            </h2>
            <p className="text-lg">Your current position is #{WaitlistData?.position}</p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: `${
                  (WaitlistData?.referralProgress?.referralsCount / 20) * 100
                }%`,
              }}
            />
            <p className="text-right text-sm text-gray-500 w-full my-2">
              {WaitlistData?.referralProgress?.referralsCount} of 20
            </p>
          </div>

          {WaitlistData?.referralProgress?.referralsCount < 20 && (
            <p className="text-center text-gray-700">
              Refer {WaitlistData?.referralProgress?.remaining} more friends
              within the next {daysRemaining} days and unlock lifetime rewards based on their
              activity!
            </p>
          )}

          <div className="w-full relative">
            <input
              type="text"
              value={`http://qooqs.co.uk?referralCode=${WaitlistData?.user?.referralCode}`}
              readOnly
              className="w-full px-4 py-3 pr-12 border rounded-lg bg-gray-50"
            />
            <button
              onClick={copyToClipboard}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Copy
                className={`w-5 h-5 ${
                  copied ? "text-green-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          <div className="flex gap-3 w-full">
            <a
              href={`https://twitter.com/intent/tweet?url=https://qooqs.co.uk?referralCode=${WaitlistData?.user?.referralCode}&text=Join the waitlist for Qooqs and get lifetime rewards!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-1 justify-center items-center px-4 py-2 rounded-full bg-[#0000001A] hover:bg-[#0000000d]"
            >
              <Image
                src={"/icons/twitter-modal.svg"}
                alt={"Twitter Logo"}
                width={17}
                height={16}
                className="w-auto h-[13px] sm:h-[15px]"
              />
              <p className="text-sm sm:text-base">Post</p>
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=Join the waitlist for Qooqs! Here's my referral link: https://qooqs.co.uk?referralCode=${WaitlistData?.user?.referralCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-1 justify-center items-center text-[#2CB742] px-4 py-2 rounded-full bg-[#2CB74233] hover:bg-[#2cb74115]"
            >
              <Image
                src={"/icons/whatsapp-modal.svg"}
                alt={"WhatsApp Logo"}
                width={17}
                height={16}
                className="w-auto h-[13px] sm:h-[15px]"
              />
              <p className="text-sm sm:text-base">Share</p>
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://qooqs.co.uk/?referralCode=${WaitlistData?.user?.referralCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-1 justify-center items-center text-[#3C5997] px-4 py-2 rounded-full bg-[#3C599733] hover:bg-[#3c59971a]"
            >
              <Image
                src={"/icons/facebook-modal.svg"}
                alt={"Facebook Logo"}
                width={17}
                height={16}
                className="w-auto h-[13px] sm:h-[15px]"
              />
              <p className="text-sm sm:text-base">Share</p>
            </a>

            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://qooqs.co.uk?referralCode=${WaitlistData?.user?.referralCode}&title=Join Qooqs&summary=Get lifetime rewards with Qooqs!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-1 justify-center items-center text-[#2767B2] px-4 py-2 rounded-full bg-[#2767B21A] hover:bg-[#2cb7410b]"
            >
              <Image
                src={"/icons/linkedin-modal.svg"}
                alt={"LinkedIn Logo"}
                width={17}
                height={16}
                className="w-auto h-[13px] sm:h-[15px]"
              />
              <p className="text-sm sm:text-base">Share</p>
            </a>
          </div>

          <p className="text-center text-gray-700">
            You have referred{" "}
            <span className="font-bold">
              {WaitlistData?.referralProgress?.referralsCount} friends
            </span>{" "}
            so far
          </p>

          <div className="w-full">
            <h3 className="font-bold text-lg text-center mb-3">LEADERBOARD</h3>
            <div className="max-h-36 overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-white text-[15px] text-left text-gray-500 border-b">
                  <tr>
                    <th className="pb-2">RANK</th>
                    <th className="pb-2">USERID</th>
                    {/* <th className="pb-2">REFERRAL CODE</th> */}
                    <th className="pb-2">NO OF REFERRALS</th>
                  </tr>
                </thead>
                <tbody>
                  {WaitlistData.leaderboard
                    .sort((a, b) => b.referralsCount - a.referralsCount) // Sort by referralsCount in descending order
                    .map((item, index) => (
                      <tr key={item._id} className="border-b last:border-0">
                        <td className="py-2">{index + 1}</td>{" "}
                        {/* Assign rank based on index */}
                        <td className="py-2">{item._id.slice(0, 5)}...</td>
                        {/* <td className="py-2">{item.email}</td> */}
                        {/* <td className="py-2">{item.referralCode}</td> */}
                        <td className="py-2">{item.referralsCount}</td>
                      </tr>
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
