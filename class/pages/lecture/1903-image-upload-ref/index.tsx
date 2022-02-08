import { gql, useMutation } from "@apollo/client";
import { message } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../scr/commons/types/generated/type";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidataion } from "../../../scr/commons/validation";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const filRef = useRef<HTMLInputElement>(null);

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
  const onClickImage = () => {
    filRef.current?.click();
  };
  return (
    <div>
      <div
        style={{ width: "500px", height: "500px", backgroundColor: "grey" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <img src={`https://storage.googleapis.com/${imgUrl} `} />

      <input
        ref={filRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple
      />
    </div>
  );
}
