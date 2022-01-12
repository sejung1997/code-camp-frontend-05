import { useState } from "react"
import {
  Main,
  TopTitle,
  WritterWrapper,
  OptionWrapper,
  Title,
  InputName,
  InputTitle,
  InputContent,
  InputNum,
  Input,
  SearchBtn,
  InputYoutube,
  AddressWrapper,
  YoutubeWrapper,
  Box,
  BoxGroup,
  InputMain,
  Youtube,
  BottomTitle
} from "../styles/emotion"

export default function Home() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [erroName, setErroName ] = useState("")
    const [erroPassword, setErroPassword] = useState("")
    const [erroTitle, setErroTitle] = useState("")
    const [erroContent, setErroContent] = useState("")

    function a(event) {
      setName(event.target.value)
    }
    function b(event) {
      setPassword(event.target.value)
    }
    function c(event) {
      setTitle(event.target.value)
    }
    function d(event) {
      setContent(event.target.value)
    }
    function e() {
      if(name === "") {
        setErroName("이름을 입력하세요")
      }
      else if(password === "") {
        setErroPassword("비밀번호를 입력하세요")
        setErroName("")
      }
      else if(title === "") {
        setErroTitle("제목을 입력하세요")
        setErroPassword("")
      }
      else if(content === "") {
        setErroContent("내용을 입력하세요")
        setErroTitle("")
      }
      else {
        alert("다음으로 넘어가세요")
        setErroContent("")
      }
    }
    



  return (
    <Main>
      <TopTitle>게시물 등록</TopTitle>
      <WritterWrapper>

        <OptionWrapper>
          <Title>작성자</Title>
          <InputName placeholder="이름을 적어주세요." onChange={a}></InputName>
          <span>{erroName}</span>

        </OptionWrapper>


        <OptionWrapper>
          <Title>비밀번호</Title>
          <InputName placeholder="비밀번호를 입력해주세요" onChange={b}></InputName>
          <div>{erroPassword}</div>


        </OptionWrapper>


      </WritterWrapper>

      <OptionWrapper>
        <Title>제목</Title>
        <InputTitle placeholder="제목을 작성해주세요" onChange={c}></InputTitle>
        <span>{erroTitle}</span>

      </OptionWrapper>

      <OptionWrapper>
        <Title>내용</Title>
        <InputContent placeholder="내용을 작성해주세요" onChange={d}></InputContent>
        <span>{erroContent}</span>

      </OptionWrapper>

      <AddressWrapper>
        <Title>주소</Title>
        <InputNum placeholder="07250"></InputNum> 
        <SearchBtn>우편번호 검색</SearchBtn>
        <Input/>
        <Input/>

      </AddressWrapper>

      <YoutubeWrapper>
        <Title>유트브</Title>
        <InputYoutube placeholder="링크를 복사해주세요."></InputYoutube>
      </YoutubeWrapper>

      <OptionWrapper>
        <Title>사진 첨부</Title>
        <BoxGroup>
          <Box>+<br></br>Upload</Box>
          <Box>+<br></br>Upload</Box>
          <Box>+<br></br>Upload</Box>
        </BoxGroup>
        
      </OptionWrapper>
      <OptionWrapper>
          <Title>메인 설정</Title>
          <InputMain type='radio' name="main"/><Youtube>유트브</Youtube>  
          <InputMain type='radio' name="main"/><Youtube>사진</Youtube>
      </OptionWrapper>

      <BottomTitle onClick={e}>등록하기</BottomTitle>

     

    </Main>

      
  )
}
