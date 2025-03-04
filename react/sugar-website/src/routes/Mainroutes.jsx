import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Men from '../pages/Men'
import Women from '../pages/Women'
function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/Signup' element={<Signup></Signup>}></Route>
            <Route path='/Men' element={<Men></Men>}></Route>
            <Route path='/Women' element={<Women></Women>}></Route>
        </Routes>
    </div>
  )
}