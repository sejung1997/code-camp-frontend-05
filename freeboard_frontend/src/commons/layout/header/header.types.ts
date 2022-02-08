import { MouseEvent } from "react";

export interface IHeaerPageUIProps {
  moveListPage: () => void;
  address: String;
  newPage: () => void;
  moveRegisterPage: (event: MouseEvent<HTMLSpanElement>) => void;
  isVisible: any;
  Cancel: () => void;
  moveHomePage: () => void;
  moveImagePage: () => void;
  userData: any;
  setUserData: () => void;
  moveFirePage: () => void;
}
export interface IAddressProps {
  address?: String;
  isVisible?: boolean;
}
