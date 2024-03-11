import React from "react";
import "./conferences.css";
import clsx from "clsx";
import { formatDate } from "@/utils";
import Link from "next/link";
import { ConferenceType } from "@/types";
import Image from "next/image";

type Props = {
  conferences: ConferenceType[];
};

export default function Conferences({ conferences }: Props) {
  return (
    <section className="w-full  mt-32 pb-10 md:pb-24 px-5">
      <h2 className="text-center text-h-large mb-8">Conferences</h2>
      <div className="max-w-[70rem] mx-auto">
        <div className="timeline relative w-full max-w-[1140px]  py-4 px-0 space-y-[60px]">
          {conferences.map((conference, i) => {
            return (
              <div
                key={i}
                className={clsx(
                  "container-timeline px-[30px] relative bg-inherit w-1/2 py-4 rounded-md ",
                  i % 2 === 0 ? "left" : "right"
                )}
              >
                <div className="date text-gray">
                  {formatDate(conference.startDate)}
                </div>
                <div className="content p-2 md:p-7 shadow-extended  drop-shadow-extended rounded-md bg-[#F9FAFB] flex gap-4">
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
