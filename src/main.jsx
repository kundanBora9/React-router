import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import GitHub from './Component/GitHub/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/' element={<User/>}>
      <Route path=':userid' element={<User/>} />
     </Route>
     <Route path='GitHub' element={<GitHub/>}/>
     <Route  path="*" element={<h1>Not Found</h1>}></Route>
    </Route>
  ) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
