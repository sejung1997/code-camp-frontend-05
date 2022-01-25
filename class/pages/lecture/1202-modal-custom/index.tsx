import { ChangeEvent, useState } from 'react';
import { Modal, Button } from 'antd';

export default function ModalCustonPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setPassword] = useState('')

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  return (
    <>
      <Button  onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          비밀번호 입력: <input type="password" onChange={onChangePassword}/>
      </Modal>
    </>
  );
};