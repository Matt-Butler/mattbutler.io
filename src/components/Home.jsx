import React from 'react';
import logo from './logo.svg';
import './Home.css';

const Home = () => (
  <div className="Home">
    <div className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <h2>mattbutler.io</h2>
    </div>
  </div>
);

export default Home;
