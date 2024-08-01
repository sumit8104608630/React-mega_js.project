import React, {useState,useMemo} from 'react'

function UseCall() {
    const [num,setNum]=useState(0);
    const handelClick=()=>{
        setNum(num=>num+1);
    }
const isEven =useMemo(()=>{
  
    for(let i=0;i<=2000000000;i++){
      i
    }
    return num%2==0
    
},[num])

    const [num2,setNum2]=useState(0);
    const handelClick2=()=>{
        setNum2(num2=>num2+1);
    }



  return (
    <div>
        <h1>UseCall 1 </h1>
        <h2>count {num}</h2>
        <button onClick={handelClick}>Click</button>
        <h1>Even : {isEven?"Even":"odd"}</h1>
        <h1>UseCall 2 </h1>
        <h2>count {num2}</h2>
        <button onClick={handelClick2}>Click</button>
    </div>
  )
}

export default UseCall