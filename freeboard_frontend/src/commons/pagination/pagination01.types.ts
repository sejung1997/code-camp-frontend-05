import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";

export interface IPaginationUI {
  index?: any;
  startPage: number;
  curPage: number;
  lastPage: number;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onclickPage: (event: MouseEvent<HTMLSpanElement>) => void;
}

export interface IPagination01 {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count: number;
}
