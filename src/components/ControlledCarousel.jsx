import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaDocker } from 'react-icons/fa';
import logo_react from '../assets/img/logo_react.svg';
import logo_ruby from '../assets/img/rails.png';
import logo_docker from '../assets/img/docker.webp';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-10 img-react"
          src={logo_react}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className="h3-react">
            React.js
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10 img-ruby"
          src={logo_ruby}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="h3-ror">
            Ruby on rails
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10 img-docker"
          src={logo_docker}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="h3-docker">
            Docker
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export { ControlledCarousel };
