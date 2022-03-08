import { gql } from "@apollo/client";
import { ChangeEvent } from "react";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      name
      remarks
      contents
      price
      tags
      createdAt
      images
      _id
      seller {
        name
      }
      pickedCount
    }
  }
`;

export interface IFetchUseditemsPresenter {
  data: any;
  movePage: (id: string) => () => void;
  onLoadMore: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  srchDate: number[];
}
