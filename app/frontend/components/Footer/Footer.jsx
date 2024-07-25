import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Socials from '../Socials/Socials';

const Footer = () => {
  const Logo = '/assets/malikfelixlogo.svg'
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-head">
            <div className="footer-logo">
              <img src={Logo} alt="malik-felix-logo"></img>
              <p>
                Malik Felix <span className="footer-logo-pipe">| </span>
                <span className="footer-logo-title">Software Engineer</span>
                <span className="footer-logo-punctuation">.</span>
              </p>
            </div>
            <div className="footer-tagline">
              <p>
                Web development is an art form that requires both creativity and
                technical skill. You find harmony in the balance of the two
                paradigms.
              </p>
            </div>
          </div>
          <div className="footer-links">
            <h2 className="footer-header">Links</h2>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Work</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-services">
            <h2 className="footer-header">Services</h2>
            <ul className="footer-list">
              <li>
                <Link to="/">Mobile First Development</Link>
              </li>
              <li>
                <Link to="/">UX Design</Link>
              </li>
              <li>
                <Link to="/">API Integrations</Link>
              </li>
              <li>
                <Link to="/">Website Maintenance</Link>
              </li>
            </ul>
          </div>
          <div className="footer-connect">
            <h2 className="footer-social-header">Connect with me</h2>
            <Socials />
          </div>
        </div>
        <div className="footer-end">
          <div className="footer-rule"></div>
          <div className="copyright">
            <p>&copy; {currentYear} Malik Felix. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
