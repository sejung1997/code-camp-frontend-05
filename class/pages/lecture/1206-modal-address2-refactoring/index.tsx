import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export default function ModalCustonPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setAdress] = useState('')
  const [, setZonecode] = useState('')

    const onToggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const onCompletePostcode = (data: any) => {
    setAdress(data.address)
    setZonecode(data.zonecode)
    onToggleModal()
  }
  return (
    <>
      <Button  onClick={onToggleModal}>
        우편번호 검색
      </Button>
      {isModalVisible && (
      <Modal title="Basic Modal" visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
       <DaumPostcode onComplete={onCompletePostcode}/>
      </Modal>
    
  )};
  
  
  </>
  )
};