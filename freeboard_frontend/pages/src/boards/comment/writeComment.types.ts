import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../src/commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: () => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
}
