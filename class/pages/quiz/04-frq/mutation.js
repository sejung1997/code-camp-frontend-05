import { useMutation, gql} from "@apollo/client"
import axios from "axios"
import {Fragment, useState} from "react"

const CREATE_PROFILE = gql `
  mutation createProfile($name: String, $age: Int, $school: String) {

    createProfile(name: $name, age: $age, school: $school){
      _id
      number
      message
    }
  }

`
export default function graphqlMutationInput() {
  const [MyName, setMyName] = useState("")
  const [MyAge, setMyAge] = useState("")
  const [MySchool, setMySchool] = useState("")

  const[f, setF] = useState("")
  const [q] = useMutation(CREATE_PROFILE)

  const zzz = async () => {
    const result = await q({
        variables: {name: MyName, age: Number(MyAge), school: MySchool}
    })
      setAaa(result.data.createBoard.message)
    
  }

  const onchangeMyName = (event) => {
    setMyName(event.target.value)
  }
  const onchangeMyAge = (event) => {
    setMyAge(event.target.value)
  }
  const onchangeMySchool = (event) => {
    setMySchool(event.target.value)
  }

  return (
    <>
      이름: <input type="text" onChange={onchangeMyName}/><br/>
      나이: <input type="text" onChange={onchangeMyAge}/><br/>
      학교: <input type="text" onChange={onchangeMySchool}/><br/>
      <button onClick={zzz}>GRAPHQL-API 요청하기</button>
      <div>{f}</div>




    </>
  )
} 