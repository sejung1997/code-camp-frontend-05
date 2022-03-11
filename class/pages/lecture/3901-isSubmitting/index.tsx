import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../scr/commons/types/generated/type";
import { useRouter } from "next/router";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // 서버사이드렌더링 false

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const handleChange = (value: string) => {};

  const onclickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: "writer",
            contents: "contents",
            password: "password",
            title: "title",
          },
        },
      });
      console.log(result);
      setIsSubmitting(false);
    } catch (error: any) {
      Modal.error(error.message);
    }
  };
  return (
    <form>
      작성자: <input type="test" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <button onClick={onclickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
      <br />
    </form>
  );
}
