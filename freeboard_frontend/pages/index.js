import {useMutation, gql} from "@apollo/client"
import { useState } from "react" 
import { useRouter } from "next/router"

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
  SearchBtn,
  InputYoutube,
  YoutubeWrapper,
  Box,
  Input,
  BoxGroup,
  InputMain,
  Youtube,
  BottomTitle,
  Erro
} from "../styles/emotion"

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents ) {
      number
    }
  }

`

export default function Home() {

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [erroWriter, setErroWriter ] = useState("")
  const [erroPassword, setErroPassword] = useState("")
  const [erroTitle, setErroTitle] = useState("")
  const [erroContent, setErroContent] = useState("")

  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)

  function changeWriter (event) {
    setWriter(event.target.value)
    if(event.target) {setErroWriter("")}
  }

  function changePassword (event) {
    setPassword(event.target.value)
    if(event.target) {setErroPassword("")}

  }
  function changeTitle (event) {
    setTitle(event.target.value)
    if(event.target) {setErroTitle("")}

  }
  function changeContent (event) {
    setContent(event.target.value)
    if(event.target) {setErroContent("")}

  }

  function submit() {
    if(!writer) {
      setErroWriter("이름을 입력하세요")
    }
    if(!password) {
      setErroPassword("비밀번호를 입력하세요")
    }
    if(!title) {
      setErroTitle("제목을 입력하세요")
    }
    if(!content) {
      setErroContent("내용을 입력하세요")
    }
    else if (writer && password && title && content) {
        onClickSubmit()
       
    }
  }

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer,
        title,
        contents: content
      }
    })
    console.log(result.data.createBoard)

    const number = result.data.createBoard.number
    console.log(number)
    router.push(`/${number}`)



  }

  return (
    <Main>
      <TopTitle>게시물 등록</TopTitle>
      <WritterWrapper>

        <OptionWrapper>
          <Title>작성자</Title>
          <InputName placeholder="이름을 적어주세요." onChange={changeWriter}></InputName>
          <Erro>{erroWriter}</Erro>

        </OptionWrapper>


        <OptionWrapper>
          <Title>비밀번호</Title>
          <InputName placeholder="비밀번호를 입력해주세요" onChange={changePassword}></InputName>
          <Erro>{erroPassword}</Erro>


        </OptionWrapper>


      </WritterWrapper>

      <OptionWrapper>
        <Title>제목</Title>
        <InputTitle placeholder="제목을 작성해주세요" onChange={changeTitle}></InputTitle>
        <Erro>{erroTitle}</Erro>

      </OptionWrapper>

      <OptionWrapper>
        <Title>내용</Title>
        <InputContent placeholder="내용을 작성해주세요" onChange={changeContent}></InputContent>
        <Erro>{erroContent}</Erro>

      </OptionWrapper>

      <OptionWrapper>
        <Title>주소</Title>
        <InputNum placeholder="07250"></InputNum> 
        <SearchBtn >우편번호 검색</SearchBtn>
        <Input disabled />
        <Input disabled/>

      </OptionWrapper>

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

      <BottomTitle onClick={submit}>등록하기</BottomTitle>

     

    </Main>

      
  )
}
