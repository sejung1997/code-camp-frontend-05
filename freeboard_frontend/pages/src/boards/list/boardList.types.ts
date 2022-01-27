import { ChangeEvent } from "react";

export interface IBoardUIIProps {
  changeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  changeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  submit: () => void;
  erroWriter: String;
  erroPassword: String;
  erroTitle: String;
  erroContent: String;
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
  checkDelete: () => void;
}

export interface IBoardListIProps {
  a?: any;
  register?: () => void;
  isEdit?: boolean;
  data?: any;
  detailPage: (arg0: any) => void;
  searchClick: () => void;
}
export interface IstlesIprops {
  ggg: boolean;
}
