import React from "react";
import "./test.css";
import clsx from "clsx";
import { formatDate } from "@/utils";
import Link from "next/link";
import { Conference } from "@/types";

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
                className={clsx("container-x ", i % 2 === 0 ? "left" : "right")}
              >
                <div className="date text-gray">
                  {formatDate(conference.startDate)}
                </div>
                <i className="icon fa fa-home"></i>
                <div className="content shadow-card bg-[#F9FAFB]">
                  <Link href={`/conference/${conference.id}`}>
                    <h2>{conference.name}</h2>
                  </Link>
                  <p>{conference.slogan}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
