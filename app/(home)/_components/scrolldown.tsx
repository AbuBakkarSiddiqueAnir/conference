"use client";
import clsx from "clsx";
import Image from "next/image";
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
      className="scroll-down  text-body-fixed-2 hidden lg:flex flex-col items-center gap-1 justify-center mt-[14%] ml-[70%] transition-transform  group"
    >
      <span className="vertical-lr"> Scroll Down</span>
      <Image
        className="group-hover:translate-y-2"
        src="/hero/ornamet.svg"
        width={14}
        alt="arrow"
        height={14}
      />
    </button>
  );
}
