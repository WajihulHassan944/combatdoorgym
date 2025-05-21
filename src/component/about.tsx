"use client";

import Image from "next/image";
import Button from "./button";
import Link from "next/link";
export default function About() {
  const title = "";
  const subtitle = "It’s More Than a Doorway Gym System—It’s a Mindset Shift";
  const description =
    "When you step up to the COMBAT DOOR GYM, you're not just stepping into a workout—you’re stepping into a mindset. The kind that says, “I don’t need perfect conditions to train.” The kind that doesn't care whether you're at home, in a hotel room, or squeezing in a session between meetings.";
    const description1 =
    "Training becomes part of your lifestyle, not a chore on your calendar. You feel that shift after a week or two—when your punches snap harder, your breathing steadies faster, your back doesn’t ache from sitting all day. You don’t have to wait for the “perfect setup” to chase those changes.";
  const images = [
    {
      image: {
        url: "/images/product1.png",
      },
    },
    {
      image: {
        url: "/images/product2.png",
      },
    },
  ];
  const stats = [
    {
      title: "900+",
      description: "Happy Clients",
    },
    {
      title: "1400+",
      description: "Units Sold",
    },
    {
      title: "100%",
      description: "Satisfaction Rate",
    },
    {
      title: "4.8",
      description: "Client Review",
    },
  ];

  return (
    <div>
      <div className="flex flex-col max-w-[1200px] mx-auto p-4 gap-5 font-sans pt-16 md:pt-32">
        <div className="flex flex-col items-start gap-5">
          <div className="flex w-full justify-between gap-10 flex-wrap">
            <div className="flex-1 flex flex-col items-start min-w-[300px]">
              <div className="text-section">
                <h1 className="text-[#0B3D2C] font-medium tracking-wider text-lg mb-[5px]">
                  {title}
                </h1>
                <h2 className="text-[#181a18] text-3xl md:text-5xl mb-[5px] font-semibold font-clash-display">
                  {subtitle}
                </h2>
                <div className="text-lg leading-relaxed text-[#333] mb-10">
                  {description}
                </div>
                <Image
                  src={images[0].image.url}
                  alt="Placeholder Image"
                  width={800}
                  height={800}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start min-w-[300px]">
              <Image
                src={images[1].image.url}
                alt="Placeholder Image"
                width={800}
                height={800}
                className="rounded-lg"
              />
              <div className="text-section mb-8">
                <div className="text-lg leading-relaxed text-[#333] mt-10">
                  {description1}
                </div>
              </div>
              <Link href="#product">
             <Button text="Get One Now" variant="dark" />
             </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center items-center mb-[100px] flex-wrap mx-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-5 w-full md:w-[250px] rounded-[20px] text-center shadow-md"
          >
            <h2 className="text-[54px] font-bold text-[rgb(0,51,0)]">
              {stat.title}
            </h2>
            <p className="text-lg font-bold text-black">
              {stat.description}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
}
