import { MouseEvent } from "react";

export interface IHeaerPageUIProps {
  l: () => void;
  address: String;
  n: () => void;
  r: (event: MouseEvent<HTMLSpanElement>) => void;
  isVisible: any;
  Cancel: () => void;
  h: () => void;
}
export interface IAddressProps {
  address?: String;
  isVisible?: boolean;
}
