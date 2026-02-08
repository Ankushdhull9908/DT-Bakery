import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand/About */}
        <div className="footer-column">
          <h3 className="footer-logo">DT<span>BAKERY</span></h3>
          <p className="footer-description">
            Crafting high-quality digital experiences with precision and minimalist design. 
            Join us on our journey to redefine the modern web.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Newsletter */}
        <div className="footer-column">
          <h4>Stay Connected</h4>
          <p>Subscribe to get the latest updates.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Email address" />
            <button type="button">Join</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PremiumUI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;