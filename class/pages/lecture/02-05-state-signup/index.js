import {useState} from 'react'

export default function StateSignup() {

  const [email, setEmail ] = useState("")
  const [password, setPassword] = useState("")
  const [erroEmail, setErroEmail ] = useState("")
  const [erroPassword, setErroPassword] = useState("")
  function aaa(event) { 
    //event.target => <input type="text"/> 태그 전체를 가져옴
    setEmail(event.target.value )
  }
  function bbb(event) {
    setPassword(event.target.value)
  }
  function ccc() {
    console.log(email)
    console.log(password)

    if(email.includes("@") === false) {
      setErroEmail("잘못된 이메일입니다")
    }
    else if(password.length  === 0) {
      setErroPassword("비밀번호를 입력하세요")
    }
    else {
      alert("회원가입을 축하합니다")
    }
  }
  return (
    <div>
      이메일: <input type="text" onChange={aaa}/><br/>
      <span>{erroEmail}</span><br/><br/>
      비밀번호: <input type="password" onChange={bbb}/><br/>
      <span>{erroPassword}</span><br/><br/>
      <button onClick={ccc}>회업가입</button>
    </div>
  )0
1}