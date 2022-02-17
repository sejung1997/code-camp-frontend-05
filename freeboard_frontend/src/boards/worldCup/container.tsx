import { useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import BoardWriteUI from "./presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.container.mutation";

import { IBoardListIProps } from "../list/boardList.types";
import { message } from "antd";
export default function Home(props: IBoardListIProps) {
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
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function changeInputs(event: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  }

  // const onSetImgUrl = (data, index) => {
  //   const fileUrl = [...imgUrls];
  //   fileUrl[index] = data;zzz
  //   setImgUrls(fileUrl);
  // };
  async function submit() {
    try {
      const result = await createBoard({
        variables: myVariables2,
      });
      console.log(result.data.createBoard);

      const id = result.data.createBoard._id;
      message.info("등록이 완료되었습니다");

      router.push(`/${id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  interface IcreateBoardInput {
    writer: String;
    title: String;
    password: String;
    contents: String;
    youtubeUrl?: String;
    boardAddress?: any;
    images?: any[];
  }
  interface Isubmit {
    createBoardInput: IcreateBoardInput;
  }
  interface IboardAddress {
    zipcode?: String;
    address?: String;
    addressDetail?: String;
  }
  const boardAddress: IboardAddress = {
    zipcode: inputs.Zonecode,
    address: inputs.address,
    addressDetail: inputs.addressDetail,
  };
  const myVariables2: Isubmit = {
    createBoardInput: {
      writer: inputs.writer,
      title: inputs.title,
      password: inputs.password,
      contents: inputs.contents,
      youtubeUrl: inputs.utube,
      images: imgUrl,
      boardAddress,
    },
  };

  const update = async () => {
    interface IboardAdressUp {
      zipcode?: String;
      address?: String;
      addressDetail?: String;
    }
    interface Iupdate {
      title?: String;
      contents?: String;
      images?: any[];
      boardAddress?: IboardAdressUp;
      youtubeUrl?: String;
    }
    interface IMyVariables {
      updateBoardInput?: Iupdate;
      boardId: String;
      password: String;
    }

    const updateBoardInput: Iupdate = {};
    const MyVariables: IMyVariables = {
      updateBoardInput,
      boardId: String(router.query.aaa),
      password: inputs.password,
    };

    if (inputs.title !== "") MyVariables.updateBoardInput.title = inputs.title;
    if (inputs.contents !== "")
      MyVariables.updateBoardInput.contents = inputs.contents;
    if (
      inputs.Zonecode !== "" ||
      inputs.address !== "" ||
      inputs.addressDetail !== ""
    )
      MyVariables.updateBoardInput.boardAddress = {};
    if (inputs.Zonecode !== "")
      MyVariables.updateBoardInput.boardAddress.zipcode = inputs.Zonecode;
    if (inputs.address !== "")
      MyVariables.updateBoardInput.boardAddress.address = inputs.address;
    if (inputs.addressDetail !== "")
      MyVariables.updateBoardInput.boardAddress.addressDetail =
        inputs.addressDetail;
    if (props.data?.fetchBoard?.images !== imgUrl)
      MyVariables.updateBoardInput.images = imgUrl;
    if (inputs.utube) MyVariables.updateBoardInput.youtubeUrl = inputs.utube;
    try {
      const result2 = await updateBoard({
        variables: MyVariables,
      });
      const id2 = result2.data.updateBoard._id;
      router.push(`/${id2}`);
      message.info("수정이 완료되었습니다");
    } catch (error) {
      alert(error.message);
    }
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
    if (!props.isEdit) {
      if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
        setIsAskVisible((prev) => !prev);
      } else message.info("모두 입력해주세요");
    } else setIsAskVisible((prev) => !prev);
  };
  useEffect(() => {
    if (props.data?.fetchBoard?.images)
      setImgUrl([...props.data?.fetchBoard?.images]);
  }, [props.data]);
  return (
    <BoardWriteUI
      submit={submit}
      isEdit={props.isEdit}
      update={update}
      data={props.data}
      cancel={cancel}
      isModalVisible={isModalVisible}
      showModal={showModal}
      onCompletePostcode={onCompletePostcode}
      onAsk={onAsk}
      isAskVisible={isAskVisible}
      inputs={inputs}
      changeInputs={changeInputs}
      imgUrl={imgUrl}
      // onSetImgUrl={onSetImgUrl(data,index)}
      setImgUrl={setImgUrl}
    />
  );
}
