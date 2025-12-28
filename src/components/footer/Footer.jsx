// Footer.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer_row">

          {/* Logo & Description */}
          <Col lg="3" md="6" className="footer_col">
            <div className="footer_logo">
              <img src={logo} alt="Travel World" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, natus!
              </p>

              <div className="social_links">
                <i className="ri-user-line"></i>
                <i className="ri-github-fill"></i>
                <i className="ri-linkedin-fill"></i>
                <i className="ri-instagram-line"></i>
              </div>
            </div>
          </Col>

          {/* Discover */}
          <Col lg="3" md="6" className="footer_col">
            <h5>Discover</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Tours</li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col lg="3" md="6" className="footer_col">
            <h5>Quick Links</h5>
            <ul>
              <li>Gallery</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg="3" md="6" className="footer_col">
            <h5>Contact</h5>
            <ul className="contact_list">
              <li><i className="ri-map-pin-line"></i> Shimogga, Karnataka</li>
              <li><i className="ri-mail-line"></i> adarshaadi1997@gmail.com</li>
              <li><i className="ri-phone-line"></i> +91 86604 35323</li>
            </ul>
          </Col>

        </Row>

        <div className="footer_bottom">
          Copyright © 2025, Design and develop by
          <strong> Adarsha A Helvar</strong>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;