import {Rate,  DatePicker, Space} from 'antd'
import { useState } from 'react'
import ReactPlayer from 'react-player'



export default function LibraryStarPage() {
  const [value, setValue] = useState(3)
  const [day, setDay] = useState('')


  const handleChange = (value) => {
    setValue(value)
    alert(`${value}점`)
  }
  function onChange(dateString) {
    const a = dateString._d
    console.log(String(a).slice(0,12))
    setDay(String(a).slice(0,12))
  }

  
 
  return (
    <>
        <Rate onChange={handleChange} value={value}/> 
        <div>{value}점입니다</div>
        <Space direction="vertical">
          <DatePicker onChange={onChange}/>
          <div>{day}</div>
        </Space>
        < ReactPlayer url="https://www.youtube.com/watch?v=tsziDX37AFQ" 
        muted={true} playing={true}/> 
               
    </>

  )
        
         
}

