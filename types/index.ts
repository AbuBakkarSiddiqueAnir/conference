import { ReactNode } from "react";

type Speaker = {
  __typename: string;
  firstName: string;
  lastName: string;
  image: {
    url: string;
  };
  about: string;
};

type Sponsor = {
  __typename: string;
  firstName: string;
  lastName: string;
  about: string;
  image: {
    url: string;
  };
};
type Schedule = {
  __typeName: string;
  day: string;
  location: {};
  description: string;
  intervals: [];
};

export type TailoredConferenceType = {
  id: string;
  name: string;
  component: ReactNode;
};

export type ConferenceType = {
  id: string;
  name: string;
  _typename: string;
  startDate: string;
  slogan: string;
  organizer: {
    __typename: string;
    firstName: string;
    lastName: string;
    about: string;
    image: {
      url: string;
    };
  };
  speakers: Speaker[];
  sponsors: Sponsor[];
  schedules: Schedule[];
};
export interface ItemRef {
  current: HTMLDivElement | null;
}

export interface Item {
  index: number;
  dom: HTMLDivElement;
  left: number;
  top: number;
  width: number;
  height: number;
  x: number;
  y: number;
  dragged: boolean;
}
