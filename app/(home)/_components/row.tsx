import Image from "next/image";
import React from "react";
import { Sponsor } from "./sponsors";

type Props = {
  title: string;
  sponsors: Sponsor[];
};

export default function Row({ sponsors, title }: Props) {
  return (
    <div className="flex flex-col gap-8 mb-14 max-w-max mx-auto ">
      <span className="text-body-fixed-2 text-center">{title}</span>

      <div className="flex flex-wrap justify-center gap-10 md:gap-14">
        {sponsors.map((sponsor, index) => (
          <div
            className="md:max-h-[65px] max-h-[32px] md:max-w-[270px] max-w-[130px]"
            key={index}
          >
            <Image src={sponsor.thumbnail} width={217} height={65} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
