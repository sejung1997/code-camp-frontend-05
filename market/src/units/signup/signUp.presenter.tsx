import Button01 from "../../commons/button01";
import Input01 from "../../commons/inputs/input01";
import * as SI from "./signUp.styles";
import { ButtonDelete } from "../Detail/styles";
import PurchaseItem from "../../commons/purchaseItem/index";
import { SmallBtn } from "../../commons/layout/header/header.styles";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import UploadImagePage from "../../commons/uploadImage/uploadImage01/container";
export default function SignInPresenter(props) {
  console.log(props.pointData);
  return (
    <>
      {props.acessToken ? (
        <SI.Main>
          <SI.Titlelabel>마이페이지</SI.Titlelabel>
          <SI.label>이메일: {props.data?.fetchUserLoggedIn?.email}</SI.label>
          <SI.label>
            이름 :
            {!props.isUpdate ? (
              props.data?.fetchUserLoggedIn?.name
            ) : (
              <SI.Input type="name" onChange={props.changeName} />
            )}
          </SI.label>

          <SI.label>
            사진:
            {props.isUpdate ? (
              <UploadImagePage
                imgUrl={props.imgUrl}
                setImgUrl={props.setImgUrl}
                index={0}
                isEdit={false}
              />
            ) : (
              <SI.userImg
                src={
                  props.data?.fetchUserLoggedIn?.picture
                    ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn?.picture}`
                    : "images/Vector.png"
                }
              />
            )}
          </SI.label>
          <SI.label>
            가입 일자 : {props.data?.fetchUserLoggedIn?.createdAt.slice(0, 10)}
          </SI.label>
          <ButtonDelete onClick={props.onUpdate}>회원정보 수정</ButtonDelete>

          <SI.label>판매중인 상품</SI.label>
          <SI.toggle>
            {props.toggleOn[0] ? (
              <DownOutlined onClick={props.onclickToggle(0)} />
            ) : (
              <CaretDownOutlined onClick={props.onclickToggle(0)} />
            )}
          </SI.toggle>
          <SI.BuyList isHide={props.toggleOn[0]}>
            {props.soldData?.fetchUseditemsISold?.map((x, INDEX) => (
              <SI.listWrapper key={INDEX}>
                <div>상품명: {x.name}</div>
                <div>가격 : {x.price}원</div>
                <div>내용 : {x.contents}</div>
                <SmallBtn>이동하기</SmallBtn>
              </SI.listWrapper>
            ))}
          </SI.BuyList>
          <SI.label>구매한 상품</SI.label>
          <SI.toggle>
            {props.toggleOn[1] ? (
              <DownOutlined onClick={props.onclickToggle(1)} />
            ) : (
              <CaretDownOutlined onClick={props.onclickToggle(1)} />
            )}
          </SI.toggle>
          <SI.SoldList isHide={props.toggleOn[1]}>
            {props.buyData?.fetchUseditemsIBought?.map((x, INDEX) => (
              <SI.listWrapper key={INDEX}>
                <div>상품명: {x.name}</div>
                <div>가격 : {x.price}원</div>
                <div>내용 : {x.contents}</div>
              </SI.listWrapper>
            ))}
          </SI.SoldList>
          <SI.label>
            포인트 : {props.data?.fetchUserLoggedIn?.userPoint.amount}원
          </SI.label>
          <SI.label>포인트 사용내역 :</SI.label>
          <SI.toggle>
            {props.toggleOn[2] ? (
              <DownOutlined onClick={props.onclickToggle(2)} />
            ) : (
              <CaretDownOutlined onClick={props.onclickToggle(2)} />
            )}
          </SI.toggle>
          <SI.SoldList isHide={props.toggleOn[2]}>
            {props.pointData?.fetchPointTransactions?.map((x, INDEX) => (
              <SI.listWrapper key={INDEX}>
                <div>상품명: {x.useditem?.name}</div>
                <div>
                  {x.amount > 0 ? "포인트 충전" : "사용한 포인트"} {x.amount}원
                </div>
                <div>잔액 : {x.balance}</div>
              </SI.listWrapper>
            ))}
          </SI.SoldList>
          <div>
            <PurchaseItem />
          </div>
        </SI.Main>
      ) : (
        <SI.Main>
          <SI.label>회원가입</SI.label>
          <SI.InputWrapper onSubmit={props.handleSubmit(props.onclickSubmit)}>
            <SI.label>이메일</SI.label>
            <Input01 type="text" register={props.register("email")} />
            <SI.ErrMsg>{props.formState.errors.email?.message}</SI.ErrMsg>

            <SI.label>비밀번호</SI.label>
            <Input01 type="password" register={props.register("password")} />
            <SI.ErrMsg>{props.formState.errors.password?.message}</SI.ErrMsg>

            <Input01 type="password" register={props.register("password2")} />
            <SI.ErrMsg>{props.formState.errors.password?.message}</SI.ErrMsg>

            <SI.label>이름</SI.label>
            <Input01 type="text" register={props.register("name")} />
            <SI.ErrMsg>{props.formState.errors.name?.message}</SI.ErrMsg>

            <SI.label>전화번호</SI.label>
            <Input01 type="text" register={props.register("number")} />
            <SI.ErrMsg>{props.formState.errors.number?.message}</SI.ErrMsg>
            <Button01 name="회원가입" />
          </SI.InputWrapper>
        </SI.Main>
      )}
    </>
  );
}
