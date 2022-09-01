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
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/oscar-ortega-guerrero-94ba76243/"
                  target="blank"
                >
                  <img src={navIcon1} alt="Linkedin" />
                </a>
              </div>

              <div className="social-links">
                <a href="https://www.facebook.com/OsqarOrtega" target="blank">
                  <img src={navIcon2} alt="Facebook" />{' '}
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/osqarortega/" target="blank">
                  <img src={navIcon3} alt="Instagram" />{' '}
                </a>
              </div>
            </li>
            <div className="link-container">
              <li className="letsconnect">Let's connect</li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavBar;
