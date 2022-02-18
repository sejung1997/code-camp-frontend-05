import { Modal } from "antd";
import UploadImagePage from "../../../commons/Upload/uploadImage01.container";
import { IBoardUIIProps } from "../list/boardList.types";
import * as A from "./boardWrite.styles";
import Input02 from "../../commons/inputs/input02";

export default function CreateItemPresenter() {
  return (
    <>
      <A.Main>
        <A.TopTitle>상품 {props.isEdit ? "수정" : "등록"}</A.TopTitle>
        <A.WritterWrapper>
          <A.OptionWrapper>
            <A.Title>작성자</A.Title>
            <Input02 />
          </A.OptionWrapper>

          <A.OptionWrapper>
            <A.Title>설명</A.Title>
            <Input02 />
          </A.OptionWrapper>
          <A.OptionWrapper>
            <A.Title>내용</A.Title>
            <Input02 />
          </A.OptionWrapper>
          <A.OptionWrapper>
            <A.Title>가격</A.Title>
            <Input02 />
          </A.OptionWrapper>
          <A.OptionWrapper>
            <A.Title>태그</A.Title>
            <Input02 />
          </A.OptionWrapper>
          <A.OptionWrapper>
            <A.Title>가격</A.Title>
            <Input02 />
          </A.OptionWrapper>

          <A.OptionWrapper>
            <A.Title>주소</A.Title>
            <Input02 />
          </A.OptionWrapper>
        </A.WritterWrapper>
        <A.OptionWrapper>
          <A.Title>사진 첨부</A.Title>
          <A.BoxGroup>
            {new Array(3).fill(1).map((_, index) => (
              <UploadImagePage
                key={index}
                index={index}
                imgUrl={props.imgUrl}
                setImgUrl={props.setImgUrl}
                isEdit={props.isEdit}
              />
            ))}
          </A.BoxGroup>
        </A.OptionWrapper>
        <A.OptionWrapper></A.OptionWrapper>

        <A.OptionWrapper>
          <A.Title>메인 설정</A.Title>
          <A.InputMain type="radio" name="main" />
          <A.Youtube>유트브</A.Youtube>
          <A.InputMain type="radio" name="main" />
          <A.Youtube>사진</A.Youtube>
        </A.OptionWrapper>

        <A.BottomButton>
          <A.BottomSubmit onClick={props.onAsk}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </A.BottomSubmit>
          <A.BottomCancel onClick={props.cancel}>취소하기</A.BottomCancel>
          {props.isAskVisible && (
            <Modal
              title="확인 메세지"
              visible={true}
              onOk={props.isEdit ? props.update : props.submit}
              onCancel={props.onAsk}
            >
              {props.isEdit ? "수정하시겠습니까?" : "등록하시겠습니까?"}
            </Modal>
          )}
        </A.BottomButton>
      </A.Main>
    </>
  );
}