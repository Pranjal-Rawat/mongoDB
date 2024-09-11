import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section bg-seagreen">
        <h2 className="footer-title">About Us</h2>
        <p className="footer-text">
          We are a team of passionate developers and designers working together to create exceptional web experiences.
        </p>
      </div>
      <div className="footer-section bg-seagreen">
        <h2 className="footer-title ">Follow Us</h2>
        <div className="social-links hover:scale-105 transition-all duration-300">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-section bg-seagreen">
        <h2 className="footer-title">Contact Us</h2>
        <p className="footer-text">
          Email: contact@yourcompany.com<br />
          Phone: (123) 456-7890
        </p>
      </div>
      <div className="footer-bottom bg-seagreen">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;