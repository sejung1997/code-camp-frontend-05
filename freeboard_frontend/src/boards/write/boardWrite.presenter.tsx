import { Modal } from "antd";

import { IBoardUIIProps } from "../list/boardList.types";
import * as A from "./boardWrite.styles";

export default function BoardWriteUI(props: IBoardUIIProps) {
  return (
    <>
      <A.Main>
        <A.TopTitle>게시물 {props.isEdit ? "수정" : "등록"}</A.TopTitle>
        <A.WritterWrapper>
          <A.OptionWrapper>
            <A.Title>작성자</A.Title>
            <A.InputName
              placeholder="이름을 적어주세요."
              onChange={props.changeWriter}
              defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}
              readOnly={!!props.data?.fetchBoard.writer}
            >
              {/*  */}
            </A.InputName>
          </A.OptionWrapper>

          <A.OptionWrapper>
            <A.Title>비밀번호</A.Title>
            <A.InputName
              placeholder="비밀번호를 입력해주세요"
              onChange={props.changePassword}
              defaultValue={props.isEdit ? props.data?.fetchBoard.password : ""}
            ></A.InputName>
          </A.OptionWrapper>
        </A.WritterWrapper>

        <A.OptionWrapper>
          <A.Title>제목</A.Title>
          <A.InputTitle
            placeholder="제목을 작성해주세요"
            onChange={props.changeTitle}
            defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
          ></A.InputTitle>
        </A.OptionWrapper>

        <A.OptionWrapper>
          <A.Title>내용</A.Title>
          <A.InputContent
            placeholder="내용을 작성해주세요"
            onChange={props.changeContent}
            defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}
          ></A.InputContent>
        </A.OptionWrapper>

        <A.OptionWrapper>
          <A.Title>주소</A.Title>
          <A.InputNum
            placeholder={"0512"}
            value={
              props.zonecode
                ? props.zonecode
                : props.data?.fetchBoard.boardAddress.zipcode
            }
          ></A.InputNum>

          <A.SearchBtn onClick={props.showModal}>우편번호 검색</A.SearchBtn>

          {props.isModalVisible && (
            <Modal
              title="우편번호 검색"
              visible={true}
              onOk={props.showModal}
              onCancel={props.showModal}
            >
              <A.Postcode onComplete={props.onCompletePostcode} />
            </Modal>
          )}
          <A.Input
            placeholder="주소를 입력해주세요"
            value={
              props.address
                ? props.address
                : props.data?.fetchBoard.boardAddress.address
              // props.address ||
              // props.data?.fetchBoard.boardAddress.address
            }
          />
          <A.Input
            placeholder="상세 주소를 입력해주세요"
            defaultValue={
              props.isEdit
                ? props.data?.fetchBoard.boardAddress.addressDetail
                : ""
            }
            onChange={props.changeAdressDetail}
          />
        </A.OptionWrapper>

        <A.YoutubeWrapper>
          <A.Title>유트브</A.Title>
          <A.InputYoutube
            placeholder="링크를 복사해주세요."
            onChange={props.changeUtube}
            defaultValue={props.isEdit ? props.data?.fetchBoard.youtubeUrl : ""}
          ></A.InputYoutube>
        </A.YoutubeWrapper>

        <A.OptionWrapper>
          <A.Title>사진 첨부</A.Title>
          <A.BoxGroup>
            <A.Box>
              +<br></br>Upload
            </A.Box>
            <A.Box>
              +<br></br>Upload
            </A.Box>
            <A.Box>
              +<br></br>Upload
            </A.Box>
          </A.BoxGroup>
        </A.OptionWrapper>
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
