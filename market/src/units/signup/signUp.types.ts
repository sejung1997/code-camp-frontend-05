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
export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
    }
  }
`;
export const FETCH_USED_ITEM_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      name
      contents
      price
      _id
    }
  }
`;
export const FETCH_USED_ITEM_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      name
      _id
      contents
      price
    }
  }
`;
export const FETCH_POINT_TRANSACTION = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      impUid
      balance
      amount
      useditem {
        name
        price
      }
    }
  }
`;
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      createdAt
      userPoint {
        amount
      }
    }
  }
`;
