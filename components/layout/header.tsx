import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex  justify-between items-center py-4 bg-gray-800 container">
      <div className="flex items-center">
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
      <nav className="flex space-x-14">
        <Link href="/about-us">About us</Link>
        <Link href="/what-we-do">What we do</Link>
        <Link href="/our-work">Our work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="say-hi">Say hi</Link>
      </nav>
      <div>
        <button className="">Button</button>
      </div>
    </header>
  );
}
