import {useState} from 'react'

export default function Main() {
  const [ hello, setHello] = useState("안녕하세요")
  const [ count, setCount ] = useState(0)
  const [ num, setNum] = useState('000000')
  const [ mail, setMail] = useState("")
  const [ pass1, setPass1] = useState("")
  const [ pass2, setPass2] = useState("")
  const [ mailErro, setmailErro] = useState('')
  const [ passwordErro, setpasswordErro] = useState('')
  
  function click() {
    if(hello === "안녕하세요"){
      setHello("반갑습니다")
    }
    else {
      setHello("안녕하세요")
    }
    
  }

  function upcount() {
    setCount(count + 1)
  }

  function forward() {
    setNum(Math.floor(Math.random()*100000))
  }

  function email(event) {
    setMail(event.target.value)
    if(event.target) {
      setmailErro("")
    }
  }

  function passwChange1(event) {
    setPass1(event.target.value)
    
  }
  function passwChange2(event) {
    setPass2(event.target.value)
    
  }
  function register() {
    if(mail.includes('@') === false) {
      setmailErro("모두입")
    }
    if(pass1 === "" || pass2 === "") {
      setpasswordErro("모두 입력해주세요")
    }
    else if(pass1 !== pass2) {
      setpasswordErro("비밀번호가 다릅니다")
    }
    if(pass1 === pass2) {
      setpasswordErro("")
    }
  }
  return (
    <div>
      <button onClick={click}>{hello}</button>
      <div>{count}</div>
      <button onClick={upcount}>카운트 증가!</button>
      <div>{num}</div>
      <button onClick={forward}>인증번호 전송</button><br></br><br></br>
      이메일    <input onChange={email}/> <span>{mailErro}</span> <br></br>
      비밀번호   <input onChange={passwChange1}/>  <br></br>
      비밀번호 확인   <input onChange={passwChange2}/> <span>{passwordErro}</span> <br></br><br></br>
      <button onClick={register}>회원가입</button>

    </div>
  )
}