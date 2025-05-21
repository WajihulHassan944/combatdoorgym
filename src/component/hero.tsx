"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./button";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const background_images = [
    {
      image: {
        url: "/images/prood6.png",
        alt: "Sample background 1",
      },
    },
    {
      image: {
        url: "/images/prood6.png",
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

  return (
    <div className="overflow-x-hidden w-full">
      <div className="relative bg-green-900 min-h-[600px] md:min-h-[700px]">
        {/* Background Image Slider */}
        <div className="absolute inset-0 h-full w-full">
          {background_images.map((image, index) => (
            <div
              key={index}
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            >
              <div className="relative w-full h-full">
                <div className="absolute right-0 top-0 w-3/5 md:w-1/2 h-full">
                  <Image
                    src={image.image.url}
                    alt={image.image.alt || `Hero Background ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 60vw, 50vw"
                    quality={100}
                    className="object-cover object-right"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2C] via-[#0B3D2C]/80 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1346px] mx-auto">
          {/* Main Content */}
          <div className="relative px-4 sm:px-9 max-w-[880px] py-12 sm:py-24 md:py-32">
            <div className="justify-center">
              {/* Main Heading */}
              <h2 className="mb-6 text-[32px] sm:text-[60px] font-normal leading-[100%] text-white max-w-4xl">
                A Real Fight Camp Setup
                <span className="font-bold"> Minus</span> the Commute
              </h2>

              {/* Description */}
              <div className="mb-8 text-lg font-normal text-white">
                <p className="mb-4">
                 {" Here's the deal. You don't"} need a full-blown garage gym to
                  train like a pro. The COMBAT DOOR GYM turns any standard
                  doorway into a compact home gym that feels like a mini fight
                  camp. No need to bolt things into your walls. No need to drag
                  around bulky weights or clear out your entire living room.
                  Just hook it up, clip on what you need—heavy bags, resistance
                  bands, or training gear—and get started.
                </p>
                <p className="mb-8 text-lg font-normal text-white">
                  This setup {"isn't"} just for boxers or MMA fighters. {"It's"} for anyone craving a smarter
                  way to train hard at home. Think strength work, cardio,
                  conditioning, kickboxing, and functional movement. Everything
                  {"you'd"} expect from top-tier home exercise equipment, without
                  the price tag or space suck.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex gap-6">
                <Button 
                  text="Buy Combat Gym Bar" 
                  variant="dark" 
                  scrollToProduct={true} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
