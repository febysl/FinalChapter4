import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Film } from '../components/Film'
import { Details } from '../components/Details'
import { HasilPencarian } from '../components/HasilPencarian'
// import { Check } from '../pages/Check'


export const RoutesList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/HasilPencarian' element={<HasilPencarian></HasilPencarian>}></Route>
        <Route path='/Film' element={<Film></Film>}></Route>
        <Route path='/Details' element={<Details></Details>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
