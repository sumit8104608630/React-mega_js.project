import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,useParams } from "react-router-dom"
import Child from './Child.jsx'
import UseCall from './UseCall.jsx'
import UseRef from './UseRef.jsx'


const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
    {
      path:'/child',
      element:<Child/>
    },
  {
    path:'/UseCall',
    element:<UseCall/>
  },
  {
    path:'/UseRef',
    element:<UseRef/>
  },
  {
    path:'/*',
    element:(<>No  url Match found</>)
  },
  {
    path:"/name/:name",
    element:(<App></App>)
  }
]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
