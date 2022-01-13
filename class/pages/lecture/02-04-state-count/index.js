import {useState} from 'react'

export default function LetCount() {

  const [ count, setCount ] = useState(0)
  function upcount() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={upcount}>카운트 증가!</button>
      <div>{num}</div>
      <button onClick={}></button>
    </div>
  )
}