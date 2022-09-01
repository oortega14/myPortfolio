import React from 'react';
import headerImg from '../assets/img/header-img.svg';

const Main = () => {
  return (
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            alias cumque eum soluta, ullam placeat! Architecto optio
            consectetur, libero consequuntur quasi ipsam quas officiis, tempore
            perspiciatis neque alias ipsa quidem.
          </p>
          <p className="Letsconnect-banner">Let's connect</p>
        </div>
      </div>
      <div className="Banner-section2">
        <img src={headerImg} alt="Astronaut" className="Astronaut-img" />
      </div>
    </section>
  );
};

export default Main;
