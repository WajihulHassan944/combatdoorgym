"use client";
import { useState } from "react";

// Dummy data
const title = "FAQ";
const subtitle = "Frequently Asked Questions";
const description =
  "Find answers to the most common questions about the Combat Door Gym. If you still have questions, feel free to reach out!";

const faqs = [
  {
    question: "How easy is it to install the Combat Door Gym?",
    answer:
      "It's extremely easy! No tools or drilling required. Just hook it over any standard door and you're ready to train.",
  },
  {
    question: "Will it damage my door?",
    answer:
      "No, the Combat Door Gym is designed to be safe for your door and leaves no marks or damage.",
  },
  {
    question: "What kind of workouts can I do?",
    answer:
      "You can perform strength, cardio, resistance, and functional training—all in one compact setup.",
  },
  {
    question: "Is it suitable for beginners?",
    answer:
      "Absolutely! It's perfect for all fitness levels, from beginners to advanced athletes.",
  },
];

const LongArrow = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" y1="4" x2="12" y2="20" />
    <polyline points="6,14 12,20 18,14" />
  </svg>
);

export default function FaqNEW() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="w-full bg-cover bg-center py-16 bg-[#F7F5EF]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-0">

        <div className="space-y-2">
          <p className="text-lg font-medium text-[#14532D]">{title}</p>
          <h5 className="font-semibold text-gray-900 text-3xl md:text-5xl md:leading-[60px]">
            {subtitle}
          </h5>
          <div className="text-lg text-gray-600">
            {description}
          </div>

         
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[50px] transition-all duration-200 bg-transparent"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 rounded-[15px] ${
                  openIndex === index
                    ? "bg-[#14532D] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <LongArrow
                  className={`transition-transform duration-200 transform ${
                    openIndex === index
                      ? "rotate-180 text-white"
                      : "rotate-0 text-black"
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-6 text-gray-600 bg-white rounded-[16px] mt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
