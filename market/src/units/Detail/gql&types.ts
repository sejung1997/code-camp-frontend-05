import { gql } from "@apollo/client";
import { MouseEventHandler } from "react";
export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      _id
      tags
      createdAt
      images
      pickedCount
      seller {
        name
      }
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
export const FETCH_USED_ITEMS_IPICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      name
      contents
      price
      _id
      seller {
        name
      }
    }
  }
`;
export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      name
      seller {
        name
      }
    }
  }
`;
interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
  createdAt?: string;
}
export interface IFetchItemPresenter {
  data: any;
  userInfo: IUserInfo;
  movePage: (id: string) => () => void;
  deleteBtn: () => void;
  pickUp: () => void;
}
