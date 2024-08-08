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
  service.checkLogin().then((userData)=>{
    if(userData){
    dispatch(login({userData}));
    }
    else{

      dispatch(logOut());
    }
  }).finally(()=>setLoad(false))
})

//console.log(import.meta.env.VITE_APPWRITER_URL);

  return !Loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}
//import authService from './appWrite_services/service';
export default App
