import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/food.jpeg';
import './Home.css';

const Home = () => (
  <div
    className="home"
    style={{ backgroundImage: `url(${banner})` }}
  >
    <div className="headerContainer">
      <h1>Home</h1>
      <p>Indian food at a click</p>
      <Link to="/menu">
        <button type="button">Order Now</button>
      </Link>
    </div>
  </div>
);

export default Home;
