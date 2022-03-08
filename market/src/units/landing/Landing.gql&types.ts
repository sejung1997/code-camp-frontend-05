import { gql } from "@apollo/client";
import { ChangeEvent } from "react";

export const FETCH_USED_ITEMS_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
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
