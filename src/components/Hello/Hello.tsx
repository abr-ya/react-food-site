import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pages from 'pages/index';
import './hello.scss';

const Hello = () => (
  <BrowserRouter basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={pages.Home()} />
      <Route path="/menu" element={pages.Menu()} />
      <Route path="/about" element={pages.About()} />
      <Route path="/contact" element={pages.Contact()} />
    </Routes>
  </BrowserRouter>
);

export default Hello;
