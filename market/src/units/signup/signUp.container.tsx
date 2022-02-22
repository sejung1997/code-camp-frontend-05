import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../../pages/_app";

import SignUpPresenter from "./signUp.presenter";
import { useContext, useState } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
  password2: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
  name: yup
    .string()

    .required("이름은 필수 입력 사항입니다"),
  number: yup
    .number()

    .required("전화번호는 필수 입력 사항입니다"),
});
interface FormValues {
  email?: string;
  password?: string;
}
export default function SignInContainer() {
  const [amount, setAmount] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userInfo } = useContext(GlobalContext);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onclickSubmit = (data: FormValues) => {
    console.log(data);
  };
  const onModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  const handleOk = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp97729834"); // Example: imp00000000 (가맹점 id)

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid중복되면 에러
        name: "노르웨이 회전 의자",
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url 모바일 결제시 돌아갈 주소
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
        }
      }
    );
    console.log(amount);

    setIsModalVisible((prev) => !prev);
  };

  const setPrice = (event) => {
    setAmount(event.target.value);
  };
  return (
    <>
      <SignUpPresenter
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onclickSubmit={onclickSubmit}
        userInfo={userInfo}
        onModal={onModal}
        handleOk={handleOk}
        isModalVisible={isModalVisible}
        setPrice={setPrice}
      />
    </>
  );
}
