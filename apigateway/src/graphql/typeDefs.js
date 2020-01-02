import { gql } from "apollo-server";

const typeDefs = gql`
  type Listing {
    description: String!
    id: ID!
    title: String!
  }

  type User {
    name: String!
    id: ID!
    email: String!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }

  type Query {
    listings: [Listing!]!
    users: [User!]!
  }
`;

export default typeDefs;
