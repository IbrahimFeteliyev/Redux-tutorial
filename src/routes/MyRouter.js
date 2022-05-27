import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Detail from '../screens/Detail'

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>        
    </Routes>
  )
}

export default MyRouter