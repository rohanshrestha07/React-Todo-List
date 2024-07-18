// import React from 'react'
import App from '../App'
import Login from '../pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from '../pages/Service'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Error from '../pages/error/Error'
import HomePage from '../pages/HomePage'

export default function AppRoutes() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>} errorElement={<Error></Error>}></Route>
            <Route path="/login" element={<Login></Login>} errorElement={<Error></Error>}></Route>
            <Route path='/home' element={<HomePage></HomePage>} errorElement={<Error></Error>}></Route>
            <Route path='/services' element={<Service></Service>} errorElement={<Error></Error>}></Route>
            <Route path='/about' element={<About></About>} errorElement={<Error></Error>}></Route>
            <Route path='/contact' element={<Contact></Contact>} errorElement={<Error></Error>}></Route>
        </Routes>
    </BrowserRouter>
)
}
