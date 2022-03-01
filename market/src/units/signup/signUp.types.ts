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
export const FETCH_USED_ITEM_ISOLD = gql`
  query createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;
export const FETCH_USED_ITEM_IBOUGHT = gql`
  query createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      createdAt
      userPoint {
        amount
      }
    }
  }
`;
