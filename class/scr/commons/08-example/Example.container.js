
import { useMutation} from "@apollo/client"
import { Router, useRouter } from "next/router"
import { useState} from "react"
import ExampleUI from "./Example.presenter"
import { CREATE_BOARD, UPDATE_BOARD} from "./Example.queries"
 



export default function ExampleWrite (props) {

  const [isActive, setIsActive] = useState(false)
  const [MyWriter, setMyWriter] = useState("")
  const [MyTitle, setMyTitle] = useState("")
  const [MyContent, setMyContent] = useState("")
  // const [Num, setNum] = useState("")
  const router = useRouter()

  const [qqq] = useMutation(CREATE_BOARD)
  const [X] = useMutation(UPDATE_BOARD)
  
  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq({
        variables: {writer: MyWriter, title: MyTitle, contents: MyContent}
    })
    console.log(result.data.createBoard.number)
    const num = (result.data.createBoard.number)
    
    router.push(`/lecture/0805-boards/${num}`)
  }

  const xxx = async () => {

    const result2 = await X({
      variables: {number:Number(router.query.mynumber), writer: MyWriter, title: MyTitle, contents: MyContent}
    })
    const number2 = (result2.data.updateBoard.number)
    router.push(`/lecture/0805-boards/${number2}`)
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
    <ExampleUI 
      aaa={props.isEdit}
      // bbb ={aaa}
      xxx={xxx}
      ccc ={zzz}
      ddd ={onChangeMyWritter}
      eee = {onChangeMyContent}
      fff = {onChangeMyTitle}
      isActive={isActive}/>
  )
}