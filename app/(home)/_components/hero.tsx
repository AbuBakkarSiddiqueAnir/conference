import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="max-w-[1500px] mx-auto h-screen relative">
      <Navbar />
      <div className="rounded-[25rem] w-[25rem] h-[25rem] opacity-40 bg-[#BE229C] blur-[250px] -z-10 absolute top-0 -right-[20%]">
        dd
      </div>
      <div className=" flex gap-x-[2.29rem] pt-[6.94rem]">
        <div className="w-3/5">
          <h1 className="text-right text-h-huge mb-9">
            {" "}
            <span>React</span> <span>Conference</span>
          </h1>
          <div className="flex">
            <div>
              <Image
                src="/hero/figure-left.png"
                width={400}
                height={496}
                alt="left figure"
              />
            </div>
            <div>
              <p className="max-w-[32rem] mb-16">
                Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
                id fermentum..id fermentum.In quis diam turpis quam id
                fermentum.
              </p>
              <button className="px-[1.5rem] py-[1rem] bg-primary text-body-1 rounded-lg flex justify-center items-center gap-2">
                Buy Tickets
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5001 3.125C17.5001 2.95924 17.4343 2.80027 17.3171 2.68306C17.1999 2.56585 17.0409 2.5 16.8751 2.5H9.37512C9.20936 2.5 9.05039 2.56585 8.93318 2.68306C8.81597 2.80027 8.75012 2.95924 8.75012 3.125C8.75012 3.29076 8.81597 3.44973 8.93318 3.56694C9.05039 3.68415 9.20936 3.75 9.37512 3.75H15.3664L2.68262 16.4325C2.62451 16.4906 2.57842 16.5596 2.54697 16.6355C2.51552 16.7114 2.49933 16.7928 2.49933 16.875C2.49933 16.9572 2.51552 17.0386 2.54697 17.1145C2.57842 17.1904 2.62451 17.2594 2.68262 17.3175C2.74073 17.3756 2.80972 17.4217 2.88564 17.4532C2.96157 17.4846 3.04294 17.5008 3.12512 17.5008C3.2073 17.5008 3.28868 17.4846 3.3646 17.4532C3.44053 17.4217 3.50951 17.3756 3.56762 17.3175L16.2501 4.63375V10.625C16.2501 10.7908 16.316 10.9497 16.4332 11.0669C16.5504 11.1842 16.7094 11.25 16.8751 11.25C17.0409 11.25 17.1999 11.1842 17.3171 11.0669C17.4343 10.9497 17.5001 10.7908 17.5001 10.625V3.125Z"
                    fill="#0A142F"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="">
            <figure className="relative mt-32">
              <Image
                src="/hero/figure-right.png"
                width={540}
                height={546}
                alt="right figure"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
