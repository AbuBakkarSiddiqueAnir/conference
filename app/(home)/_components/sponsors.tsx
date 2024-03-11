import React from "react";
import Row from "./row";

type Props = {};

export type Sponsor = {
  alt: string;
  thumbnail: string;
};

export default function Sponsors({}: Props) {
  return (
    <section className="w-full h-auto py-24 bg-gray/10">
      <h2 className="text-center text-h-large mb-8">Our Sponsors</h2>
      <div className="w-full">
        <Row
          title={"🥇 Gold Sponsor"}
          sponsors={[
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/8.png",
            },
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/2.png",
            },
          ]}
        />
        <Row
          title={"🥈Silver Sponsors"}
          sponsors={[
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/3.png",
            },
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/4.png",
            },
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/5.png",
            },
          ]}
        />
        <Row
          title={"🥉Bronze Sponsors"}
          sponsors={[
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/3.png",
            },
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/6.png",
            },
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/7.png",
            },
            {
              alt: "sponsor...",
              thumbnail: "/sponsors/8.png",
            },
          ]}
        />
      </div>
    </section>
  );
}
