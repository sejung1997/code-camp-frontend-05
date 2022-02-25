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
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
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
        if (typeof data.target?.result === "string") {
          const tempurls = [...imageUrls];
          tempurls[number] = data.target?.result;
          setImageUrls(tempurls);

          const tempFiles = [...files];
          tempFiles[number] = file;

          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    // 각각 보내기 연습
    // const start1 = performance.now();

    // await uploadFile({
    //   variables: {
    //     file: files[0],
    //   },
    // });
    // await uploadFile({
    //   variables: {
    //     file: files[1],
    //   },
    // });
    // await uploadFile({
    //   variables: {
    //     file: files[2],
    //   },
    // });

    // const end1 = performance.now();
    // console.log(end1 - start1);

    // 1. image 업로드 해서 url 받아오기 (uploadFile())
    const start = performance.now();

    const results = await Promise.all(
      files?.map(
        (el: any) =>
          el &&
          uploadFile({
            variables: {
              file: el,
            },
          })
      )
    );

    console.log(results);
    const resultUrls = results.map((el) =>
      el.data ? el.data?.uploadFile.url : ""
    );
    console.log(resultUrls);

    const end = performance.now();
    console.log(end - start);

    // 2. createBoard로 게시물 등록하기

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철 수",
          title: "ㅎ ㅇ",
          password: "1234",
          contents: "이미지 업로드",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
