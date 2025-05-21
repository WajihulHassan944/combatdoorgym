import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant?: "dark" | "light";
  onClick?: () => void;
  href?: string;
  className?: string;
  align?: "left" | "center" | "right";
  scrollToProduct?: boolean; // New prop to control scrolling behavior
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = "dark", 
  onClick, 
  href, 
  className = "",
  align = "left",
  scrollToProduct = false // Default to false
}) => {
  // Function to scroll to the product section
  const handleScrollToProduct = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Call the original onClick handler if it exists
    if (onClick) onClick();
  };

  // The button content that will be consistent regardless of whether it's a link or button
  const buttonContent = (
    <div id="custom-wrapper" className={`${className} ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}>
      <div className={` ${variant === "dark" ? "" : ""}`}>
        <div
          className={`custom-btn relative inline-flex items-center gap-8 px-6 py-4 rounded-full ${
            variant === "dark" ? "bg-[#154633]" : "bg-[#95C11F]"
          } transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)]`}
        >
          <span className="text-white font-semibold text-sm md:text-base z-[5]">
            {text}
          </span>
          <svg
            className="w-4 h-4 flex-none"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66669 11.3334L11.3334 4.66669"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66669 4.66669H11.3334V11.3334"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  // If scrollToProduct is true, override the behavior to scroll instead of navigation
  if (scrollToProduct) {
    return (
      <button onClick={handleScrollToProduct} className="inline-block cursor-pointer">
        {buttonContent}
      </button>
    );
  }

  // Regular behavior: Link or Button based on href
  if (href) {
    return (
      <Link href={href} className="inline-block cursor-pointer">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block cursor-pointer">
      {buttonContent}
    </button>
  );
};

export default Button;
