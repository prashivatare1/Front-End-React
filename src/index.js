import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import './index.css';
import './js/script.js'


import Home from './components/Home.js';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import About from './components/About';
import Rooms from './components/Rooms';
import Packages from './components/Packages';
import Login from './components/Login';
import Register from './components/Register';
import Next from './components/Next';
import Admin from './components/Admin';
import Enquiry from './components/Enquiry';
import Book from './components/Book';

import Invoice from './components/Invoice';

import { CartProvider } from 'react-use-cart';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Payment from './components/Payment';








var content = (
  <div>
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Next" element={<Next />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/Book" element={<Book />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
      <Footer />
       </CartProvider>
    </BrowserRouter>
  </div>
)

ReactDOM.render(
  content,
  document.getElementById('root')
);


