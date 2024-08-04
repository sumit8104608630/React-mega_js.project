import React from 'react'
import { Link } from 'react-router-dom'
import { Container,LogOut,Logo } from '../index.js'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus=useSelector((state)=>state.auth.status)
   const navigate=useNavigate()


   const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header>
        <Container>
            <nav>
                <div>
                    <Logo width='100px'/>    
                </div>
                <ul>
                    {navItems.map((item)=>item.active?<li key={item.name}><button   className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={()=>navigate.slug }>{item.name}</button></li>:null)}
                    {authStatus?(<li><LogOut/></li>):null}
                </ul>

            </nav>
        </Container>
    </header>
  )
}

export default Header