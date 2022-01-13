import { useMutation, gql} from "@apollo/client"
import axios from "axios"
import {Fragment, useState} from "react"

const CREATE_BOARD = gql`
  mutation createBoard($writer: String,   $title: String, $contents: String  ) {


    createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }
  }

`
export default function graphqlMutationArgsInput() {
  const [MyWriter, setMyWriter] = useState("")
  const [MyTitle, setMyTitle] = useState("")
  const [MyContent, setMyContent] = useState("")

  const [aaa, setAaa] = useState("")
  const [qqq] = useMutation(CREATE_BOARD)

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq({
        variables: {writer: MyWriter, title: MyTitle, contents: MyContent}
    })
    setAaa(result.data.createBoard.message)
    
  }

  const onChangeMyWritter = (event) => {
    setMyWriter(event.target.value)
  }
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value)
  }
  const onChangeMyContent = (event) => {
    setMyContent(event.target.value)
  }
 
  return(  


    <>
      작성자: <input type="text" onChange={onChangeMyWritter}/><br/>
      제목: <input type="text" onChange={onChangeMyTitle}/><br/>
      내용: <input type="text" onChange={onChangeMyContent}/><br/>
      <button onClick={zzz}>GRAPHQL-API 요청하기</button>
      <div>{aaa}</div>

    </>
    
  ) 

  
}