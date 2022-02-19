import CreateItemPresenter from "./createItem.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../../pages/_app";

import { CREATE_USED_ITEM } from "./createItem.gql";
import { useState } from "react";
const schema = yup.object().shape({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다"),
  contents: yup.string().required("상세내용은 필수 입력 사항입니다"),
  price: yup.string().required("상품가격은 필수 입력 사항입니다"),
});
export default function createItemContainer(props) {
  const [imgUrl, setImgUrl] = useState();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const onclickSubmit = (data) => {
    console.log(data);
  };

  return (
    <CreateItemPresenter
      setImgUrl={setImgUrl}
      imgUrl={imgUrl}
      // onAsk={onAsk}
      isEdit={props.isEdit}
      // cancel={cancel}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onclickSubmit={onclickSubmit}
      formState={formState}
    />
  );
}
