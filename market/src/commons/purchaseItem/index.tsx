/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect, useState } from "react";
import { message, Modal } from "antd";
import { ButtonDelete } from "../../units/Detail/styles";
import * as SI from "../../units/signup/signUp.styles";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";
import { async } from "@firebase/util";
declare global {
  interface Window {
    IMP: any;
  }
}
export const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      impUid
      amount

      status
    }
  }
`;
export default function PurchaseItem(props) {
  const { userInfo, setPoint } = useContext(GlobalContext);
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT);
  const [amount, setAmount] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    let totalPrice = 0;
    if (props.allData) props.allData.forEach((x) => (totalPrice += x.price));

    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid중복되면 에러
        name: `${
          props.allData
            ? `${props.allData[0].name}외 ${props.allData.length}명  `
            : props.data
            ? props.data?.name
            : "포인트"
        }`,
        amount: props.allData
          ? totalPrice
          : props.data
          ? props.data.price
          : amount,
        buyer_email: `${userInfo.email}`,
        buyer_name: `${userInfo.name}`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url 모바일 결제시 돌아갈 주소
      },
      (rsp) => {
        // callback
        console.log(rsp);
        if (rsp.success) {
          const createPoint = async (rsp) => {
            const ddd = await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            console.log(ddd);
          };
          createPoint(rsp);
          setPoint((prev) => Number(prev) + Number(amount));
          const prevPoint =
            Number(JSON.parse(localStorage.getItem("point"))) || 0;
          localStorage.setItem(
            "point",
            JSON.stringify(prevPoint + Number(amount))
          );
          message.info("결제를 완료했습니다.");
        }
      }
    );
    if (!props.data && !props.allData) setIsModalVisible((prev) => !prev);
  };
  const onModal = () => {
    if (!props.data && !props.allData) setIsModalVisible((prev) => !prev);
    else handleOk();
  };
  const setPrice = (event) => {
    setAmount(Number(event.target.value));
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {isModalVisible && (
        <Modal
          title="충전하기"
          visible={true}
          onOk={handleOk}
          onCancel={onModal}
          footer={[
            <SI.PayBtn key="back" onClick={onModal}>
              취소하기
            </SI.PayBtn>,
            <SI.PayBtn key="submit" onClick={handleOk}>
              Submit
            </SI.PayBtn>,
          ]}
        >
          <select onChange={setPrice}>
            <option>500</option>
            <option>1000</option>
            <option>2000</option>
            <option>5000</option>
          </select>
        </Modal>
      )}
      <ButtonDelete onClick={onModal}>
        {props.data ? "구매하기" : props.allData ? "모두 구매하기" : "충전하기"}
      </ButtonDelete>
    </>
  );
}
