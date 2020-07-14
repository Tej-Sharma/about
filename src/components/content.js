import React from 'react'
import Hero from './hero';
import ProjectOverview from './project_overview';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Contact from './contact';

export default function content() {
  return (
    <div >
      <AwesomeSlider animation="cubeAnimation"
        bullets={false}
        >
        <div className="">
          <Hero />
        </div>
        <div className="">
          <ProjectOverview />
        </div>
        <div className="">
          <Contact />
        </div>
      </AwesomeSlider>
    </div>
  )
}
