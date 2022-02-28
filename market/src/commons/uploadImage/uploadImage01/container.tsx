import { checkFileValidataion } from "../../../commons/validation/index";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { message } from "antd";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef, useEffect } from "react";

import { UPLOAD_FILE } from "./gql";
import UploadImagePageUI from "./preesenter";
import { IUploadImagePage } from "./types";
import { useRouter } from "next/router";

export default function UploadImagePage(props: IUploadImagePage) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileReaderUrl, setFileReaderUrl] = useState("");

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

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setFileReaderUrl(data.target?.result);
      }
    };
    try {
      const result = await uploadFile({ variables: { file } });
      const fileUrl = [...props.imgUrl];

      fileUrl[props.index] = result.data?.uploadFile.url;
      props.setImgUrl(fileUrl);
    } catch (error) {
      // message.info(message);
    }
    console.log(`이미지${props.imgUrl}`);
  };
  // const router = useRouter();
  // useEffect(() => {
  //   if (props.defaultData?.fetchUseditem?.contents) return;
  //   window.location.replace(`/${router.query.id}/edit`);
  // }, []);

  return (
    <UploadImagePageUI
      onClickImgBox={onClickImgBox}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      index={props.index}
      fileReaderUrl={fileReaderUrl}
      imgUrl={props.imgUrl}
      defaultData={props.defaultData}
    />
  );
}
