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
export interface IBoardSingInPageUIProps {
  changeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  inputs: any;
  register: () => void;
  Cancel: () => void;
  isVisible: boolean;
  valid: () => void;
  validMsg: any;
  isValid: boolean;
}
export interface IBoardSignInPageProps {
  isVisible: boolean;
  Cancel: () => void;
}
