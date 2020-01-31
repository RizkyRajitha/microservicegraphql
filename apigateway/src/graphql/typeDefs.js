import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

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

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
  }

  type Query {
    listings: [Listing!]!
    users: [User!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
