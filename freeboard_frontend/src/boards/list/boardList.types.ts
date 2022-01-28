import { ChangeEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";

export interface IBoardUIIProps {
  changeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  changeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  submit: () => void;
  isEdit: boolean;
  update: () => void;
  data: any;
  cancel: () => void;
  changeUtube: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalVisible: boolean;
  showModal: () => void;
  onCompletePostcode: (data: any) => void;
  zonecode: any;
  changeAdress: (event: ChangeEvent<HTMLInputElement>) => void;
  changeAdressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  address: any;
}

export interface IBoardListIProps {
  a?: any;
  register?: () => void;
  isEdit?: boolean;
  data?: any;
  detailPage: (arg0: any) => void;
  searchClick: () => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count: number;
}
export interface IstlesIprops {
  ggg: boolean;
}
