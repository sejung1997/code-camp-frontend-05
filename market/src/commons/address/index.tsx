export default function AddressSearch() {

  return (

    <A.Title>주소</A.Title>
            <Input03 />
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
            <Input03/>
            <Input02/>
  )
}




