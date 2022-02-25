import { ChangeEvent, SetStateAction, Dispatch } from "react";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateProps,
} from "react-hook-form";
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
  imgUrl: string[];
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<any>;
  formState: FormState<FieldValues>;
  onclickSubmit: (data: any) => void;
  defaultData: any;
  onclickUpdate: (data: any) => void;
  handleChange: (value: any) => () => any;
}
