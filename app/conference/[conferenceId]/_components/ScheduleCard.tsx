import { Interval } from "@/types";
import React from "react";

interface Props {
  card: {
    day: string;
    description: string;
    intervals: Interval[];
  };
}

export default function ScheduleCard({ card }: Props) {
  return (
    <article className="px-2 lg:px-6 py-4 bg-white shadow-sm rounded-sm">
      <div className="w-full flex justify-between mb-4">
        <h3 className="text-[1.1rem] lg:text-[1.5rem] font-bold">{card.day}</h3>
        <span className="text-body-2">{card.description}</span>
      </div>
      <div className="flex flex-col gap-y-3 text-[0.8rem] lg:text-[1rem]">
        {card.intervals.map((interval, i) => (
          <div key={i}>
            <h5 className="mb-1">
              Duration : {interval.begin} - {interval.end}
            </h5>
            <ul className="list-disc">
              {interval.sessions.map((ss) => (
                <li
                  className="text-[0.72rem] lg:text-[0.9rem] ml-6 mb-1"
                  key={ss.title}
                >
                  {ss.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
