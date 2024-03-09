"use client";

import { Conference } from "@/types";
import React, { useState } from "react";
import Card from "./Card";
import ScheduleCard from "./ScheduleCard";

type Props = {
  conference: Conference;
};

export default function Conference({ conference }: Props) {
  const cf = [
    {
      id: "organizer",
      name: "Organizer",
      compoent: <Card card={conference.organizer} />,
    },
    {
      id: "speakers",
      name: "Speakers",
      compoent: conference.speakers.map((con, i) => (
        <Card key={i} card={con} />
      )),
    },
    {
      id: "schedule",
      name: "Schedule",
      compoent: conference.schedules.map((sche, i) => (
        <ScheduleCard key={i} card={sche} />
      )),
    },
    {
      id: "sponsors",
      name: "Sponsors",
      compoent: conference.sponsors.map((spon, i) => (
        <Card key={i} card={spon} />
      )),
    },
  ];
  const [currentTab, setCurrentTab] = useState(cf[2]);
  console.log(conference);

  return (
    <section className="container py-24">
      <h1 className="text-h-large mb-4">{conference.name}</h1>
      <p className="text-body-3">{conference.slogan}</p>
      <div className="w-full flex">
        <aside className="w-[365px]">s</aside>
        <div className="w-full bg-dart-gray flex flex-col gap-6 px-10 py-10 max-h-[32rem] overflow-y-auto">
          {currentTab.compoent}
        </div>
      </div>
    </section>
  );
}
