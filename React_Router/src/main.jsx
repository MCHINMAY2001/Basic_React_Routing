import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/AboutUs/About.jsx'
import Contact from './Components/Contact.jsx/Contact.jsx'
import Services from './Components/Services/Services.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout/>,  
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path: "contact-us",
//         element:<Contact/>
//       },
//       {
//         path:"services",
//         element:<Services/>
//       }
//     ] 
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about-us' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='services' element={<Services/>}/>
      
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
