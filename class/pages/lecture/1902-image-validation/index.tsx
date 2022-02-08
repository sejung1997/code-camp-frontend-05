import { gql, useMutation } from "@apollo/client";
import { message } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../scr/commons/types/generated/type";
import { ChangeEvent, useState } from "react";
import { checkFileValidataion } from "../../../scr/commons/validation";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidataion(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      message.info(message);
    }
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} multiple />
      <img src={`https://storage.googleapis.com/${imgUrl} `} />
    </div>
  );
}
