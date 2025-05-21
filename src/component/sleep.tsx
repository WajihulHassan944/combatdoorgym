import Image from "next/image";
import prp from "./../../public/images/prp1.png";
import prp2 from "./../../public/images/prp2.png";
import prp3 from "./../../public/images/prp3.png";

const infoCards = [
  {
    title: "All in One",
    description: "A full-body workout at home without lifting traditional weights",
    icon: prp,
  },
  {
    title: "Compact",
    description:
      "A compact home gym setup that doesn’t take over their space",
    icon: prp2,
  },
  {
    title: "Exciting",
    description:
      "An alternative to boring treadmill sessions and overcrowded gyms",
    icon: prp3,
  },
];

export default function Sleep() {
  return (
    <section className="bg-[#144633] text-white py-6 sm:py-10 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-10 md:mb-16">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight mb-2 md:mb-6 font-serif max-w-xl">
              No Gimmicks—Just Functionality
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex-1 text-base md:text-lg leading-relaxed text-[#d1c7e0] max-w-md">
            <p className="mb-4">
              What sets the COMBAT DOOR GYM apart from a thousand other products
              claiming to be “total gyms” is how it adapts to what you need.
              Training for endurance? Clip in bands and do burnouts. Working on
              explosive power? Strap on a bag and throw combos. Want to focus on
              mobility? Use the anchor points for stretching and joint mobility
              work. It mimics what fight gyms offer—just scaled to your space.
              And the best part? It comes down just as fast as it goes up.
              There’s no heavy rack, no permanent install. It’s true home
              exercise equipment that fits into your life, not the other way
              around.
            </p>
            <p>
              {"You're"} not just working out anymore. {"You're"} training with purpose.
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-7 md:gap-10 lg:gap-20 mx-auto ">
          {infoCards.map((card, index) => (
            <div key={index}>
              <div className="flex flex-row items-start mb-4 gap-3">
                <div className="bg-white p-2 rounded-full min-w-14">
                  <Image
                    src={card.icon}
                    alt={`${card.title} Icon`}
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#d1c7e0] mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
