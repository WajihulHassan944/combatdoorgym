"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Process, { ServiceStep } from "./process";

// Dummy data
const dummyServices = [
  {
    title: "Built to Withstand Fighter-Level Intensity",
    description: "The COMBAT DOOR GYM doesn't flinch under pressure. It's not phased by sweat, speed, or power. It's built to survive real training conditions and deliver results session after session.",
    image: {
      url: "/images/prood6.png",
      alt: "Step One Image",
    },
  },
  {
    title: "High-Quality Materials, No Shortcuts",
    description: "This isn't just about design. It's about durability. The fabric is tough. The buckles are secure. The stitching is reinforced. You're not going to find parts peeling, fraying, or failing under tension.",
    image: {
      url: "/images/prood7.png",
      alt: "Step Two Image",
    },
  },
  {
    title: "Real Training, Not Just Fancy Marketing",
    description: "This product doesn't rely on hype or flashy names. It's straightforward and effective because it was made to work, not to impress.",
    image: {
      url: "/images/prood10.png",
      alt: "Step Three Image",
    },
  },
];

interface ServiceStepsProps {
  title?: string;
  services?: ServiceStep[];
  ctaButtonTitle?: string;
  ctaButtonSlug?: string;
}

const ServiceSteps: React.FC<ServiceStepsProps> = ({
  title = "It's More Than a Doorway Gym System—It's a Mindset Shift",
  services = dummyServices,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative mb-[600px] md:mb-96">
      <div className="relative h-96 w-full bg-green-900 bg-[url('/images/services-title-bg-1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="py-20  px-4 lg:px-0">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative z-10 pt-10"
          >
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-black text-4xl font-poppins font-bold mb-8 text-left px-10"
            >
              {title}
            </motion.h2>

            {/* Cards Grid */}
            <motion.div variants={containerVariants} className="">
              <Process services={services} />
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;
