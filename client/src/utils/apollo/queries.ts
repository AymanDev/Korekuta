import { gql } from 'apollo-boost';

export const GET_USERS = gql`
    query getUsers($username: String) {
        getUsers(username: $username) {
            _id
            username
        }
    }
`;
export const GET_GAME = gql`
    query getGame($id: String) {
        getGame(id: $id) {
            _id
            name
        }
    }
`;
