import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql `
  query fetchBoard($number: Int) {
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
    variables: {number: Number(router.query.qqq)}
  })

  //mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로





  console.log(data)

  return (
    <div>
              <div> {router.query.qqq}번페이지 이동완료</div>

              <div> 작성자: {data?.fetchBoard.writer}</div>
              <div> 제목: {data?.fetchBoard.title}</div>
              <div> 내용: {data?.fetchBoard.contents}</div>
    </div>


    
  )
}