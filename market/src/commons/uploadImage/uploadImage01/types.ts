export interface IUploadImagePage {
  imgUrl: any;
  setImgUrl(fileUrl: any[]);
  index: number;
  isEdit: boolean;
}

export interface IUploadImagePageUI {
  onClickImgBox;
  onChangeFile;
  fileRef: any;
  result: String;
  isEdit: boolean;
  imgUrl: string[];
}
