import { gql } from "@apollo/client";
import { ChangeEvent, ChangeEventHandler } from "react";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`;
interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
  createdAt?: string;
}
export interface IBoardSingUpPageUIProps {
  changeInputs: (
    id: string
  ) => (
    event: ChangeEvent<HTMLInputElement> | ChangeEventHandler<HTMLSelectElement>
  ) => void;
  inputs: any;
  Cancel: () => void;
  isVisible: boolean;
  userInfo: IUserInfo;
  acessToken?: String;
  data: any;
  valid: () => void;
  validMsg: any;
  isValid: boolean | any;
}
export interface IBoardSignUpPageProps {
  isVisible: boolean;
  Cancel: () => void;
}
export interface IIsValid {
  isValid: Boolean;
}
