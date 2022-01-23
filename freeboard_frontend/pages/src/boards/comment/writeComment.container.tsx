import {useMutation,useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENT, DELETE_BOARD_COMMENT} from "./writeComment.mutation"
import WriteCommentPageUI from "./writeComment.presenter"


export default function WriteCommentPage() {
  const router = useRouter()
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [contents, setContents] = useState('')
  const [length, setLength] = useState('0')
  const [ ps, setPs] = useState('')

  const changeWriter = (event) => {
    setWriter(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }
  const changeContents = (event) => {
    setContents(event.target.value)
    
    if(event.target.value.length < '100') setLength(event.target.value.length)
    else {
      setLength('100')
    }
  }
  
  const changePs= (event) => {
    setPs(event.target.value)
  }

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)

  
  const {data} = useQuery(FETCH_BOARD_COMMENT, {
    variables: {page: 1, boardId: router.query.aaa}
  })
  console.log(router.query.aaa)

  const myVariables = {
    createBoardCommentInput: {
      writer,
      password,
      contents,
      rating: 5
    },
    boardId: String(router.query.aaa) 
  }
  
  const createComment = async () => {
    const result = await createBoardComment({
      variables: myVariables,
      refetchQueries: [{ query: FETCH_BOARD_COMMENT, 
        variables: {page: 1, boardId: String(router.query.aaa)}
      }]
    })
    // changeWriter(event)
    // parent.location.reload()
      
    console.log(result?.data.createBoardComment._id)
  }

  const deleteComment =  (event) => {
    deleteBoardComment({ 
      variables: {password: ps, boardCommentId: event.target.id},
      refetchQueries: [{ query: FETCH_BOARD_COMMENT,
        variables: {page: 1, boardId: router.query.aaa}
       }]
    })
  }
  const updateComment = async (event) => {
    setWriter(event.target.id.writer)
  }
  

  return (
    
    <WriteCommentPageUI
      changeContents={changeContents}
      createComment={createComment}
      changePassword={changePassword}
      changeWriter={changeWriter}
      length={length}
      data={data}
      deleteComment ={deleteComment}
      updateComment ={updateComment}
      changePs={changePs}

      />
  )
}