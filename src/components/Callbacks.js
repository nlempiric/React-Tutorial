import React, { useRef ,useEffect} from 'react'

export default function Callbacks() {
    let backRef=useRef(null);
    // let setbackRef=element=>
    // {
    //     backRef=element;
    // }

    useEffect(()=>
    {
        backRef.current.focus();
    },[])
  return (
    <div>
      <form>
        Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" />
        <br /><br />
        Password:&nbsp;&nbsp; <input type="text" ref={backRef}/>
        <br /><br />
        <button >Submit</button>
      </form>
    </div>
  )
}
