import { ChangeEvent } from "react";

export interface IcreateBoardInput {
  writer: String;
  title: String;
  password: String;
  contents: String;
  youtubeUrl?: String;
  boardAddress?: any;
}
export interface Isubmit {
  createBoardInput: IcreateBoardInput;
}
export interface IboardAddress {
  zipcode: String;
  address: String;
  addressDetail: String;
}
export interface IboardAdressUp {
  zipcode?: String;
  address?: String;
  addressDetail?: String;
}
export interface Iupdate {
  title?: String;
  contents?: String;
  boardAddress?: IboardAdressUp;
}
export interface IMyVariables {
  updateBoardInput?: Iupdate;
  boardId: String;
  password: String;
}
export interface IBoardWriteUI {
  submit: () => void;
  isEdit: boolean;
  update: () => void;
  data: any;
  cancel: () => void;
  isModalVisible: boolean;
  showModal: () => void;
  onCompletePostcodeete: () => void;
  onAsk: () => void;
  isAskVisible: boolean;
  inputs: any;
  changeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
}
