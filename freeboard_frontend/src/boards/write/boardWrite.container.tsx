import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.container.mutation";
import { IBoardListIProps } from "../list/boardList.types";
import { message } from "antd";

export default function Home(props: IBoardListIProps) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [utube, setUtube] = useState("");
  const [Zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isAskVisible, setIsAskVisible] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function changeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function changePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function changeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function changeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }
  function changeUtube(event: ChangeEvent<HTMLInputElement>) {
    setUtube(event.target.value);
  }
  function changeAdress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }
  function changeAdressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

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
  }
  interface Isubmit {
    createBoardInput: IcreateBoardInput;
  }
  interface IboardAddress {
    zipcode: String;
    address: String;
    addressDetail: String;
  }
  const boardAddress: IboardAddress = {
    zipcode: Zonecode,
    address,
    addressDetail,
  };
  const myVariables2: Isubmit = {
    createBoardInput: {
      writer,
      title,
      password,
      contents: content,
      youtubeUrl: utube,
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
      boardAddress?: IboardAdressUp;
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
      password,
    };

    if (title !== "") MyVariables.updateBoardInput.title = title;
    if (content !== "") MyVariables.updateBoardInput.contents = content;
    if (Zonecode !== "" || address !== "" || addressDetail !== "")
      MyVariables.updateBoardInput.boardAddress = {};
    if (Zonecode !== "")
      MyVariables.updateBoardInput.boardAddress.zipcode = Zonecode;
    if (address !== "")
      MyVariables.updateBoardInput.boardAddress.address = address;
    if (addressDetail !== "")
      MyVariables.updateBoardInput.boardAddress.addressDetail = addressDetail;

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
    setZonecode(data?.zonecode);
    setAddress(data?.address);
    showModal();
  };
  const onAsk = () => {
    if (!props.isEdit) {
      if (writer && password && title && content) {
        setIsAskVisible((prev) => !prev);
      } else message.info("모두 입력해주세요");
    } else setIsAskVisible((prev) => !prev);
  };
  return (
    <BoardWriteUI
      changeWriter={changeWriter}
      changePassword={changePassword}
      changeTitle={changeTitle}
      changeContent={changeContent}
      submit={submit}
      isEdit={props.isEdit}
      update={update}
      data={props.data}
      cancel={cancel}
      changeUtube={changeUtube}
      isModalVisible={isModalVisible}
      showModal={showModal}
      onCompletePostcode={onCompletePostcode}
      zonecode={Zonecode}
      address={address}
      changeAdress={changeAdress}
      changeAdressDetail={changeAdressDetail}
      onAsk={onAsk}
      isAskVisible={isAskVisible}
    />
  );
}
