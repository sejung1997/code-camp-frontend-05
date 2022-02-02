import { gql } from "@apollo/client";
import { ChangeEvent } from "react";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`;
export interface IBoardSingUpPageUIProps {
  changeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  inputs: any;
  register: () => void;
  Cancel: () => void;
  isVisible: boolean;
  valid: () => void;
  validMsg: any;
  isValid: boolean;
}
export interface IBoardSignUpPageProps {
  isVisible: boolean;
  Cancel: () => void;
}
