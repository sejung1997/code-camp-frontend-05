
import { useMutation} from "@apollo/client"
import { Router, useRouter } from "next/router"
import { ChangeEvent, useState} from "react"
import ExampleUI from "./Example.presenter"
import { CREATE_BOARD, UPDATE_BOARD} from "./Example.queries"
import { IBoardIProps } from "./Example.types"



export default function ExampleWrite (props : IBoardIProps) {

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
    
    router.push(`/lecture/0901-boards/${num}`)
  }

  const xxx = async () => {
    
    interface IMyvariables {
      number: number
      writer?: String
      title?: String
      contents?: String
    }

    const myVariables: IMyvariables = {
      number:Number(router.query.mynumber)
    }
      
      
    if(MyWriter !== '') myVariables.writer = MyWriter
    if(MyTitle !== '') myVariables.title = MyTitle
    if(MyContent !== '') myVariables.contents =MyContent
      
      
     



    const result2 = await X({
      variables: myVariables
    })
    const number2 = (result2.data.updateBoard.number)
    router.push(`/lecture/0901-boards/${number2}`)
  }

  const onChangeMyWritter = (event:ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value)
    if(event.target.value && MyTitle && MyContent) {
      setIsActive(true)
    }
    
  }
  const onChangeMyTitle = (event:ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value)
    if(MyWriter && event.target.value && MyContent) {
      setIsActive(true)
    }
  }
  const onChangeMyContent = (event:ChangeEvent<HTMLInputElement>) => {
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
      isActive={isActive}
      data={props.data}/>
  )
}