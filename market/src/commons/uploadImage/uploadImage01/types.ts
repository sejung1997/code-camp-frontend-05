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
