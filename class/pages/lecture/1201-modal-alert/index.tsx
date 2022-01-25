import { Modal} from 'antd';

export default function ModalAlertPage() {


  const onClickSucess = () => {
    Modal.success({content: "게시물 등록에 성공했습니다"})
  }

  const onClickFail = () => {
    Modal.error({content: "비밀번호가 틀렸습니다"})
  }
  return(
    <div>
      <button onClick={onClickSucess}>알림창 나타나기!(성공)</button>

      <button onClick={onClickFail}>알림창 나타나기!(실패)</button>
    </div>
  )
}