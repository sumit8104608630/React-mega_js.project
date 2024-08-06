import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import { Footer, Header } from './component/header';
import {service} from './appWrite_services/service';
import { login,logOut } from './redux_part/auth_store';
import { Outlet } from 'react-router-dom';

function App() {
const [Loading,setLoad]=useState(true);
const dispatch=useDispatch();
useEffect(()=>{
  service.check_login().then((userData)=>{
   setLoad(false);
    if(userData){
    dispatch(login({userData}));
    }
    else{

      dispatch(logOut());
    }
  }).finally(()=>setLoad(false))
})

//console.log(import.meta.env.VITE_APPWRITER_URL);

  return !Loading?(<div className='min-h-screen flex flex-wrap content-between justify-center bg-gray-400'>
  <div className='w-full flex flex-col justify-center items-center block'>
    <Header/>
    <main>
    {/*<Outlet/>*/
    "todo"}

    </main>
    <Footer/>
  </div>
    </div>):null
}
//import authService from './appWrite_services/service';

export default App
