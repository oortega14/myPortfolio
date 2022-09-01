import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
  return (
    <>
      <section className="NavBar">
        <div className="NavBar-title">
          <h1>Oscar's Portfolio</h1>
        </div>
        <div className="NavBar-links">
          <ul className="NavBar-list">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li className="social-networks">
              <div className="social-networks-links">
                <img src={navIcon1} alt="Linkedin" />
              </div>
              <div className="social-networks-links">
                <img src={navIcon2} alt="Linkedin" />{' '}
              </div>
              <div className="social-networks-links">
                <img src={navIcon3} alt="Linkedin" />{' '}
              </div>
            </li>
            <li className="letsconnect">Let's connect</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavBar;
