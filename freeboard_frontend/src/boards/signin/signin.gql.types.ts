import { gql } from "@apollo/client";
import { ChangeEvent } from "react";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
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
export interface IBoardSingInPageUIProps {
  changeInputs: (id: String) => (event: ChangeEvent<HTMLInputElement>) => void;
  inputs: any;
  Cancel: () => void;
  isVisible: boolean;
  valid: () => void;
  validMsg: any;
  isValid: boolean;
  logout: () => void;
  acessToken: String;
}
export interface IBoardSignInPageProps {
  isVisible: boolean;
  Cancel: () => void;
}
