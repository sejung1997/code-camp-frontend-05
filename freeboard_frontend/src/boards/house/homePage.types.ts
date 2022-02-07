import { MouseEvent } from "react";
export interface IHomePageUI {
  settings: any;
  todayData: any;
  setDate: (event: MouseEvent<HTMLImageElement>) => void;
}
