"use client";
import { useState } from "react";
import Image from "next/image";

import Image1 from "./../../../public/images/300398581_589095542661634_3436794445377246140_nfull.jpg";
import Image2 from "./../../../public/images/home-insta-image-2.webp";
import Image3 from "./../../../public/images/300398581_589095542661634_3436794445377246140_nfull.jpg";

export default function Services() {
  const [activeSection, setActiveSection] = useState(0);

  const features = [
    {
      icon: "medal",
      title: "Decades of Expertise in Every Design Detail",
      description:
        "This system wasn’t whipped up overnight. It comes from a long career in combat sports, where quality and performance mean everything. Every strap, anchor, and clip was tested and adjusted until it met the standards of real fighters. That depth of experience makes it different from the generic stuff you find online.",
      image: Image1,
    },
    {
      icon: "users",
      title: "Built to Withstand Fighter-Level Intensity",
      description:
        "If you’re throwing elbows, working knees, or doing resistance training at home, you need gear that can handle it. The COMBAT DOOR GYM doesn’t flinch under pressure. It’s not phased by sweat, speed, or power. It’s built to survive real training conditions and deliver results session after session.",
      image: Image2,
    },
    {
      icon: "paintbrush",
      title: "High-Quality Materials, No Shortcuts",
      description:
        "This isn’t just about design. It’s about durability. The fabric is tough. The buckles are secure. The stitching is reinforced. You’re not going to find parts peeling, fraying, or failing under tension. Everything about this system screams reliability. You can go full force without second-guessing its safety.",
      image: Image3,
    },
    {
      icon: "paintbrush",
      title: "Real Training, Not Just Fancy Marketing",
      description:
        "This product doesn’t rely on hype or flashy names. It’s straightforward and effective because it was made to work, not to impress. Fighters don’t care about buzzwords—they care about results. And this delivers. It lets you train the way you actually fight, not the way a marketer thinks you should.",
      image: Image3,
    },
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "medal":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#1e1e1e]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        );
      case "users":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#1e1e1e]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "paintbrush":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#1e1e1e]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a1.5 1.5 0 0 0-3 0Z" />
            <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
            <path d="M14.5 17.5L4.5 15" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#1e1e1e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#87c232] mb-2 text-sm md:text-base"></p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Built by Fighters, for Fighters
          </h2>
          <p className="text-gray-300 mb-0 md:mb-8 text-sm md:text-base">
            When a system is designed by someone with 30+ years in the combat
            world, it shows. You can feel it in the way the COMBAT DOOR GYM
            holds up to a heavy-duty round of punches. The multiple anchor
            points give it the kind of flexibility that even commercial gym
            equipment struggles to deliver.
          </p>
          <p className="text-gray-300 mb-0 md:mb-8 text-sm md:text-base">
            And yes, it’s solid. You won’t find plastic brackets or cheap
            materials here. This thing is engineered for real resistance, real
            motion, and real sweat. Whether{" you're"} working on hand speed, core
            rotation, power strikes, or general conditioning, {"it's"} got your
            back. Literally and figuratively.
          </p>
        </div>

        {/* Responsive Content Grid */}
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 items-center">
          {/* Left Column - Feature List */}
          <div className="w-full lg:w-1/2">
            <div className="border-l-4 border-gray-300">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`cursor-pointer transition-all duration-300 pl-1.5 md:pl-3 ${
                    activeSection === index
                      ? "border-l-4 border-[#87c232] -ml-1 "
                      : ""
                  }`}
                >
                  <div
                    className={`flex-col md:flex-row flex items-start gap-2 md:gap-4 bg-white p-2.5 md:p-4 rounded shadow-sm hover:shadow-md mb-2 md:mb-4`}
                  >
                    <div className="p-2 border-[#87c232] border rounded">
                      {renderIcon(feature.icon)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-[#87c232] mb-0 md:mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[#1e1e1e] text-xs md:text-sm ">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Image */}
          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative rounded overflow-hidden shadow-lg">
            <Image
              src={features[activeSection].image}
              alt={features[activeSection].title}
              fill
              className="object-cover rounded transition-opacity duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
