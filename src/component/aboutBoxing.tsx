import Image from "next/image";
import Image1 from "./../../../public/images/PROLAST_20_X_20_Boxing_Ring__93402__18235.jpg";
import Image2 from "./../../../public/images/300398581_589095542661634_3436794445377246140_nfull.jpg";

const images = [
  {
    src: Image1,
    alt: "Background Frame",
    className: "w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover ",
    wrapperClass: "relative w-full",
  },
  {
    src: Image2,
    alt: "Fighter",
    className:
      "w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover hidden md:block absolute left-4 sm:left-20 top-4 sm:top-20",
    wrapperClass: "",
  },
];

const features = [
  {
    title: "Full-body workout",
    desc: "●	A full-body workout at home without lifting traditional weights",
  },
  {
    title: "Home gym setup",
    desc: "●	A compact home gym setup that doesn’t take over their space",
  },
  {
    title: "High-intensity",
    desc: "●	A high-intensity system that supports both cardio and strength",
  },
  {
    title: "Alternative",
    desc: "●	An alternative to boring treadmill sessions and overcrowded gyms",
  },
];

export default function AboutBoxing() {
  return (
    <section className="bg-white mt-20 mb-20 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-5 md:gap-10 lg:items-start justify-between">
        {/* Left Side - Images */}
        <div className="relative w-full max-w-lg mb-0">
          {images.map((img, idx) => (
            <div key={idx} className={img.wrapperClass}>
              <Image
                src={img.src}
                alt={img.alt}
                className={img.className}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Right Side - Content */}
        <div className="w-full max-w-2xl text-left">
          <p className="text-[#87c232] font-semibold uppercase tracking-wider mb-4 text-lg sm:text-xl">
            Who Is This Really For?
          </p>
          <h2 className="text-2xl sm:text-4xl  font-extrabold italic leading-[100%] mb-6">
            Sure, it’s a dream for boxers and MMA athletes. But truthfully, this
            setup is just as powerful for people who want: <br />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 md:mb-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="bg-[#87c232] text-white px-1.5 md:px-2 text-lg sm:text-xl md:text-2xl rounded-sm">
                  ✔
                </span>
                <div>
                  <h4 className="font-bold text-base md:text-lg uppercase mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-8 border-l-2 border-[#87c232] pl-4 sm:pl-6 text-sm md:text-base">
            Maybe you’re a busy parent with zero time to hit the gym. Maybe you
            live in an apartment where space is tight. Or maybe {"you're"} just
            tired of cookie-cutter fitness routines. Whatever your reason, if
            you want to feel like a fighter—even if you’ve never stepped into a
            ring—this home gym has your name on it.
          </p>

          <button className="bg-[#87c232] text-white font-bold py-3 px-6 uppercase rounded hover:bg-[#76ac2b] transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
