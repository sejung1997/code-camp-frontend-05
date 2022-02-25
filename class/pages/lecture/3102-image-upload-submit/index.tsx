import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../scr/commons/types/generated/type";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;
export default function ImageUploadSubmitPage() {
  const [file1, setFile1] = useState<File>();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // files가 있다면?
    console.log(file);
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // 받은 데이터
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      if (typeof data.target?.result === "string")
        setImageUrl(data.target?.result || "");
      setFile1(file);
    };
  };
  const onClickSubmit = async () => {
    // 1. image 업로드 해서 url 받아오기 (uploadFile())

    const result = await uploadFile({
      variables: {
        file: file1,
      },
    });
    const imageUrl = result.data?.uploadFile.url || "";
    // 2. createBoard로 게시물 등록하기
    //
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철 수",
          title: "ㅎ ㅇ",
          password: "1234",
          contents: "이미지 업로드",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
