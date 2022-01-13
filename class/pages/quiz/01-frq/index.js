import { useState } from "react"

import {
  Main,
  Header,
  Search,
  Name,
  Menu,
  Title,
  My,
  Img1,
  Img2,
  MyName,
  Faq,
  Rec,
  Question,
  QuestionWrapper,
  Num,
  Label,
  Contents,
  Wrapper,
  V,
  Last
} from "../../../styles/quiz01"
import img1 from "../../../public/image/3104B05A-9CB0-4609-8F9B-4757F2CFC525.png"
import img2 from "../../../public/image/ic-28-arrow.png"

export default function Home() {






  return(
    <Main>
      <Header>
        <Search></Search>
        <My>
          <Title>마이</Title>
          <Img1 src={img1}></Img1><MyName>임정아</MyName><Img2 src={img2}></Img2>
        </My>
        <Menu>
          <Name>공지사항</Name>
          <Name>이벤트</Name>
          <Faq>FAQ<Rec></Rec></Faq>
          <Name>Q&A</Name>
        </Menu>
      </Header>
      <Contents>
        <QuestionWrapper>
          <Question>
            <Num>Q. 01</Num><Label>리뷰 작성은 어떻게 하나요?</Label>
          </Question>
          <Question>
            <Num>Q. 02</Num><Label>리뷰 수정/삭제는 어떻게 하나요?</Label>
          </Question>
          <Question>
            <Num>Q. 03</Num><Label>아이디/비밀번호를 잊어버렸어요</Label>
          </Question>
          <Question>
            <Num>Q. 04</Num><Label>회원탈퇴를 하고싶어요</Label>
          </Question>
          <Question>
            <Num>Q. 05</Num><Label>출발지 설정은 어떻게 하나요?</Label>
          </Question>
          <Question>
            <Num>Q. 06</Num><Label>비밀번호를 변경하고 싶어요.</Label>
          </Question>
        </QuestionWrapper>
        <Wrapper>
          <V>▽</V><V>▽</V><V>▽</V><V>▽</V><V>▽</V><V>▽</V>
        </Wrapper>
        
      </Contents>
      <Last>

      </Last>











    </Main>










  )
}