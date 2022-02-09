import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export interface IUploadImagePage {
  defaultUrl: any;
  imgUrl: any;
  setImgUrl(fileUrl: any[]);
  index: number;
  onSetImgUrl: (data: any, index: number) => void;
}

export interface IUploadImagePageUI {
  onClickImgBox;
  onChangeFile;
  fileRef: any;
  result: String;
}
