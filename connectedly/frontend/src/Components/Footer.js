import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <div className="foot">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook />Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter />twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaLinkedin />Linkedin</a>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
