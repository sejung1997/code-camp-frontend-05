import * as li from "./boardDetail.styles";
import { Modal } from "antd";
import BoardWriteContainer from "../boardWrite/boardWrite.container";
export default function boardDetailPage(props) {
  return (
    <>
      {props.isVisible ? (
        <BoardWriteContainer el={props.el} />
      ) : (
        <li.wrapperList>
          <li.header>
            <li.toggleBtn>{props.isHide ? ">" : "v"}</li.toggleBtn>{" "}
            <li.title onClick={props.toggle}>{props.el?.title}</li.title>
            <li.date>{props.el?.createdAt}</li.date>
            <br />
          </li.header>
          <li.detail isHide={props.isHide}>
            <li.contents>{props.el?.contents}</li.contents>
            <li.imgBox>
              <li.img01
                imgUrl={props.el?.images[0]}
                src={`https://storage.googleapis.com/${props.el?.images[0]}`}
              />
              <li.img01
                imgUrl={props.el?.images[1]}
                src={`https://storage.googleapis.com/${props.el?.images[1]}`}
              />
              <li.img01
                imgUrl={props.el?.images[2]}
                src={`https://storage.googleapis.com/${props.el?.images[2]}`}
              />
            </li.imgBox>
            <li.btnGroup>
              <li.btnDelete onClick={props.clickDelete}>삭제</li.btnDelete>
              <li.btnUpdate onClick={props.clickVisible}>수정</li.btnUpdate>
            </li.btnGroup>
          </li.detail>
        </li.wrapperList>
      )}
    </>
  );
}
