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
} from "../../styles/board"
const FETCH_BOARD = gql `
  query fetctBoard($number: Int) {
    fetchBoard(number: $number) {
      
      writer
      title
      contents
      like
      createdAT

    }
  }

`

export default function DynamicRoutedPage() {


const router = useRouter()
const {data} = useQuery(FETCH_BOARD, {
  variables: {number: Number(router.query.aaa)}
})

// mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로




console.log(router.query.aaa)
console.log(data)

  return (
    <Main>
      <Baner>
        <img></img>
        <Name> 이름:  Date:  </Name>
        <img></img>
        <img></img>
      </Baner>
      <Title>제목</Title>
      <MainImg>1</MainImg>
      <Contents>2</Contents>
      <Video>2</Video>

     


      
      
    </Main>


  
 )
}