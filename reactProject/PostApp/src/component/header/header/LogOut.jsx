//import React from 'react'
import { useDispatch } from 'react-redux'
import {service} from "../../../appWrite_services/service.js"
import  {logOut}  from '../../../redux_part/auth_store.js'
function LogOut() {
    const dispatch = useDispatch()
    const handleLogOut = () => {
      service.logOut().then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <button
     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
     onClick={handleLogOut}>LogOut</button>
  )
}

export default LogOut