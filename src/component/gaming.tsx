import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";
import Image1 from "./../../public/images/prood3.png";

import Button from "./button";
export default function Gaming() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-5 sm:py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        {/* Left Column - Text Content */}
        <div className="p-4 sm:p-10 md:p-16 flex flex-col justify-center">
          <div>
            <h2 className="mb-6 sm:mb-8 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[100%] text-black hidden md:block">
              Why
              <br />
              Fighters
              <br />
              Love It
            </h2>
            <h2 className=" mb-3 sm:mb-8 text-2xl sm:text-5xl lg:text-5xl font-black tracking-tighter leading-tight text-black block md:hidden">
            Why Fighters Love It
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-md text-sm md:text-base sm:text-lg">
              Ask any boxer or MMA pro and {"they'll"} tell you—fight training isn’t
              just about hitting hard. It’s about body control, breath, rhythm,
              and sharpness. The COMBAT DOOR GYM lets you drill every part of
              that in one small space.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-md text-sm md:text-base sm:text-lg">
              From jab drills to leg burners, from hip mobility flows to
              rotational strikes, you’re not just building muscle. You’re
              building muscle memory. This is why {"it's"} more than just another
              piece of home gym gear. It’s MMA training at home, customized to
              your flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
            <Link href="#product">
            <Button text="Get One Now" variant="dark" />
            </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Controller Image */}
        <div className="relative w-full h-full px-4 sm:px-8">
          <Image
            src={Image1}
            alt="VR Gaming Controller"
            className="w-full h-auto object-cover rounded-xl"
            priority
          />

          {/* Product Card */}
          <div className="absolute top-1/2 left-11 md:-left-12 transform -translate-y-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-lg w-[80%] sm:w-[250px]">
            <h3 className="font-bold text-lg sm:text-xl mb-1">Combat Gym Bar</h3>
            <p className="text-gray-500 text-sm mb-4">
              Pullbar for everything
            </p>

           
            <div className="flex justify-between items-center">
              <div className="bg-white rounded-full p-2 border rotate-[-45deg]">
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="font-bold text-sm sm:text-base">$199.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
