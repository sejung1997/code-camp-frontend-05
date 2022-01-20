
import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_PRODUCT = gql `
  query fetctProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      
      seller
      name
      detail
      price

    }
  }

`

export default function DynamicRoutedPage() {


  const router = useRouter()
  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {productId: router.query.id}
  })

  //mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로

  const id = router.query.id
  const moveUpdate = () => {
    router.push(`/quiz/0119-product/${id}/edit`)
  }


  console.log(data)

  return (
    <div>
              <div> {id}번 상품 등록(수정)완료</div><br/>

              <div> 판매자: {data?. fetchProduct?.seller}</div>
              <div> 상품명: {data?.fetchProduct?.name}</div>
              <div> 상품내용: {data?.fetchProduct?.detail}</div>
              <div> 상품가격: {data?.fetchProduct?.price}</div><br/>

              <button onClick={moveUpdate}>수정하기</button>

    </div>


    
  )
}