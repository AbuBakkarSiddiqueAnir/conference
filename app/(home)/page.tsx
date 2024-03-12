import Conferences from "./_components/conferences";
import Hero from "./_components/hero";
import { gql } from "@apollo/client";
import Sponsors from "./_components/sponsors";
import { client } from "@/apollo-client";

async function getConferences() {
  const { data } = await client.query({
    query: gql`
      query {
        allConferences {
          id
          name
          startDate
          endDate
          slogan
        }
      }
    `,
  });

  return data.allConferences;
}

export default async function Home() {
  return (
    <main className="h-auto w-full">
      <Hero />
      <Conferences conferences={await getConferences()} />
      <Sponsors />
    </main>
  );
}
