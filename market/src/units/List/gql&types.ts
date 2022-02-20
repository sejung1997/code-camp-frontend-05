import { gql } from "@apollo/client";

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
    }
  }
`;
