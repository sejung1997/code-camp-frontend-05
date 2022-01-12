import { useState } from "react"

import {
  Main,
  Header,
  Search,
  Name,
  Submenu,
  Title,
  My,
  Img1,
  Img2,
  MyName
} from "../../../styles/quiz01"
import img1 from "../../../public/image/3104B05A-9CB0-4609-8F9B-4757F2CFC525.png"


export default function Home() {













  return(
    <Main>
      <Header>
        <Search></Search>
        <My>
          <Title>마이</Title>
          <Img1 src={img1}></Img1><MyName>임정아</MyName><Img2></Img2>
        </My>
        <Submenu>
          <Name>공지사항</Name>
          <Name>이벤트</Name>
          <Name>FAQ</Name>
          <Name>QA</Name>
        </Submenu>
      </Header>











    </Main>










  )
}