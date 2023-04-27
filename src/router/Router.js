import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "../pages/Home";
import Category from "../pages/Category";
import Post from "../pages/Post";

const Router = () => {
  return (
   < BrowserRouter>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/post" element={<Post />} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default Router