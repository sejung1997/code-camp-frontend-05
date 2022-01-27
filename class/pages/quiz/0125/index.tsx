import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustonPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState(0);
  function sum() {
    setState((prev) => prev + 5);
  }

  const onCompletePostcode = (data: any) => {
    console.log(data);
    showModal();
  };

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <Button onClick={showModal}>모달 열기</Button>
      {isModalVisible && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={showModal}
          onCancel={showModal}
        >
          <DaumPostcode onComplete={onCompletePostcode} />
        </Modal>
      )}
      <button onClick={sum}>실행: {state}</button>
    </>
  );
}
