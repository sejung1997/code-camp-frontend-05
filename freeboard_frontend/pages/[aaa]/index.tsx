import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'
import { useState } from "react" 

import {
  Main,
  Baner,
  Name,
  Title,
  MainImg,
  Contents,
  Video,
  Button,
} from "../../styles/board"
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



console.log(router.query.aaa)
console.log(data)

  return (
    <Main>
      <Baner>
        <img></img>
        <Name> 이름:{data?.fetchBoard.writer} <br/> Date: {data?.fetchBoard.createdAt}  </Name>
        <img></img>
        <img></img>
      </Baner>
      <Title>제목: {data?.fetchBoard.title}</Title>
      <MainImg>1</MainImg>
      <Contents>{data?.fetchBoard.contents}</Contents>
      <Video>2</Video>

     


      
      <Button onClick={update}>수정하기</Button>

    </Main>

    
  
 )
}