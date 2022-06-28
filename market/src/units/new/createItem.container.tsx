import CreateItemPresenter from "./createItem.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./createItem.gql";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";
import { IUpdateInput } from "./createItem.types";

// const schema = yup.object().shape({
//   name: yup.string().required("상품명은 필수 입력 사항입니다."),
//   remarks: yup.string().required("한줄요약은 필수 입력 사항입니다"),
//   // contents: yup.string().required("상세내용은 필수 입력 사항입니다"),
//   price: yup.string().required("상품가격은 필수 입력 사항입니다"),
// });

export default function createItemContainer(props) {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState(["", "", "", "", "", ""]);
  const [inputs, setInputs] = useState({
    zipcode: "",
    address: "",
  });
  const [tags, setTags] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, setValue, trigger, getValues } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });
  const tagRef = useRef<HTMLInputElement>();
  // const handleChange = (value: string) => {
  //   console.log("value");
  //   setValue("contents", value === "<p><br></p>" ? "" : value);
  //   trigger("contents");
  // };
  const handleChange = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능!!
    trigger("contents");
  };
  const onclickSubmit = async (data) => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: tags,
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
    console.log(props.defaultData?.fetchUseditem._id);

    try {
      // if (data.name || data.remarks || data.price || data.tags)
      //   updateVariables.updateUseditemInput = {};
      const updateInput: IUpdateInput = {};
      if (data.name) updateInput.name = data.name;
      if (data.remarks) updateInput.remarks = data.remarks;
      if (data.contents) updateInput.contents = data.contents;
      if (data.price) updateInput.price = Number(data.price);
      if (tags) updateInput.tags = tags;
      if (props.defaultData?.fetchUseditem?.images !== imgUrl)
        updateInput.images = imgUrl;

      if (data.addressDetail || inputs.zipcode || inputs.address) {
        updateInput.useditemAddress = {};
        if (data.addressDetail)
          updateInput.useditemAddress.addressDetail = data.addressDetail;
        if (inputs.zipcode)
          updateInput.useditemAddress.zipcode = inputs.zipcode;
        if (inputs.address)
          updateInput.useditemAddress.address = inputs.address;
      }
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: updateInput,
          useditemId: props.defaultData?.fetchUseditem?._id,
        },
      });
      message.info("수정에 성공 했습니다");
      router.push(`/${result.data?.updateUseditem?._id}`);
    } catch (error) {
      message.info(error.message);
    }
  };
  useEffect(() => {
    if (props.isEdit) {
      setImgUrl(props.defaultData?.fetchUseditem?.images);
    }
  }, [props.defaultData]);

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

  // const tag = (event: HTMLInputElement) => {
  //   const inputTag = document.getElementById("tagInput") as HTMLInputElement
  //   if (window.event.keyCode === 13) {
  //     // if (tags.length === 0) inputTag.value = null;
  //     const temp = [...tags];
  //     temp.push(event.target.value);

  //     setTags(temp);
  //     inputTag.value = null;
  //     console.log(event.target.value);
  //   }
  // };
  return (
    <CreateItemPresenter
      setImgUrl={setImgUrl}
      imgUrl={imgUrl}
      // onAsk={onAsk}
      isEdit={props.isEdit}
      cancel={cancel}
      register={register}
      handleSubmit={handleSubmit}
      // formState={formState}
      onclickSubmit={onclickSubmit}
      defaultData={props.defaultData}
      onclickUpdate={onclickUpdate}
      handleChange={handleChange}
      contents={getValues("contents")}
      onCompletePostcode={onCompletePostcode}
      inputs={inputs}
      showModal={showModal}
      isModalVisible={isModalVisible}
      // tagRef={tagRef}
    />
  );
}
