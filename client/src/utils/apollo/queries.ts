import { gql } from "apollo-boost";

export const GET_USERS = gql`
  {
    getUsers {
      id
      userName
      email
    }
  }
`;
