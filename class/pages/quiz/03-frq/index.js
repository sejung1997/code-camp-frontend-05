import { useMutation, gql} from "@apollo/client"
import axios from "axios"
import {Fragment, useState} from "react"

const CREATE_PROFILE = gql`
  mutation createProfile($name: String, $age: Int, $school: String  ) {


    createProfile(name: $name, age: $age, school: $school){
        _id
        message
    }
  }

`
export default function graphqlMutationArgs() {

  const [aaa, setAaa] = useState("")
  const [qqq] = useMutation(CREATE_PROFILE)

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq({
        variables: {name: "dk", age: 3, school: "내"}
    })
    console.log(result)

    setAaa(result.data.createProfile)
    
  }


  return(  


    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기</button>
      <div>{aaa}</div>

    </>
    
  ) 

  
}