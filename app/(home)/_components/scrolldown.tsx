"use client";
import React from "react";

type Props = {};

export default function ScrollDown({}: Props) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollDown}
      className="scroll-down text-body-fixed-2 flex flex-col items-center gap-1 justify-center pt-[14%] pl-[70%]"
    >
      <span className="vertical-lr"> Scroll Down</span>

      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Ornament 43">
          <path
            d="M0.0316157 0.938778L8.31383 15.284L16.596 0.938778L15.5706 0.938777L8.31383 13.5079L1.05704 0.938777L0.0316157 0.938778Z"
            fill="#0A142F"
          />
          <path
            d="M2.26397 0.938778L8.31383 11.4174L14.3637 0.938777L2.26397 0.938778Z"
            fill="#0A142F"
          />
        </g>
      </svg>
    </button>
  );
}
