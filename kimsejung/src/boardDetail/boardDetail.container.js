import BoardDetailPageUI from "./boardDetail.presenter";
import { useState } from "react";
import { DELETE_BOARD } from "./boardDetail.mutaion";
import { useMutation } from "@apollo/client";

export default function boardDetailPage(props) {
  const [isHide, setIsHide] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [ps, setPs] = useState("");

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const toggle = () => {
    setIsHide((prev) => !prev);
  };

  const clickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: props.el?._id },
      });
      props.refetch();
    } catch (error) {
      alert(error.message);
    }
  };
  const clickVisible = () => {
    setIsVisible((prev) => !prev);
  };
  const changePs = (event) => {
    setPs(event.target.value);
  };
  return (
    <BoardDetailPageUI
      clickDelete={clickDelete}
      isHide={isHide}
      clickVisible={clickVisible}
      el={props.el}
      toggle={toggle}
      setPs={setPs}
      changePs={changePs}
      isVisible={isVisible}
    />
  );
}
