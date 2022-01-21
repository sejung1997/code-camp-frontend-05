import { useMutation, gql} from "@apollo/client"
import axios from "axios"
import {Fragment, useState} from "react"
import { IMutation, IMutationCreateBoardArgs } from "../../../scr/commons/types/generated/type"

const CREATE_BOARD = gql`
  mutation{
    createBoard(writer: "철수", title:"제목입니다~", contents: "내요이에요~~"){
        _id
        number
        message
    }
  }

`
export default function graphqlMutation() {

  const [aaa, setAaa] = useState<String>("")
  const [qqq] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq()
    console.log(result)
    result.data.createBoard.message
    setAaa(result.data.createBoard.message || '아무 스트링')
    
  }


 
  return(  


    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기</button>
      <div>{aaa}</div>

    </>
    
  ) 

  
}