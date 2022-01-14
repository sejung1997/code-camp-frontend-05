import {useMutation, gql} from "@apollo/client"
import { useState } from "react" 
import { useRouter } from "next/router"



const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      
    }
  }

`
export default function MutationProduct () {

  const [Seller, setSeller] = useState("")
  const [Title, setTitle] = useState("")
  const [Content, setContent] = useState("")
  const [Price, setPrice] = useState("")

  const router = useRouter()
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {

    try {
      const result = await createProduct({
        variables: {
          seller: Seller,
          createProductInput:{
              name: Title,
              detail: Content,
              price: Number(Price)
          }
        }
      })
      console.log(result.data.createProduct._id)
      const id = result.data.createProduct._id
      router.push(`/quiz/0502/${id}`)
      
    } catch(erro){
      console.log(erro.message)
    }
    
  }

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContent = (event) => {
    setContent(event.target.value)
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }


  return (

    <>
      판매자: <input type="text" onChange={onChangeSeller}/><br/>
      상품명: <input type="text" onChange={onChangeTitle}/><br/>
      상품내용: <input type="text" onChange={onChangeContent}/><br/>
      상품가격: <input type="text" onChange={onChangePrice}/><br/>
      <button onClick={ onClickSubmit}>상품 등록하기</button>

    </>
  )
}