import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <section className="min-h-[70vh] w-full bg-slate-50 flex justify-center items-center">
      <h2 className="text-h-large text-red-400">No Page Found</h2>
    </section>
  );
}
