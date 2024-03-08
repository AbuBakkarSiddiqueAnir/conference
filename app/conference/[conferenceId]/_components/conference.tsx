import { Conference } from "@/types";
import React from "react";

type Props = {
  conference: Conference;
};

export default function Conference({ conference }: Props) {
  return (
    <section className="container py-24">
      <h1 className="text-h-large mb-4">{conference.name}</h1>
      <p className="text-body-3">{conference.slogan}</p>
    </section>
  );
}
