import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'

import * as L from "../../styles/board"
const FETCH_BOARD = gql `
  query fetctBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      
      writer
      title
      contents
      likeCount
      createdAt
      _id
    }
  }

`

export default function DynamicRoutedPage() {


const router = useRouter()
const {data} = useQuery(FETCH_BOARD, {
  variables: {boardId: router.query.aaa}
})
const id = data?.fetchBoard._id
// mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로

const update = () => {

  router.push(`/${id}/edit`)
}
const list = () => {
  router.push('./boardList')
}


console.log(router.query.aaa)
console.log(data)

  return (
    <>
      <L.Main>
        <L.Baner>
          <img></img>
          <L.Name> 이름:{data?.fetchBoard.writer} <br/> Date: {data?.fetchBoard.createdAt}  </L.Name>
          <img></img>
          <img></img>
        </L.Baner>
        <L.Title>제목: {data?.fetchBoard.title}</L.Title>
        <L.MainImg>1</L.MainImg>
        <L.Contents>내용: {data?.fetchBoard.contents}</L.Contents>
        <L.Video>2</L.Video>

      


        
        <L.ButtonUpdate onClick={update}>수정하기</L.ButtonUpdate>
        <L.ButtonList onClick={list}>목록보기</L.ButtonList>

      </L.Main>
      <L.Iframe src={`/${id}/comment`} ></L.Iframe>
    </>
    

    
  
 )
}