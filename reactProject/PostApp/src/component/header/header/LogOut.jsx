import React from 'react'
import { useDispatch } from 'react-redux'
import authService, {logOut} from "../../../appWrite_services/service.js"
function LogOut() {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        authService.logOut().then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <button onClick={handleLogOut}>LogOut</button>
  )
}

export default LogOut