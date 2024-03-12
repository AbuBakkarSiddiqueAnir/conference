import IconLink from "@/components/ui/icon-link";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
const socialLinks = [
  {
    id: "twitter",
    href: "",
    icon: "/social/twitter.svg",
  },
  {
    id: "linkedin",
    href: "",
    icon: "/social/linkedin.svg",
  },
  {
    id: "github",
    href: "",
    icon: "/social/github.svg",
  },
  {
    id: "web",
    href: "",
    icon: "/social/web.svg",
  },
];
type Props = {
  socialLinksVisible?: boolean;
  card: {
    image: {
      url: string;
    };
    firstName: string;
    lastName: string;
    about: string;
  };
};

export default function Card({ card, socialLinksVisible }: Props) {
  return (
    <article className=" w-full h-auto gap-x-4 lg:gap-x-8 flex px-4 py-6 bg-white shadow-sm rounded-sm">
      <div className="max-w-[8rem]">
        <Image src={card.image.url} width={140} height={140} alt={card.about} />
      </div>
      <div className="flex w-full justify-center flex-col items-start gap-2">
        <div className="w-full flex justify-between">
          <h3 className="text-[1.1rem] lg:text-[1.5rem]">
            {card.firstName} {card.lastName}
          </h3>
          <ul
            className={clsx(
              "flex gap-x-1 lg:gap-x-3 pr-2 lg:pr-4",
              !socialLinksVisible && "hidden"
            )}
          >
            {socialLinks.map((sl) => (
              <IconLink key={sl.id} media={sl} />
            ))}
          </ul>
        </div>

        <p className="text-body-2">{card.about}</p>
      </div>
    </article>
  );
}
