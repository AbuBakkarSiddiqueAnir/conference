import React from "react";
import { gql } from "@apollo/client";
import Conference from "./_components/conference";
import Navbar from "@/components/layout/navbar";
import { client } from "@/apollo-client";

type Props = {
  params: {
    conferenceId: string;
  };
};

async function getConference(id: string) {
  const { data } = await client.query({
    query: gql`
      query {
        conference(id: "${id}") {
          id
          name
          slogan
          organizer {
            firstName
            lastName
            about
            tagline
            image {
              url
            }
          }
          speakers {
            firstName
            lastName
            image {
              title
              url
            }
            about
            tagline
            social{
              twitter
              github
              linkedin
              homepage
            }
          }
          sponsors {
            firstName
            lastName
            about
            image {
              url
            }
          }
          schedules {
            day
            location {
              name
              about
              city
              address
            }
            description
            intervals {
              title
              drawing
              begin
              end
              title
              sessions{
                title
                description
                begin
                end
              }
            }
          }
        }
      }
    `,
  });

  return data.conference;
}

export default async function page({ params }: Props) {
  const conference = await getConference(params.conferenceId);
  return (
    <main className="h-auto w-full px-5">
      <Navbar />
      <Conference conference={conference} />
    </main>
  );
}
