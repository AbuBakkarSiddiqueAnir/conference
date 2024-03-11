import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = { isOpen: boolean; setIsOpen: (bool: boolean) => void };

export default function MobileNav({ isOpen, setIsOpen }: Props) {
  return (
    <div
      className={twMerge(
        "fixed z-40 right-0 top-0 left-[5%] bottom-0 bg-[#F8ECF7] flex flex-col items-center md:hidden gap-y-10 transform transition-transform duration-300 ease-in-out transition-x-full",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className=" max-w-[8rem] mt-10">
        <Link href="/">
          <Image
            src="/logo/logo.svg"
            width={120}
            height={60}
            alt="Logo"
            className="h-8 mr-2"
          />
        </Link>
      </div>
      <menu className="flex md:hidden flex-col text-body-1 gap-1">
        <Link
          className="px-3 py-2 bg-yellow-100 max-w-max flex justify-center items-center"
          href="/about-us"
        >
          About us
        </Link>
        <Link
          className="px-3 py-2 bg-yellow-100 max-w-max flex justify-center items-center"
          href="/what-we-do"
        >
          What we do
        </Link>
        <Link
          className="px-3 py-2 bg-yellow-100 max-w-max flex justify-center items-center"
          href="/our-work"
        >
          Our work
        </Link>
        <Link
          className="px-3 py-2 bg-yellow-100 max-w-max flex justify-center items-center"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="px-3 py-2 bg-yellow-100 max-w-max flex justify-center items-center"
          href="say-hi"
        >
          Say hi
        </Link>
      </menu>
    </div>
  );
}
