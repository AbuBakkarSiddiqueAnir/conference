import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo/logo.svg" alt="Logo" className="h-8 mr-2" />
          <span className="font-semibold">Logo</span>
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="/about-us">About us</Link>
        <Link href="/what-we-do">What we do</Link>
        <Link href="/our-work">Our work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="say-hi">Say hi</Link>
      </nav>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </header>
  );
}
