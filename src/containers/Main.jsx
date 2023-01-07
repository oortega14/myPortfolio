import React from 'react';
import headerImg from '../assets/img/header-img.svg';
import header from '../assets/img/logo.png';

const Main = () => {
  return (
    <div className='row'>
      <section className="Banner-background">
        <div className="Banner-section1">
          <div className="Container-main">
            <span className="Welcome-msg">Welcome to my Portfolio</span>
            <div className="wrapper">
              <div className="static-txt">Hi, I'm Oscar</div>
                <ul className="dynamic-txt">
                  <li>
                    {' '}
                    <span>Back-end developer</span>{' '}
                  </li>
                  <li>
                    {' '}
                    <span>Front-end developer</span>{' '}
                  </li>
                  <li>
                    {' '}
                    <span> Mobile developer</span>
                  </li>
                </ul>
              </div>
            <p className="Paragraph-banner">
              I'm very glad to see you here! I just wanna tell you I'm a young appasionate developer who likes a lot programming in react.js and ruby on rails. I hope we can connect and make some fun apps.. :3
            </p>
          </div>
        </div>
        <div className="Banner-section2">
          <img src={headerImg} alt="Astronaut" className="Astronaut-img" />
        </div>
      </section>
    </div>
  );
};

export default Main;
