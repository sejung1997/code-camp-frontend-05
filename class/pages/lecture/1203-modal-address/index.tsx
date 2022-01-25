import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export default function ModalCustonPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setAdress] = useState('')
  const [, setZonecode] = useState('')
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompletePostcode = (data: any) => {
    setAdress(data.address)
    setZonecode(data.zonecode)
    setIsModalVisible(false);
  }
  return (
    <>
      <Button  onClick={showModal}>
        우편번호 검색
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <DaumPostcode onComplete={onCompletePostcode}/>
      </Modal>
    </>
  );
};