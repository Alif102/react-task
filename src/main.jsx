import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './Layout/MainLayout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SecondHomePage from './Pages/SecondHomePage/SecondHomePage';
import Root from './Root/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    // errorElement : <ErrorPage/>,

    children : [
      {
        path : '/',
        element : <MainLayout/>,
       
        

      },
      {
        path : '/news',
        element:  <SecondHomePage/>
        
      },
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
