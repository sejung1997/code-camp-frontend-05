import axios from "axios"
import {Fragment, useState} from "react"


export default function RestGet() {

  const [aaa, setAaa] = useState("")
  // async function zzz() {
  //   const result = await axios.get("https://koreanjson.com/posts/1")
  //   console.log(result.data.title)
  //   setAaa(result.data.title)
  // }

  const zzz = async () => {
    const result = await axios.get("https://koreanjson.com/users/1")
    
    console.log(result.data.id)
    setAaa(result.data.id)
  }


  // function zzz() {
  //   console.log("df")
  // }
  return(  


    <>
      <button onClick={zzz}>REST-API 요청하기</button>
      <div>{aaa}</div>

    </>
    
  ) 

  
}