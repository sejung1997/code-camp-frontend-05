import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { async } from "@firebase/util";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../scr/commons/types/generated/type";
import { useRouter } from "next/router";
import Password from "antd/lib/input/Password";
import { object } from "yup/lib/locale";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // 서버사이드렌더링 false

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const handleChange = (value: string) => {
    console.log(value);
    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p)" ? "" : value);

    // onChange 됐는지 안됐는지 REACT-HOOK-FORM에 알려주는 기능
    trigger("contents");
  };
  // if (process.browser) {
  //   console.log("브라우져");
  // } else {
  //   console.log("프론트");
  // }
  const onclickSubmit = async (data: IFormValues) => {
    // Object.key => [writer, password, title, contents]
    // Object.values => [각각의 값]
    // if(!Object.values(data).every(el => el))
    if (!(data.writer && data.contents && data.password && data.title)) {
      Modal.warn({ content: "필수입력 사항입니다." });
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            contents: data.contents,
            password: data.password,
            title: data.title,
          },
        },
      });
      router.push(
        `/lecture/2704-web-editor-detail/${result.data?.createBoard._id}`
      );
    } catch (error: any) {
      Modal.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onclickSubmit)}>
      작성자: <input type="test" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <button>등록하기</button>
      <br />
    </form>
  );
}
