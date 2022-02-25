import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      createdAt
    }
  }
`;
