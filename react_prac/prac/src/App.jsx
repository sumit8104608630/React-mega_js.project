
import './App.css'
import {useParams} from "react-router-dom"
import UseCall from './UseCall'
import UseCallBck from './UseCallBck'
import UseRef from './UseRef'
import {useNavigate,Outlet,NavLink} from "react-router-dom"
function App() {
  const {name}=useParams()
  const navigate=useNavigate()
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    padding: '10px',
    backgroundColor: isActive ? 'red' : 'transparent',
    color: isActive ? 'white' : 'black'
  })
  const navItems = [
    {
      name: 'Home',
      slug: "/",
    }, 
    {
      name: "child",
      slug: "/child",
  },
  {
      name: "UseCall",
      slug: "/UseCall",
  },
  {
      name: "UseRef",
      slug: "/UseRef",
  },

  ]
  return (
    <div>
      <h1>{name}</h1>
      <nav ><ul className='f'>{navItems.map(item=><NavLink key={item.name} to={item.slug} style={navLinkStyle}><li >{item.name}</li></NavLink>)}</ul></nav>
      <button onClick={()=>navigate("/child",{replace:true})}>Go to Child</button>
      <button onClick={()=>navigate(-1)}>Go to Child</button>

 <Outlet />
 </div>
  )
}

export default App
