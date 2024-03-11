"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });

  return (
    <nav className="flex  justify-between items-center py-4 bg-gray-800 max-w-[1320px] mx-auto">
      <div className="flex items-center sm:max-w-[8rem] max-w-[6rem]">
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
      <menu className="lg:flex space-x-14 hidden">
        <Link href="/about-us">About us</Link>
        <Link href="/what-we-do">What we do</Link>
        <Link href="/our-work">Our work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/say-hi">Say hi</Link>
      </menu>
      <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
      <div>
        <button onClick={toggleMobileMenu} className="">
          <Image
            src={"/hamburgar.svg"}
            width={24}
            height={24}
            alt="hamburgar menu"
          />
        </button>
      </div>
    </nav>
  );
}
