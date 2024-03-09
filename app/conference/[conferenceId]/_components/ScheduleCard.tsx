import React from "react";

type Session = {
  begin: string;
  description: string;
  end: string;
  title: string;
};
type Interval = {
  begin: string;
  end: string;
  sessions: Session[];
};
type Props = {
  card: {
    day: string;
    description: string;
    intervals: Interval[];
  };
};

export default function ScheduleCard({ card }: Props) {
  return (
    <article className="px-6 py-4 bg-white shadow-lg">
      <div className="w-full flex justify-between mb-4">
        <h3 className="text-[1.5rem]">{card.day}</h3>
        <span className="text-body-2">{card.description}</span>
      </div>
      <div className="flex flex-col gap-y-3">
        {card.intervals.map((interval, i) => (
          <div key={i}>
            <h5 className="text-body-1 mb-2">
              Duration :{interval.begin}-{interval.end}
            </h5>
            <ol>
              {interval.sessions.map((ss) => (
                <li className="text-[0.9rem] mb-1" key={ss.title}>
                  {ss.title}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </article>
  );
}
