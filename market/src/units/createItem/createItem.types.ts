import { ChangeEvent, SetStateAction } from "react";
import { ApolloQueryResult } from "@apollo/client";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";
export interface IBoardUIIProps {
  changeInputs: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  submit: () => void;
  isEdit: boolean;
  update: () => void;
  data: any;
  inputs: any;
  cancel: () => void;
  changeUtube: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalVisible: boolean;
  showModal: () => void;
  onCompletePostcode: (data: any) => void;
  zonecode: any;
  changeAdress: (event: ChangeEvent<HTMLInputElement>) => void;
  changeAdressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  address: any;
  onAsk: () => void;
  isAskVisible: boolean;
  // onSetImgUrl: (data: any, index: number) => void;
  imgUrl: any[];
  setImgUrl: SetStateAction<string>;
}
