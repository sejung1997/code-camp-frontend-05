
import BoardWriteUI from "./QuizBoardWrite.presenter"
import { useMutation} from "@apollo/client"
import { useState} from "react"
import { CREATE_BOARD } from "./QuizBoardWrite.queries"


import {useRouter} from 'next/router'

export default function DynamicRoutingPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [createBoard] = useMutation(CREATE_BOARD)

  


  const move1 = (event) => {
    setName(event.target.value)
    if(event.target.value && password && title && contents) {
      setIsActive(true)
    }
  }
  const move2 = (event) => {
    setPassword(event.target.value)
    if(name && event.target.value && title && contents) {
      setIsActive(true)
    }
  }
  const move3 = (event) => {
    setTitle(event.target.value)
    if(name && password && event.target.value && contents) {
      setIsActive(true)
    }
  }
  const move4 = (event) => {
    setContents(event.target.value)
    if(name && password && title && event.target.value) {
      setIsActive(true)
    }
  }
  const move100 = async () => {
  
    const result = await createBoard({
          variables: {writer: name, title: title, contents: contents}
    })
    console.log(result.data.createBoard.number)
    const id = result.data.createBoard.number
    router.push(`/lecture/${id}`)
    
      
    }
  


  return (
   <BoardWriteUI
      move1 = {move1}
      move2 = {move2}
      move3 = {move3}
      move4 = {move4}
      move100 = {move100}
      isActive = {isActive}
    />

      
  )
}
