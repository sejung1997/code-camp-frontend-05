import { gql } from "@apollo/client";
import styled from "@emotion/styled";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput)
  }
`;

export const Main = styled.div``;
export const topTitle = styled.div``;
export const inputs = styled.div``;
export const id = styled.input``;
export const validBtn = styled.button``;
export const password = styled.input``;
export const validId = styled.div``;
export const validPs = styled.div``;

export const name = styled.input``;
export const number = styled.input``;
export const registerBtn = styled.button``;
