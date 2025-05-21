import React from "react";
import { TestimonialCarousel } from "../component/review";
import { ProductSection } from "../component/product";
import Footer from "../component/footer";
import About from "../component/about";
import Sleep from "../component/sleep";
import Feature from "../component/feature";
import Palette from "../component/palette";
import Gaming from "../component/gaming";
import Shop from "../component/shop";
import HeroSection from "../component/hero";
import PricingSection from "../component/pricing";
import ServiceSteps from "../component/service-steps";
import FaqNEW from "../component/new-faq";
import PrimaryHero from "../component/primaryHero";
import Navbar from "../component/navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <PrimaryHero />
      </div>
      <div id="about">
        <HeroSection />
      </div>
      <div id="design">
        <About />
      </div>
      <div id="techbehind">
        <PricingSection />
      </div>
      <div id="difference">
        <Shop />
      </div>
      <div id="product">
        <ProductSection />
      </div>
      <div id="whywear">
        <Gaming />
      </div>
      <div id="sleep">
        <Sleep />
      </div>
      <div id="feature">
        <Feature />
      </div>
      <div id="palette">
        <Palette />
      </div>
      <div id="service">
        <ServiceSteps />
      </div>
      <div id="faq">
        <FaqNEW />
      </div>
      <div id="review">
        <TestimonialCarousel />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default page;
