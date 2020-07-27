import express from "express";
import {
  ApolloServer,
  gql,
  UserInputError,
  ValidationError,
} from "apollo-server-express";
import crypto from "crypto";
import { Types } from "mongoose";
import User from "./models/User";
import Game from './models';

require("dotenv").config();

import("./config");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
  }
  type Game {
    _id: ID!
    name: String
  }

  type Query {
    getUsers(username: String): [User]
    getUser(id: Int): User
    getGame(id: String): Game
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
  }
`;

const getUsers = async (_, { username }) => {
  const query: Record<string, string> = {};
  if (username) {
    query.username = username;
  }
  return User.find(query).select("-password").select("-email").exec();
};
const getUser = async (_, { id }) => User.findOne({ _id: id }).exec();

const registerUser = async (_, { username, email, password }) => {
  const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g;
  if (!emailRegex.test(email)) {
    throw new UserInputError("Email is not valid!", { invalidArgs: "email" });
  }

  if (password.length < 3) {
    throw new ValidationError("Password is too short!");
  }

  const secretKey = process.env.SECRET_KEY;
  const hashedPassword = crypto
    .createHmac("sha256", secretKey)
    .update(password)
    .digest("hex");

  return User.create({ username, email, password: hashedPassword });
};

const getGame = async (_, { id }) => {
  if (!id || typeof id !== "string") {
    throw new ValidationError("Please provide a valid game ID!");
  }

  if (!Types.ObjectId.isValid(id)) {
    return null;
  }

  return Game.findOne({ _id: id }).exec();
};

const resolvers = {
  Query: {
    getUsers,
    getUser,
    getGame,
  },
  Mutation: {
    registerUser,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
