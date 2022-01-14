import { useMutation, gql} from "@apollo/client"
import axios from "axios"
import {Fragment, useState} from "react"
import {useRouter} from 'next/router'



const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      
    }
  }

`
export default function graphqlMutationProduct() {
  const [MySeller, setMySeller] = useState("")
  const [MyTitle, setMyTitle] = useState("")
  const [MyContent, setMyContent] = useState("")
  const [MyPrice, setMyPrice] = useState("")

  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    try {
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
      console.log(result.data.createProduct._id)
      const id = result.data.createProduct._id
      router.push(`/lecture/05-08-dynamic-routed-product/${id}`)
      
    } catch(erro){
      console.log(erro.message)
    }
    
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