import Image from "next/image";
import Image1 from "./../../public/images/heroleft.webp";
import Image2 from "./../../public/images/heroright.webp";
import Image3 from "./../../public/images/prood6.png";
import Button from "./button";
import Link from "next/link";
export default function Shop() {
  return (
    <div className="w-full bg-gradient-to-br from-[#e7f5d4] to-[#f0f6e7] px-4 py-10 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#000]">
                Built by Fighters, <br />
                for Fighters{" "}
              </span>
              <span className="bg-gradient-to-r from-[#87c232] to-[#87c232] bg-clip-text text-transparent">
                Combat Gym Bar
              </span>
            </h1>
          </div>
          <div className="flex-1 max-w-md ml-auto">
            <div className="flex items-start gap-3 mb-4">
              <p className="text-[#1d2a4d] text-base md:text-lg">
                When a system is designed by someone with 30+ years in the
                combat world, it shows. You can feel it in the way the COMBAT
                DOOR GYM holds up to a heavy-duty round of punches. The multiple
                anchor points give it the kind of flexibility that even
                commercial gym equipment struggles to deliver.
                <br />
                <br />
                And yes, it’s solid. You won’t find plastic brackets or cheap
                materials here. This thing is engineered for real resistance,
                real motion, and real sweat. Whether {"you're"} working on hand
                speed, core rotation, power strikes, or general conditioning,
                {"it's"} got your back. Literally and figuratively.
              </p>
            </div>
            <Link href="#product">
            <Button text="Buy Combat Gym Bar" variant="dark" />
            </Link>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-3 md:gap-6 auto-rows-fr">
          {/* Left Panel: spans 2 rows */}
          <div className="bg-[#144633] text-white p-8 rounded-3xl flex flex-col justify-between h-full row-span-2">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8">
              Adaptable for
              <br />
              All Fighting Styles
            </h2>
            <p>
              Whether you’re into boxing, Muay Thai, MMA, or even just
              conditioning drills, this system adjusts to your style. You can
              set it up high for striking work, low for kicks and core, or
              somewhere in between for explosive combos. It supports all kinds
              of routines, making it a flexible tool in any training program.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div>

            <ul className="mb-8 list-disc list-inside space-y-3 text-base font-medium leading-tight mt-4">
              <li>Built to Withstand Fighter-Level Intensity</li>
              <li>High-Quality Materials, No Shortcuts</li>
              <li>Adaptable for All Fighting Styles</li>
              <li>Real Training, Not Just Fancy Marketing</li>
            </ul>
              </div>
            </div>
          </div>

          {/* Top Middle: Watch */}
          <div className="bg-white rounded-3xl overflow-hidden flex items-center justify-center">
            <Image
              src={Image2}
              alt="Red smartwatch on a rock"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Man, spans 2 rows */}
          <div className="bg-[#4a9fc1] rounded-3xl overflow-hidden flex items-center justify-center row-span-2">
            <Image
              src={Image3}
              alt="Person sitting on blue surface"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bottom Middle: Shoes */}
          <div className="bg-[#e6f7f7] rounded-3xl overflow-hidden flex items-center justify-center">
            <Image
              src={Image1}
              alt="White sneakers"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
