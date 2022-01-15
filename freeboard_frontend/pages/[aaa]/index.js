
import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql `
  query fetctBoard($number: Int) {
    fetchBoard(number: $number) {
      
      writer
      title
      contents

    }
  }

`

export default function DynamicRoutedPage() {


const router = useRouter()
const {data} = useQuery(FETCH_BOARD, {
  variables: {number: Number(router.query.aaa)}
})

//mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로




console.log(router.query.aaa)
console.log(data)

return (
  <div>
            <div> {router.query.aaa}번페이지 이동완료</div>

            <div> 이름: {data ? data?.fetchBoard?.writer:"로딩중"}</div>
            <div> 제목: {data ? data?.fetchBoard?.title:"로딩중"}</div>
            <div> 내용: {data ? data?.fetchBoard?.contents:"로딩중"}</div>
  </div>


  
)
}