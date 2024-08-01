import React, { useRef } from 'react'

function UseRef() {
    const reference=useRef(null);
   const Focus=()=>{
      reference.current.focus();
      reference.current.style.width="500px"
    }
  return (
    <div>
      <h1>UseRef</h1>
        <input type='text' ref={reference}/>
    <button onClick={Focus}>focus</button>
    </div>
  )
}

export default UseRef