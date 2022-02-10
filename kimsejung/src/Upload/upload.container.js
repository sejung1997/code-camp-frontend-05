import { gql, useMutation } from "@apollo/client";
import UploadPageUI from "./upload.presenter";
import { useRef } from "react";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function boardWriteContainer(props) {
  const fileRef = useRef(null);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickImgBox = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      const fileUrl = [...props.imgUrl];
      fileUrl[props.index] = result.data?.uploadFile?.url;
      props.setImgUrl(fileUrl);
      console.log(props.imgUrl);
    } catch (error) {
      // message.info(message);
    }
  };
  return (
    <UploadPageUI
      onClickImgBox={onClickImgBox}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      index={props.index}
      // defaultUrl={props.defaultUrl}
      // isEdit={props.isEdit}
      imgUrl={props.imgUrl}
      data={props.data}
    />
  );
}
