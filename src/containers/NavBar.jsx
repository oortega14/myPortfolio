import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { AiOutlineHome } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className='row'>
      <section className="NavBar">
        <div className="col-3 d-flex align-items-center justify-content-center">
          <h1>Oscar's Portfolio</h1>
        </div>
        <div className="col-3 d-flex NavBar-links">
          <ul className="NavBar-list">
            <li><AiOutlineHome className='NavBar-home-icon'/></li>
            <li className='NavBar-home-icon'>Skills</li>
            <li className='NavBar-home-icon'>Projects</li>
          </ul>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-start" >
          <ul>
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
          </ul>
        </div>
        <div className="col-3 d-flex ">
          <ul className="link-container">
              <li className="letsconnect">Let's connect</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
