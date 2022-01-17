import { useMutation} from "@apollo/client"
import { useState} from "react"
import BoardWriteUI from "./BoardWirte.presenter.js"
import { CREATE_BOARD } from "./BoardWrite.queries"
 







export default function BoardWrite () {
  const [isActive, setIsActive] = useState(false)
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
    if(event.target.value && MyTitle && MyContent) {
      setIsActive(true)
    }
    
  }
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value)
    if(MyWriter && event.target.value && MyContent) {
      setIsActive(true)
    }
  }
  const onChangeMyContent = (event) => {
    setMyContent(event.target.value)
    if(MyWriter && MyTitle && event.target.value) {
      setIsActive(true)
    }
  }

  return (
    <BoardWriteUI 
      bbb ={aaa}
      ccc ={zzz}
      ddd ={onChangeMyWritter}
      eee = {onChangeMyContent}
      fff = {onChangeMyTitle}
      isActive={isActive}/>
  )
}