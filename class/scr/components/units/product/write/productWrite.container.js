import { useMutation} from "@apollo/client"
import {Fragment, useState} from "react"
import {useRouter} from 'next/router'
import ProductWriteUI from "./productWrite.presenter"
import {CREATE_PRODUCT, UPDATE_PRODUCT} from "./productWrite.queries"




export default function graphqlMutationProduct(props) {
  const [MySeller, setMySeller] = useState("")
  const [MyTitle, setMyTitle] = useState("")
  const [MyContent, setMyContent] = useState("")
  const [MyPrice, setMyPrice] = useState("")
  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const onClickSubmit = async () => {
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
      console.log(result)
      const id = result.data.createProduct._id
      router.push(`/quiz/0119-product/${id}`)
      
    } catch(error){
      console.log(error.message)
    }
    
  }
  const update = async () => {
    try {
      const result2 = await updateProduct({
        variables: {
          productId: router.query.id,
          updateProductInput: {
              name: MySeller,
              detail: MyContent,
              price: Number(MyPrice)
          }
        }
      })
      const id2 = result2.data.updateProduct._id
      router.push(`/quiz/0119-product/${id2}`)
    } catch(error) {
      console.log(error.message)
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


    <ProductWriteUI
      onChangeMySeller={onChangeMySeller}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContent={onChangeMyContent}
      onChangeMyPrice={onChangeMyPrice}
      onClickSubmit={onClickSubmit}
      update={update}
      isEdit={props.isEdit}
      />
    
  ) 

  
}