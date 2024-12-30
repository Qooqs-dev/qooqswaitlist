import React from "react";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Hero from "./Hero";
import Cookies from "../cookie/CookieConsent";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Cookies/>
    </div>
  );
};

export default Home;
