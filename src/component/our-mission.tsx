import React from "react";
import Image from "next/image";

// Dummy data for images
const images = [
  {
    image: {
      url: "/images/mission1.jpg",
      alt: "Team working together",
      dimensions: { width: 600, height: 400 },
    },
  },
  {
    image: {
      url: "/images/mission2.jpg",
      alt: "Community event",
      dimensions: { width: 600, height: 400 },
    },
  },
  {
    image: {
      url: "/images/mission3.jpg",
      alt: "Innovation in action",
      dimensions: { width: 600, height: 400 },
    },
  },
];

// Dummy data for items
const items = [
  {
    icon: {
      url: "/icons/vision.svg",
      alt: "Vision Icon",
      dimensions: { width: 64, height: 64 },
    },
    title: "Our Vision",
    description: "To empower communities through innovative solutions and a commitment to excellence.",
    button_title: "Buy Now",
    textColor: "text-[#1d2a4d]",
    buttonColor: "text-[#3E25F5]",
  },
  {
    icon: {
      url: "/icons/mission.svg",
      alt: "Mission Icon",
      dimensions: { width: 64, height: 64 },
    },
    title: "Our Mission",
    description: "Deliver high-quality products that make a real difference in people's lives.",
    button_title: "Buy Now",
    textColor: "text-[#1d2a4d]",
    buttonColor: "text-[#EEFF00]",
  },
  {
    icon: {
      url: "/icons/values.svg",
      alt: "Values Icon",
      dimensions: { width: 64, height: 64 },
    },
    title: "Our Values",
    description: "Integrity, innovation, and inclusivity are at the heart of everything we do.",
    button_title: "Buy Now",
    textColor: "text-[#1d2a4d]",
    buttonColor: "text-[#3E25F5]",
  },
];

const MissionVisionSection = () => {
  return (
    <div className="w-full bg-white py-12 relative mx-auto max-w-[1350px] mb-[1150px] md:mb-[400px]">
      <div className="max-w-[1170px] mx-auto relative px-4">
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-[240px] sm:h-[280px] md:h-[316px] overflow-hidden"
            >
              <Image
                src={img.image.url}
                alt={img.image.alt || ""}
                width={img.image.dimensions.width}
                height={img.image.dimensions.height}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1065px] p-6 md:p-8 absolute -top-[90px] left-1/2 -translate-x-1/2 bg-[#FCFAF7] rounded-2xl">
            {items.map((section, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-4 relative overflow-hidden rounded-[20px]`}
              >
                <div className="relative z-10 flex justify-center items-center bg-white h-[120px] w-[120px] rounded-full shadow-md mb-[38px] mt-[30px]">
                  <Image
                    src={section.icon.url}
                    alt={section.icon.alt || ""}
                    width={section.icon.dimensions.width}
                    height={section.icon.dimensions.height}
                  />
                </div>
                <div
                  className={`relative z-10 text-center mt-4 ${section.textColor}`}
                >
                  <h3 className="text-[24px] font-semibold mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[16px] font-normal mb-4 max-w-[243px] mx-auto">
                    {section.description}
                  </p>
                  <button
                    className={`font-semibold flex items-center mx-auto transition-all duration-300 pb-5 ${section.buttonColor}`}
                  >
                    <span className="underline">{section.button_title}</span>{" "}
                    <span className="ml-2 group-hover:ml-3 transition-all duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MissionVisionSection;
