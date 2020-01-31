import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const SERVICE_URI = process.env.SERVICE_URI || "http://192.168.99.100:7000";

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    credentials: "include",
    uri: SERVICE_URI + "/graphql"
  })
});

export default client;
