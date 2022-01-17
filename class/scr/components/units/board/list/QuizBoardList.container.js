import {useRouter} from 'next/router'
import { useQuery} from '@apollo/client'
import { useState } from 'react'
import BoardList from './QuizBoardList.presenter'
import { FETCH_BOARD } from './QuizBoardList.queries'






export default function DynamicRoutedPage() {


  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD, {
    variables: {number: Number(router.query.id)}
  })

  //mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로

  console.log(data)

  return (
    <BoardList
        Data = {data}
    />
    

    
  )
}