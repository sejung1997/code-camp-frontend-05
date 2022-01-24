
import {useMutation} from "@apollo/client"
import { ChangeEvent, useState } from "react" 
import { useRouter } from "next/router"
import BoardWriteUI from "./boardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD} from "./boardWrite.container.mutation"
import { IBoardListIProps} from "../list/boardList.types"



export default function Home(props:IBoardListIProps) {

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [erroWriter, setErroWriter ] = useState("")
  const [erroPassword, setErroPassword] = useState("")
  const [erroTitle, setErroTitle] = useState("")
  const [erroContent, setErroContent] = useState("")
  const [utube, setUtube] = useState('')

  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  function changeWriter (event:ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value)
    if(event.target) {setErroWriter("")}
  }

  function changePassword (event:ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
    if(event.target) {setErroPassword("")}

  }
  function changeTitle (event:ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
    if(event.target) {setErroTitle("")}

  }
  function changeContent (event:ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    if(event.target) {setErroContent("")}

  }
  function changeUtube (event:ChangeEvent<HTMLInputElement>) {
    setUtube(event.target.value)

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
  
  interface IcreateBoardInput{
    writer: String
    title: String
    password: String
    contents: String
    youtubeUrl: String
  }
  interface Isubmit {
    createBoardInput: IcreateBoardInput
  }
  const myVariables2:Isubmit = {
    createBoardInput: {
      writer,
      title,
      password,
      contents: content,
      youtubeUrl: utube
    }
   
  }
  const onClickSubmit = async () => {
    try {
      
      const result = await createBoard({
        variables: myVariables2
      })
      console.log(result.data.createBoard)

      const id = result.data.createBoard._id
      console.log(id)
      router.push(`/${id}`)

    } catch (error) {
      console.error();
    }
    



  }
  const update = async () => {
    
    interface Iupdate {
      title?: String
      contents?: String
    }
    interface IMyVariables {
      updateBoardInput: Iupdate
      boardId: String
      password: String

    }
    const MyVariables: IMyVariables = {
      updateBoardInput: {
      
      },
      boardId: String(router.query.aaa),
      password,
      
    }
    if(title !== '') MyVariables.updateBoardInput.title = title
    if(content !== '') MyVariables.updateBoardInput.contents = content  
    try {
      const result2 = await updateBoard({
        variables: MyVariables
      })
      console.log(result2)
      const id2 = result2.data.updateBoard._id
      router.push(`/${id2}`)
    } catch (error) {
      console.error();
    }
    
  }
  const cancel = () => {
    window.history.back()


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
      isEdit={props.isEdit}
      update={update}
      data= {props.data}
      cancel={cancel}
      changeUtube={changeUtube}
   />

      
  )
}
