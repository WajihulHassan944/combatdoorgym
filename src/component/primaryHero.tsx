"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroImage from "./../../public/images/product2.png";
import Button from "./button";
import Navbar from "./navbar";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  const background_images = [
    {
      image: {
        url: HeroImage,
        alt: "Sample background 1",
      },
    },
    {
      image: {
        url: HeroImage,
        alt: "Sample background 2",
      },
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === background_images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Control the sequential animation
  useEffect(() => {
    // Start with the top background image
    setAnimationStage(1);

    // Left decoration appears after 600ms
    const timer1 = setTimeout(() => {
      setAnimationStage(2);
    }, 600);

    // Right decoration appears after 1000ms
    const timer2 = setTimeout(() => {
      setAnimationStage(3);
    }, 1000);

    // Content fades in after 1400ms
    const timer3 = setTimeout(() => {
      setContentVisible(true);
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const ScrollToProductButton = () => {
    const scrollToProduct = () => {
      const productSection = document.getElementById('product');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    return (
      <Button 
        text="Buy Combat Gym Bar" 
        variant="dark" 
        onClick={scrollToProduct}
      />
    );
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col bg-cover position-absolute -top-20 bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('/images/product5.png')",
        opacity: animationStage >= 1 ? 1 : 0,
        transform: animationStage >= 1 ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
      id="hero"
    >
      <Navbar />
      
      <div className="w-full flex-grow flex items-center justify-center">
        <div 
          className="flex flex-col items-center justify-center text-center px-4 sm:px-9 max-w-6xl mx-auto mt-40"
          style={{
            opacity: contentVisible ? 1 : 0,
            filter: contentVisible ? 'blur(0)' : 'blur(5px)',
            transition: 'opacity 0.8s ease-out, filter 0.8s ease-out'
          }}
        >
          {/* Main Heading */}
          <Image src="/images/cdg-logo.png" alt="Combat Door Gym Logo" width={140} height={140}/>
          <h2 className="mb-6 text-[32px] sm:text-[60px] font-normal leading-[100%] text-black max-w-6xl">
            Train Like a Fighter: The Ultimate
            <span className="font-black"> Home Gym for Boxing</span> and MMA
            Workouts
          </h2>

          {/* Description */}
          <div className="text-lg font-normal text-black max-w-4xl mx-auto">
            <p className="mb-4">
              {" "}
              {"Let's"} be honest—most home workouts feel like a compromise. You
              want the grit, intensity, and power of a fight camp, but {"you're"}
              stuck shadowboxing in front of your TV or looping bands around a
              chair that barely holds up. {"That's "}where the COMBAT DOOR GYM flips
              the script.
            </p>
            <p className="mb-3 text-lg font-normal text-black">
              This {"isn't"} your average resistance band set or doorway pull-up
              bar. Born from over three decades in the boxing and MMA world, the
              COMBAT DOOR GYM is a home gym made by people who understand the
              way fighters train, sweat, and grind. And if {"you're someone who's"}
              serious about a full-body workout at home but {"can't"} always make it
              to the gym, this is the solution you {"didn't"} know you needed—until
              now.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex gap-6 ">
            <ScrollToProductButton />
          </div>
        </div>
        <div className="flex">    
          <div 
            className="absolute left-0 top-96 h-full pointer-events-none hidden lg:block"
            style={{
              transform: animationStage >= 2 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.7s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            <Image
              src="/images/heroleft.webp"
              alt="Left hero decoration"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>

       
          <div 
            className="absolute right-0 top-40 h-full pointer-events-none hidden lg:block"
            style={{
              transform: animationStage >= 3 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.7s ease-out',
              transitionDelay: '0.4s'
            }}
          >
            <Image
              src="/images/heroright.webp"
              alt="Right hero decoration"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
