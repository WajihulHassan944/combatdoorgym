import Image from "next/image";
import { DoorOpen, Dumbbell, Timer, Shield } from "lucide-react";

const features = [
  {
    title: "Not Just Another Door Gym",
    description:
      "A lot of home gym systems rely on gimmicks or flashy designs that promise a lot but don't deliver in real-world use. The COMBAT DOOR GYM flips that. It's built around actual functionality and real experience in fight training. You're not buying into marketing fluff—you're getting a tool that performs exactly as advertised.",
    icon: Shield,
  },
  {
    title: "As Versatile As Your Goals",
    description:
      "Whether your focus is speed, strength, balance, or cardio, this gym system adjusts to meet your needs. One day you might be working footwork drills, the next day resistance training at home for upper body strength. This versatility lets you switch up your workouts regularly, keeping you engaged and your body constantly challenged.",
    icon: Dumbbell,
  },
  {
    title: "Packs Down, Sets Up Fast",
    description:
      "Some equipment becomes a hassle to put together, and that kills momentum. The COMBAT DOOR GYM sets up in a matter of minutes and comes down just as quickly. That means fewer excuses and more action. You don't waste time fighting with parts or instructions—you get straight to training.",
    icon: Timer,
  },
  {
    title: "Reliable Resistance Every Time",
    description:
      "Resistance bands are often hit or miss. Either they slip out of place, or they just don't feel stable. That's not the case here. This system anchors bands in a way that keeps them firm and aligned with your movement. You get consistent resistance, which leads to consistent gains. It makes resistance training at home feel like working with cables at a gym.",
    icon: DoorOpen,
  },
];

export default function Feature() {
  return (
    <section className="bg-white py-6 sm:py-10 md:py-16 lg:py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 ">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="uppercase text-4xl font-bold tracking-wider mb-1.5 sm:mb-3 md:mb-5">
          Why Fighters Love It
          </h2>
          <p className="text-gray-800 max-w-lg mb-6 sm:mb-10 ">
            {"Here's"} something a lot of people {"don't"} realize: studies show that
            consistency is the biggest driver of fitness success. You {"don't"} need
            two hours a day or a fancy membership. You need access, convenience,
            and a reason to show up. The COMBAT DOOR GYM eliminates most of the
            usual friction points. No more planning your day around gym traffic.
            No more skipped sessions because of weather, work, or whatever else.
            Just open your door, hook in, and get after it. Plus, it makes
            resistance training at home a breeze. Your muscles {"won't"} care
            whether {"you're"} lifting a dumbbell or pulling against a tension band
            anchored overhead—they just know {"they're"} working.
          </p>
          <p className="text-gray-800 max-w-md mb-6 sm:mb-10 md:mb-20">
            Ask any boxer or MMA pro and {"they'll"} tell you—fight training {"isn't"}
            just about hitting hard. {"It's"} about body control, breath, rhythm,
            and sharpness. The COMBAT DOOR GYM lets you drill every part of that
            in one small space. From jab drills to leg burners, from hip
            mobility flows to rotational strikes, {"you're"} not just building
            muscle. {"You're"} building muscle memory. This is why {"it's more"} than
            just another piece of home gym gear. {"It's MMA"} training at home,
            customized to your flow.
          </p>
        </div>

        {/* Right Features */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
            > 
              <div className="mb-4">
                <feature.icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
