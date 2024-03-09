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
export type Conference = {
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
