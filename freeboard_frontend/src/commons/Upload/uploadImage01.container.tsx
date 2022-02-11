import { checkFileValidataion } from "../../commons/validation/index";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../commons/types/generated/types";
import { message } from "antd";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef, useEffect } from "react";

import { UPLOAD_FILE } from "../Upload/uploadImage01.gql.types";
import UploadImagePageUI from "./uploadImage01.presenter";
import { IUploadImagePage } from "./uploadImage01.gql.types";
export default function UploadImagePage(props: IUploadImagePage) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickImgBox = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const isValid = checkFileValidataion(file);
    // console.log(file);

    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      const fileUrl = [...props.imgUrl];
      fileUrl[props.index] = result.data?.uploadFile.url;
      props.setImgUrl(fileUrl);
    } catch (error) {
      // message.info(message);
    }
  };

  return (
    <UploadImagePageUI
      onClickImgBox={onClickImgBox}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      imgUrl={props.imgUrl}
      index={props.index}
    />
  );
}
