"use client";

import Image from "next/image";
import arrowDiagonal from "../../public/images/SVG/arrow-diagonal-portfolio.svg";

const ArrowDiagonalButton = ({ 
  onClick, 
  className = "", 
  variant = "white", // "white" for white bg with black arrow, "black" for black bg with white arrow
  position = "absolute" // "absolute" or "relative"
}) => {
  const baseClasses = `${position} p-5 shrink-0 w-[55px] h-[55px] flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300`;
  
  const variantClasses = variant === "black" 
    ? "bg-primary-black" 
    : "bg-primary-white";
  
  // For black variant, invert the arrow to white using CSS filter
  const iconStyle = variant === "black" 
    ? { filter: "brightness(0) invert(1)" }
    : {};

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <Image 
        src={arrowDiagonal} 
        alt="arrow button"
        style={iconStyle}
        className="w-full h-full"
      />
    </button>
  );
};

export default ArrowDiagonalButton;

