import React from 'react'
import { ControlledCarousel } from '../components/ControlledCarousel';
import colorSharp from "../assets/img/color-sharp.png"

const Skills = ({ skillsRef }) => {
  return (
    <div className='row skill'ref={skillsRef}>
      <div className="col-12">
      <div className="skill-bx">
          <h2>Skills</h2>
          <p className='paragraph-skills'>My best programming skills are:</p>
          <div className='d-flex justify-content-center'>
            <ControlledCarousel className='carousel'/>
          </div>
      </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </div>
  )
}

export { Skills };