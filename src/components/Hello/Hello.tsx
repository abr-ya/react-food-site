import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './hello.scss';

const Hello = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

export default Hello;
