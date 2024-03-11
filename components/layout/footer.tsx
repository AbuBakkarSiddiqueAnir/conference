import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full py-16 bg-secondary">
      <div className="mx-auto max-w-[20rem] flex flex-col items-center">
        <Image alt="logo" src="/logo/logo-footer.png" width={175} height={48} />
        <ul className="flex gap-x-8 mt-20 mb-5">
          <Link href={""}>
            <Image
              src="/social/footer/twitter.svg"
              alt=""
              width={24}
              height={24}
            />
          </Link>
          <Link href={""}>
            <Image
              src="/social/footer/linkedin.svg"
              alt=""
              width={24}
              height={24}
            />
          </Link>
          <Link href={""}>
            <Image
              src="/social/footer/facebook.svg"
              alt=""
              width={24}
              height={24}
            />
          </Link>
          <Link href={""}>
            <Image src="/social/footer/web.svg" alt="" width={24} height={24} />
          </Link>
        </ul>
        <p className="text-body-fixed-2 text-center text-white">
          © 2023 Lemonhive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
