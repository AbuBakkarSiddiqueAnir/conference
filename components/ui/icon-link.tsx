import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  media: {
    id: string;
    href: string;
    icon: string;
  };
};

export default function IconLink({ media }: Props) {
  return (
    <Link href={media.href}>
      <Image width={20} height={20} src={media.icon} alt={media.href} />
    </Link>
  );
}
