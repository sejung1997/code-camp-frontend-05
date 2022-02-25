import CreateItemPresenter from "./createItem.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./createItem.gql";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";

const schema = yup.object().shape({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다"),
  contents: yup.string().required("상세내용은 필수 입력 사항입니다"),
  price: yup.string().required("상품가격은 필수 입력 사항입니다"),
});

export default function createItemContainer(props) {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState(["", "", "", "", "", ""]);
  const [inputs, setInputs] = useState({
    zipcode: "",
    address: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onclickSubmit = async (data) => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags.split("#").slice(1),
            images: imgUrl,
            useditemAddress: {
              zipcode: inputs.zipcode,
              address: inputs.address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      message.info("등록에 성공 했습니다");
      router.push(`/${result.data?.createUseditem?._id}`);
    } catch (error) {
      message.info(error.message);
    }
  };
  const onclickUpdate = async (data) => {
    try {
      console.log(data);
      console.log(router.query.id);

      console.log("수정");
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags.split("#").slice(1),
            images: imgUrl,
          },
          useditemId: router.query.id,
        },
      });
      message.info("수정에 성공 했습니다");
      router.push(`/${result.data?.updateUseditem?._id}`);
    } catch (error) {
      message.info(error.message);
    }
  };
  // console.log(props.defaultData?.fetchUseditem);
  useEffect(() => {
    if (props.isEdit) {
      setImgUrl(props.defaultData?.fetchUseditem?.images);
    }
  }, [props.defaultData]);

  const handleChange = (value) => {
    setValue("contents", value === "<p><br></p)" ? "" : value);
    trigger("contents");
  };
  const onCompletePostcode = (code) => {
    setInputs({ zipcode: code.zonecode, address: code.address });
    setIsModalVisible((prev) => !prev);
  };
  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  const cancel = () => {
    window.history.back();
  };
  return (
    <CreateItemPresenter
      setImgUrl={setImgUrl}
      imgUrl={imgUrl}
      // onAsk={onAsk}
      isEdit={props.isEdit}
      cancel={cancel}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onclickSubmit={onclickSubmit}
      defaultData={props.defaultData}
      onclickUpdate={onclickUpdate}
      handleChange={handleChange}
      onCompletePostcode={onCompletePostcode}
      inputs={inputs}
      showModal={showModal}
      isModalVisible={isModalVisible}
    />
  );
}
