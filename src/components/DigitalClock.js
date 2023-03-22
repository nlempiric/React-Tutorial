import React,{useState} from 'react'

export default function DigitalClock() {
    let newTime=new Date().toLocaleTimeString();
    const [ctime, setctime] = useState(newTime);
    const handleClick=(event)=>
    {
        newTime=new Date().toLocaleTimeString();
        setctime(newTime);
    }
  return (
    <div>
      <h1>{ctime}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  )
}
