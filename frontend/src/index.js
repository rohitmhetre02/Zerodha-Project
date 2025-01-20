import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';



import Navbar from './landing_page/Navbar';
import HomePage from './landing_page/home/HomePage';
import Signup from "../src/landing_page/signup/Signup";
import AboutPage from "../src/landing_page/about/AboutPage";
import ProductPage from "../src/landing_page/product/ProductPage";
import PricingPage from "../src/landing_page/pricing/PricingPage";
import SupportPage from "../src/landing_page/support/SupportPage";
import Footer from '../src/landing_page/Footer';
import Login from './landing_page/login/Login';
import NotFound from '../src/landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
);





