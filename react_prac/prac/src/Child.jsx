import React,{memo} from 'react'

function Child({number,fun}) {
    console.log('**************sumit************')
    
  return (
   <> <div>Child {number}</div>
    <button onClick={fun}>click for 2</button></>
  )
}

export default memo(Child)