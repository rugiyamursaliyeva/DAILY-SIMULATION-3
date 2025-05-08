import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import Home from '../pages/home/Home'
import Admin from '../pages/admin/Admin'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router