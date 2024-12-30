"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";

interface CookiePreferences {
  required: boolean;
  functional: boolean;
  advertising: boolean;
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    required: true, // Always true as these are required
    functional: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already set cookie preferences
    const cookieConsent = Cookies.get("cookie-consent");
    if (!cookieConsent) {
      setIsOpen(true);
    } else {
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
      }
    }
  }, []);

  const handleToggle = (type: keyof Omit<CookiePreferences, "required">) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const savePreferences = () => {
    Cookies.set("cookie-consent", JSON.stringify(preferences), {
      expires: 365,
    });
    setIsOpen(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      required: true,
      functional: true,
      advertising: true,
    };
    setPreferences(allAccepted);
    Cookies.set("cookie-consent", JSON.stringify(allAccepted), {
      expires: 365,
    });
    setIsOpen(false);
  };

  const declineAll = () => {
    const allDeclined = {
      required: true, // Required cookies can't be declined
      functional: false,
      advertising: false,
    };
    setPreferences(allDeclined);
    Cookies.set("cookie-consent", JSON.stringify(allDeclined), {
      expires: 365,
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={"/icons/qooqs-logo2.png"}
            alt={"Qooqs Logo"}
            width={200}
            height={20}
            className="w-auto h-[40px] sm:h-[52px]"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          Please choose your preference regarding our use of cookies and related
          technologies ("Cookies") as outlined in our privacy policy. You can
          explore each category below for detailed information. At any time, you
          may revisit this page using the same browser to adjust your
          preferences. Note that clearing your browser's cookies will reset
          these settings.
        </p>

        {/* Cookie Types */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Required Cookies</p>
              <p className="text-sm text-gray-500">Always active</p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="required"
                id="required"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked
                disabled
              />
              <label
                htmlFor="required"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Functional Cookies</p>
              <p className="text-sm text-gray-500">
                Enhance site functionality
              </p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="functional"
                id="functional"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={preferences.functional}
                onChange={() => handleToggle("functional")}
              />
              <label
                htmlFor="functional"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Advertising Cookies</p>
              <p className="text-sm text-gray-500">
                Help deliver personalized ads
              </p>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="advertising"
                id="advertising"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={preferences.advertising}
                onChange={() => handleToggle("advertising")}
              />
              <label
                htmlFor="advertising"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={savePreferences}
            className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            SUBMIT ALL PREFERENCES
          </button>

          <button
            onClick={acceptAll}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ACCEPT ALL
          </button>

          <button
            onClick={declineAll}
            className="w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            DECLINE ALL
          </button>
        </div>
      </div>
    </div>
  );
}
