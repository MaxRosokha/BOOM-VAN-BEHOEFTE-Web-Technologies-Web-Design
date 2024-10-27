import React from "react";
import logo from "../../image/Logo1.png"; // Шлях до вашого логотипу

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-info">
        <h3 className="footer-title">INFO</h3>
        <ul className="footer-links">
          <li><a href="#pricing">Pricing</a></li>
          <br/>
          <li><a href="#about">About</a></li>
          <br/>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Boom Van Behoefte Logo" />
      </div>
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
    <nav className="footer-nav">
      <a href="#home">Home</a>
      <a href="#collections">Collections</a>
      <a href="#new">New</a>
    </nav>
  </footer>
);

export default Footer;
