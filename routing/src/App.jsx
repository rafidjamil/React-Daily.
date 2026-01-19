// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import Login from './componets/Login'
import About from './componets/About'
import { Routes, Route } from 'react-router-dom'








function App() {



  return (
    <>

            <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

    </>
  )
}

export default App
