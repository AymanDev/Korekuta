import { gql } from 'apollo-boost';

export const GET_USERS = gql`
    query getUsers($username: String) {
        getUsers(username: $username) {
            _id
            username
        }
    }
`;
export const REGISTER_USER = gql`
    mutation registerUser($username: String!, $password: String!, $email: String!) {
        registerUser(username: $username, password: $password, email: $email) {
            username
            email
            password
        }
    }
`;
