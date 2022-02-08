import { MouseEvent } from "react";

export interface IHeaerPageUIProps {
  listPage: () => void;
  address: String;
  newPage: () => void;
  registerPage: (event: MouseEvent<HTMLSpanElement>) => void;
  isVisible: any;
  Cancel: () => void;
  homePage: () => void;
  imagePage: () => void;
}
export interface IAddressProps {
  address?: String;
  isVisible?: boolean;
}
