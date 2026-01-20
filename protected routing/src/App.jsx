import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import UserDetails from './components/UserDetail'
import ProtectedRoute from './components/ProtectedRoute'




 


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
       <Route 
  path='/user' 
  element={
    <ProtectedRoute>
      <UserDetails />
    </ProtectedRoute>
  } 
/>
         <Route path='/' element={<Home />} />
      </Routes>
      


    </>
  )
}

export default App
