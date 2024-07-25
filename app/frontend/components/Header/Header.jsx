import React from "react";
import { useState, useEffect, useRef } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Socials from '../Socials/Socials';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const navMenuRef = useRef(null);
  const Logo = '/assets/malikfelixlogo.svg'

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleOutsideClick = (e) => {
    if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.addEventListener('click', handleOutsideClick);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition === 0 ||
        prevScrollPosition > currentScrollPosition
      ) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

  window.addEventListener('resize', showButton);

  return (
    <nav
      className={`navbar-container ${
        scrollDirection === 'down' && window.scrollY > 0 ? 'hidden' : ''
      }`}
      ref={navMenuRef}
    >
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="malik-felix-logo" />
              <p>
                Malik Felix <span className="header-logo-pipe">| </span>{' '}
                <span className="logo-title">Software Engineer</span>
                <span className="logo-punctuation">.</span>
              </p>
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
        <div className="right">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link className="nav-link" to="/work" onClick={closeMobileMenu}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <Socials className="nav-socials" />
          </ul>
        </div>
      </div>
      <div className="contact-nav-button">
        <PrimaryButton className="contact-cta-button">Contact</PrimaryButton>
      </div>
    </nav>
  );
};

export default Header;
