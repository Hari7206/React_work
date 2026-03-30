import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Product from './components/Product';
import About from './components/About';
import Sign from  './components/Sign';
import Products from './components/Products';

function App() {
  return (
    <div className=' h-screen w-full'>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Sign />} />
    <Route path="/product/:id" element={<Products />} />
    </Routes>
    </div>
  )
}

export default App