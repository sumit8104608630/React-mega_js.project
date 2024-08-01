import React, { useCallback, useState } from 'react'
import Child from './Child'

function UseCallBck() {
    const [num,setNum]=useState(0)
    const count=()=>{
        setNum(num=>num+1)
    }
    const [num2,setNum2]=useState(0);
    const fun=useCallback(()=>{
        setNum2(num2=>num2+1)
    },[num2])
  return (
    <div>
        <Child number={num2} fun={fun}/>
        <h1>UseCallBck {num}</h1>
        <button onClick={count}>click me</button>
    </div>
  )
}

export default UseCallBck