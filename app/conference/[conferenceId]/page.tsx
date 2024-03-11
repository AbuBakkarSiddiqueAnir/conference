import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Conference from "./_components/conference";
import Navbar from "@/components/layout/navbar";

type Props = {
  params: {
    conferenceId: string;
  };
};

async function getConference(id: string) {
  const client = new ApolloClient({
    uri: process.env.REACT_CONFERENCE_API_ENDPOINT,
    cache: new InMemoryCache(),
  });
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
    <main className="h-auto w-full">
      <Navbar />
      <Conference conference={conference} />
    </main>
  );
}
