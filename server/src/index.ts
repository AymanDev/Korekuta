import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { User } from "./models";

import("./config");

const typeDefs = gql`
  type User {
    id: ID!
    userName: String
    email: String
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    addUser(userName: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => await User.find({}).exec()
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        return await User.create(args);
      } catch (e) {
        return e.message;
      }
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
