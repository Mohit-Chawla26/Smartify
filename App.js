import React from 'react'
import "./index.css"
import Signup from './LoginSignupPage/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './LoginSignupPage/Login'
import Home from './LoginSignupPage/Home'
import ForgotPassword from './LoginSignupPage/ForgotPassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}
 
export default App