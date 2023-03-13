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
        Name: <input type="text" />

        Password: <input type="text" ref={backRef}/>
        <br /><br />
        <button >Submit</button>
      </form>
    </div>
  )
}
