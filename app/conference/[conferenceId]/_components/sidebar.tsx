import { TailoredConferenceType } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  cf: TailoredConferenceType[];
  handleCurrentTab: (tab: TailoredConferenceType) => void;
  currentTab: TailoredConferenceType;
};

const Sidebar: React.FC<Props> = ({ cf, handleCurrentTab, currentTab }) => {
  // const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize sortables
    return () => {
      // Cleanup if necessary
    };
  }, [cf]);

  return (
    <aside className="w-[25%] min-w-[300px]">
      <ul
        // ref={containerRef}
        className="w-full flex flex-col gap-y-6 max-h-[384px]"
      >
        {cf.map((conference, index) => (
          <li
            key={conference.id}
            className=" h-[72px] list-item border border-[#D9D9D9] text-body-1 rounded-sm"
          >
            <button
              onClick={() => handleCurrentTab(conference)}
              className={clsx(
                "bg-inherit rounded-sm flex gap-x-6 p-2 flex-start w-full h-full items-center",
                conference.id === currentTab.id && "bg-primary"
              )}
            >
              <div className="p-4 rounded-sm bg-white">
                <Image alt="arrow" src="/d-arrow.svg" width={25} height={25} />
              </div>
              {conference.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
