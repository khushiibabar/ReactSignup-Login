import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Accountsetting from './components/Accountsetting'

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={ <Home />} />
      <Route  path='/SignUp' element={ <SignUp />} />
      <Route  path='/Signin' element={ <Login />} />
      <Route  path='/accountsetting' element={ <Accountsetting />} />
    </Routes>
    
    </>
  )
}

export default App
