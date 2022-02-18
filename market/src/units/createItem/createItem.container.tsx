import CreateItemPresenter from "./createItem.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../../pages/_app";

import { CREATE_USED_ITEM } from "./createItem.gql";
const schema = yup.object().shape({
  name: yup
    .string()
    .required("이름은 필수 입력 사항입니다."),
  password1: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
  password2: yup

    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
});
export default function createItemContainer() {
  return <CreateItemPresenter />;
}
