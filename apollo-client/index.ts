import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_CONFERENCE_API_ENDPOINT,
  cache: new InMemoryCache(),
});
