
import {useMutation} from "@apollo/client"
import { useState } from "react" 
import { useRouter } from "next/router"
import BoardWriteUI from "../write/boardWrite.presenter"
import {CREATE_BOARD} from "../write/boardWrite.container.mutation"




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
        createBoardInput: {
          writer,
          title,
          password,
          contents: content
        }
       
      }
    })
    console.log(result.data.createBoard)

    const number = result.data.createBoard.number
    console.log(number)
    router.push(`/${number}`)



  }

  return (
   <BoardWriteUI
      changeWriter={changeWriter}
      changePassword={changePassword}
      changeTitle={changeTitle}
      changeContent={changeContent}
      submit = {submit}
      erroWriter ={erroWriter}
      erroPassword={erroPassword}
      erroTitle={erroTitle}
      erroContent={erroContent}
   />

      
  )
}
