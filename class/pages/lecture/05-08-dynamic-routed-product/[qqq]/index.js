
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
    variables: {productId: router.query.qqq}
  })

  //mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로





  console.log(data)

  return (
    <div>
              <div> {router.query.qqq}번페이지 이동완료</div>

              <div> 판매자: {data?. fetchProduct?.seller}</div>
              <div> 상품명: {data?.fetchProduct?.name}</div>
              <div> 상품내용: {data?.fetchProduct?.detail}</div>
              <div> 상품가격: {data?.fetchProduct?.price}</div>
    </div>


    
  )
}