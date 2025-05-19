import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import Home from '../pages/home/Home'
import Admin from '../pages/admin/Admin'
import Basket from '../pages/basket/Basket'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router