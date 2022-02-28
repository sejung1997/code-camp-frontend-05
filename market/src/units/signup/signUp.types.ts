import { gql } from "@apollo/client";
export interface FormValues {
  email?: string;
  password?: string;
}

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;
