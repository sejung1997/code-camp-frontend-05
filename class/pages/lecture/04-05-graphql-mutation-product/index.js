import { useMutation, gql} from "@apollo/client"
import axios from "axios"
import {Fragment, useState} from "react"


const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }

`
export default function graphqlMutationProduct() {
  const [MySeller, setMySeller] = useState("")
  const [MyTitle, setMyTitle] = useState("")
  const [MyContent, setMyContent] = useState("")
  const [MyPrice, setMyPrice] = useState("")

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await createProduct({
        variables: {
          seller: MySeller,
          createProductInput:{
              name: MyTitle,
              detail: MyContent,
              price: Number(MyPrice)
          }
        }
    })
    
  }

  const onChangeMySeller = (event) => {
    setMySeller(event.target.value)
  }
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value)
  }
  const onChangeMyContent = (event) => {
    setMyContent(event.target.value)
  }
  const onChangeMyPrice = (event) => {
    setMyPrice(event.target.value)
  }
 
  return(  


    <>
      판매자: <input type="text" onChange={onChangeMySeller}/><br/>
      상품명: <input type="text" onChange={onChangeMyTitle}/><br/>
      상품내용: <input type="text" onChange={onChangeMyContent}/><br/>
      상품가격: <input type="text" onChange={onChangeMyPrice}/><br/>
      <button onClick={ onClickSubmit}>상품 등록하기</button>

    </>
    
  ) 

  
}