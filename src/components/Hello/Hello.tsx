import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pages from 'pages/index';
import './hello.css';

const Hello = () => (
  <BrowserRouter basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={pages.Home()} />
      <Route path="/menu" element={pages.Menu()} />
      <Route path="/about" element={pages.About()} />
      <Route path="/contact" element={pages.Contact()} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Hello;
