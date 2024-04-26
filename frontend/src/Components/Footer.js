import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
      <p className="footertext"> &copy; 2024 CODE CREW. All rights reserved.</p>
      <div className="footer_cent">
        <Row>
          <Col className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Linkedin</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-links">
              <ul>
                <li><a href="/terms">Terms and Conditions</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
