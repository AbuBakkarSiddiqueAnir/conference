"use client";

import { ConferenceType, TailoredConferenceType } from "@/types";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import ScheduleCard from "./ScheduleCard";
import Sidebar from "./sidebar";

type Props = {
  conference: ConferenceType;
};

export default function Conference({ conference }: Props) {
  const [currentTab, setCurrentTab] = useState<TailoredConferenceType>();

  const cf: TailoredConferenceType[] = [
    {
      id: "organizer",
      name: "Organizer",
      component: <Card card={conference.organizer} />,
    },
    {
      id: "speakers",
      name: "Speakers",
      component: conference.speakers.map((con, i) => (
        <Card socialLinksVisible key={i} card={con} />
      )),
    },
    {
      id: "schedule",
      name: "Schedule",
      component: conference.schedules.map((sche, i) => (
        <ScheduleCard key={i} card={sche} />
      )),
    },
    {
      id: "sponsors",
      name: "Sponsors",
      component: conference.sponsors.map((spon, i) => (
        <Card key={i} card={spon} />
      )),
    },
  ];

  const handleCurrentTab = (tab: TailoredConferenceType) => setCurrentTab(tab);

  useEffect(() => {
    setCurrentTab(cf[0]);
  }, []);
  return (
    <section className="container py-12 md:py-24">
      <h1 className="text-h-large mb-4">{conference.name}</h1>
      <p className="text-body-3">{conference.slogan}</p>
      <div className="w-full flex md:flex-row flex-col gap-x-12 mt-[52px]">
        {currentTab && (
          <Sidebar
            currentTab={currentTab}
            cf={cf}
            handleCurrentTab={handleCurrentTab}
          />
        )}

        <div className="w-full md:w-[75%] bg-dart-gray flex flex-col gap-6 px-3 lg:px-10 py-10 max-h-[32rem] overflow-y-auto">
          {currentTab && currentTab.component}
        </div>
      </div>
    </section>
  );
}
