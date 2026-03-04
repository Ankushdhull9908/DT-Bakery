import React from 'react';
import './HomeBigImageSection.css';
import { icons } from '../assets/Assets';

const HomeBigImageSection = () => {
  return (
    <section className="home-big-image-container">
      {/* Left Side - Large Main Image */}
      <div className="main-image-wrapper">
        <img 
          src={icons.banner1} 
          alt="Chocolate Cake and Fruit" 
          className="main-image"
        />
      </div>

      {/* Right Side - Stacked Image then Content */}
      <div className="content-side-wrapper">
        <div className="small-image-box">
          <img 
            src={icons.banner2} 
            alt="Delicious Cookie" 
            className="small-image"
          />
        </div>
        
        <div className="text-content-box">
          <h2 className="title">DELICIOUS COOKIE</h2>
          <p className="subtitle">IT'S ALWAYS GOOD TIME FOR SWEETS!</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default HomeBigImageSection;