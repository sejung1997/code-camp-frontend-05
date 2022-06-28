export interface IUploadImagePage {
  imgUrl: any;
  setImgUrl(fileUrl: any[]);
  index: number;
  isEdit: boolean;
  defaultData: any;
}

export interface IUploadImagePageUI {
  onClickImgBox;
  onChangeFile;
  fileRef: any;
  result: String;
  isEdit: boolean;
  imgUrl: string[];
}
