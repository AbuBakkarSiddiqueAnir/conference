import React from "react";
import "./conferences.css";
import clsx from "clsx";
import { formatDate } from "@/utils";
import Link from "next/link";
import { Conference } from "@/types";
import Image from "next/image";

type Props = {
  conferences: Conference[];
};

export default function Conferences({ conferences }: Props) {
  return (
    <section className="w-full  mt-32">
      <h2 className="text-center text-h-large mb-8">Conferences</h2>
      <div className="max-w-[70rem] mx-auto">
        <div className="timeline space-y-[60px]">
          {conferences.map((conference, i) => {
            return (
              <div
                key={i}
                className={clsx(
                  "container-x rounded-md ",
                  i % 2 === 0 ? "left" : "right"
                )}
              >
                <div className="date text-gray">
                  {formatDate(conference.startDate)}
                </div>
                <div className="content shadow-extended  drop-shadow-extended rounded-md bg-[#F9FAFB] flex gap-4">
                  <div>
                    <Image
                      src={"/Marker.svg"}
                      height={24}
                      width={24}
                      alt="marker"
                    />
                  </div>
                  <div>
                    <Link href={`/conference/${conference.id}`}>
                      <h2>{conference.name}</h2>
                    </Link>
                    <p>{conference.slogan}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
