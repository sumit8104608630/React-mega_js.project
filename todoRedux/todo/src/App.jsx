import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'
import Remove from './component/Remove'

function App() {

  return (
    <div className='w-max'>
  <AddTodo/>
  <Remove/>
  </div>
  )
}

export default App
