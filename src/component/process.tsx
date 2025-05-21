"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

// Add export to make it available to other files
export interface ServiceStep {
  title: string;
  description: string;
  image: {
    url: string;
    alt?: string;
  }
  // Add any other properties your services have
}

const Process = ({ services }: { services: ServiceStep[] }) => {
  const [activeBox, setActiveBox] = useState(1);
  const servicesArray = Array.isArray(services) ? services : [];

  // Properly type your steps array
  const steps: ServiceStep[] = [
    {
      title: "Step 1",
      description: "Description for step 1",
      image: {
        url: "",
        alt: "",
      },
    },
    {
      title: "Step 2",
      description: "Description for step 2",
      image: {
        url: "",
        alt: "",
      },
    },
    // Add all your steps here with proper typing
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 px-3 md:px-5 max-w-[1400px] mx-auto md:h-[450px] mb-40">
        {servicesArray.map((step: ServiceStep, index: number) => (
            <div
              key={index}
              className={`relative bg-[#f5f5f5] transition-all duration-400 overflow-hidden cursor-pointer rounded-md md:rounded-[30px] ${
                activeBox === index ? "md:flex-[3] h-[300px] md:h-auto" : "md:flex-1 h-[100px] md:h-auto"
              }`}
              onMouseEnter={() => setActiveBox(index)}
            >
              <div className="absolute top-5 right-5 text-[#0B3D2C] text-lg z-[2]">
                {index + 1}
              </div>

              <div
                className={`h-full flex items-center justify-center transition-opacity duration-300 ${
                  activeBox === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="md:[writing-mode:vertical-rl] md:rotate-180 uppercase tracking-[2px] text-[#333] text-lg font-semibold">
                  {step.title}
                </div>
              </div>

              <div
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                  activeBox === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={step.image.url}
                    alt={step.image.alt || ""}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>

              <div
                className={`absolute bottom-10 left-2 lg:left-10 text-white transition-opacity duration-300 z-[2] ${
                  activeBox === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="text-2xl mb-4 font-semibold">{step.title}</h2>
                <div className="text-base leading-normal md:leading-relaxed mb-5 max-w-[80%]">
                  {step.description}
                </div>
                <div className="md:block hidden">
                  <Link href={"#product"}>
                    <Button text="Buy Now" variant="dark" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Process;
