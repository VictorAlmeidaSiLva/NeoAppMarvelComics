import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';
import './global.css';
import Cart from './pages/Cart/Cart';
import Details from './pages/ComicPage/details'
import Home from './pages/Home/home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
