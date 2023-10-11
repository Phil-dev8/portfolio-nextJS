"use client";
import React from "react";
import { useState } from "react";

function CVSVG() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <svg
      width="130px"
      height="130px"
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="M13 9l2 6 2-6m-7 6c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C7 13.398 7 12.932 7 12c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C8.602 9 9.068 9 10 9M7.2 20h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C20 18.48 20 17.92 20 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C5.52 20 6.08 20 7.2 20z"
        stroke={isHovered ? "#00bbc2" : "#ff9200"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CVSVG;
