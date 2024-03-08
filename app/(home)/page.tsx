import Conferences from "./_components/conferences";
import Hero from "./_components/hero";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

async function getConferences() {
  const client = new ApolloClient({
    uri: process.env.REACT_CONFERENCE_API_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        allConferences {
          id
          name
          startDate
          endDate
          organizers {
            firstName
            lastName
            image {
              url
              style {
                backgroundSize
              }
              url
            }
            location {
              name
              about
              social {
                homepage
              }
              country {
                code
              }
            }
          }
          sponsors {
            name
            company
            image {
              url
            }
          }
          partners {
            firstName
            lastName
            name
            about
            image {
              url
            }
          }
        }
      }
    `,
  });

  return data.allConferences;
}

export default async function Home() {
  const conferences = await getConferences();
  console.log(conferences);
  return (
    <main className="h-auto w-full">
      <Hero />
      <Conferences />
    </main>
  );
}
