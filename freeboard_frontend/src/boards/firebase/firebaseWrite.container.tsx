import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import FirebaseWriteUI from "./firebaseWrite.presenter";
import { IBoardListIProps } from "../list/boardList.types";
import { message } from "antd";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { fireApp } from "../../../pages/_app";

export default function FirebaseWritePage(props: IBoardListIProps) {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    utube: "",
    Zonecode: "",
    address: "",
    addressDetail: "",
  });
  const [isAskVisible, setIsAskVisible] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  function changeInputs(event: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  }
  const submit = async () => {
    // console.log(inputs);
    const board = collection(getFirestore(fireApp), "board");
    await addDoc(board, {
      writer: inputs.writer,
      title: inputs.title,
      contents: inputs.contents,
      utube: inputs.utube,
      Zonecode: inputs.Zonecode,
      address: inputs.address,
      addressDetai: inputs.addressDetail,
    });
    alert("게시물 등록에 성공하였습니다!");
  };

  const cancel = () => {
    window.history.back();
  };
  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  const onCompletePostcode = (data) => {
    setInputs({ ...inputs, Zonecode: data?.zonecode, address: data?.address });

    showModal();
  };
  const onAsk = () => {
    setIsAskVisible((prev) => !prev);
  };
  return (
    <FirebaseWriteUI
      cancel={cancel}
      submit={submit}
      isModalVisible={isModalVisible}
      showModal={showModal}
      onCompletePostcode={onCompletePostcode}
      onAsk={onAsk}
      isAskVisible={isAskVisible}
      inputs={inputs}
      changeInputs={changeInputs}
    />
  );
}
