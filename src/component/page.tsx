import React from "react";
import About from "./about";
import Sleep from "./sleep";
import Feature from "./feature";
import Palette from "./palette";
import Gaming from "./gaming";
import Shop from "./shop";
import HeroSection from "./hero";
import PricingSection from './../component/pricing'
import ServiceSteps from './service-steps'
import FaqNEW from './new-faq'
import PrimaryHero from './primaryHero'
const page = () => {
  return (
    <div>
      <PrimaryHero/>
      <HeroSection />
      <About />
      <PricingSection/>
      <Shop />
      <Gaming />
      <Sleep />
      <Feature />
      <Palette />
      <ServiceSteps/>
      <FaqNEW/>
    </div>
  );
};

export default page;
