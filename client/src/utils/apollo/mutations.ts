import { gql } from 'apollo-boost';

// eslint-disable-next-line import/prefer-default-export
export const REGISTER_USER = gql`
    mutation registerUser($username: String!, $password: String!, $repeatPassword: String!, $email: String!) {
        registerUser(username: $username, password: $password, repeatPassword: $repeatPassword, email: $email)
    }
`;
