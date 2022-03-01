import styled from "@emotion/styled";
import { Modal } from "antd";
import UploadImagePage from "../../commons/uploadImage/uploadImage01/container";
import { IBoardUIIProps } from "./createItem.types";
import * as A from "./createItem.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Dompurify from "dompurify";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";

// import { Input02 } from "../../commons/inputs/input02";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateItemPresenter(props: IBoardUIIProps) {
  console.log(props.defaultData);
  return (
    <>
      <A.Main>
        <A.TopTitle>상품 {props.isEdit ? "수정" : "등록"}</A.TopTitle>
        <A.WritterWrapper onSubmit={props.handleSubmit(props.onclickSubmit)}>
          <A.OptionWrapper>
            <A.Title>상품명</A.Title>
            <A.Input02
              placeholder={"상품명을 입력해주세요"}
              type={"text"}
              defaultValue={props.defaultData?.fetchUseditem?.name}
              {...props.register("name")}
            />
            {/* <A.ErrorMsg>{props.formState.errors.myEmail?.message}</A.ErrorMsg> */}
          </A.OptionWrapper>

          <A.OptionWrapper>
            <A.Title>한줄요약</A.Title>
            <A.Input02
              placeholder={"간단하게 상품을 요약해주세요"}
              defaultValue={props.defaultData?.fetchUseditem?.remarks}
              type={"text"}
              {...props.register("remarks")}
            />

            {/* <A.ErrorMsg>{props.formState.errors.myEmail?.message}</A.ErrorMsg> */}
          </A.OptionWrapper>

          <A.OptionWrapper>
            <A.Title>가격(원)</A.Title>
            <A.Input02
              defaultValue={props.defaultData?.fetchUseditem?.price}
              placeholder={"가격을 입력해주세요"}
              type={"text"}
              {...props.register("price")}
            />
            {/* <A.ErrorMsg>{props.formState.errors.myEmail?.message}</A.ErrorMsg> */}
          </A.OptionWrapper>
          <A.OptionWrapper>
            <A.Title>태그</A.Title>
            <A.Input02
              defaultValue={props.defaultData?.fetchUseditem?.tags}
              placeholder={"#태그 #태그 #태그"}
              type={"text"}
              {...props.register("tags")}
            />
            {/* <A.ErrorMsg>{props.formState.errors.myEmail?.message}</A.ErrorMsg> */}
          </A.OptionWrapper>
          <A.contentsWrapper>
            <A.Title>내용</A.Title>
            {process.browser && (
              <ReactQuill
                style={{ width: "1000px", height: "300px" }}
                onChange={props.handleChange}
                // value={props.defaultData?.fetchUseditem?.contents || ""}

                defaultValue={
                  props.contents ||
                  props.defaultData?.fetchUseditem?.contents ||
                  ""
                }
              />
            )}

            {/* <A.ErrorMsg>{props.formState.errors.myEmail?.message}</A.ErrorMsg> */}
          </A.contentsWrapper>
          <A.OptionWrapper>
            <A.Title>사진 첨부</A.Title>
            <A.BoxGroup>
              {new Array(6).fill(1).map((_, index) => (
                <UploadImagePage
                  key={index}
                  index={index}
                  imgUrl={props.imgUrl}
                  setImgUrl={props.setImgUrl}
                  isEdit={props.isEdit}
                  defaultData={props.defaultData}
                />
              ))}
            </A.BoxGroup>
          </A.OptionWrapper>
          <A.OptionWrapper>
            <A.Title>주소</A.Title>
            <A.InputNum
              placeholder={"0512"}
              value={
                props.inputs.zipcode
                  ? props.inputs?.zipcode
                  : props.defaultData?.fetchUseditem?.useditemAddress?.zipcode
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
                props.inputs.address
                  ? props.inputs.address
                  : props.defaultData?.fetchUseditem?.useditemAddress?.address
                // props.address ||
                // props.data?.fetchBoard.boardAddress.address
              }
            />
            <A.Input
              placeholder="상세 주소를 입력해주세요"
              defaultValue={
                props.defaultData
                  ? props.defaultData?.fetchUseditem?.useditemAddress
                      ?.addressDetail
                  : ""
              }
              {...props.register("addressDetail")}
            />
          </A.OptionWrapper>
        </A.WritterWrapper>

        <A.BottomButton>
          <A.BottomSubmit
            onClick={
              props.isEdit
                ? props.handleSubmit(props.onclickUpdate)
                : props.handleSubmit(props.onclickSubmit)
            }
          >
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
