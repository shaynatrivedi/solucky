// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
        {/* <div className='about-bg-1'>
            <img src='Assets/About/about-bg-1.png' alt='background 1'/>
        </div> */}

        <bgsection className='section section1'>
          <p>we here at section1</p>
        </bgsection>

        <bgsection className='section section2'>
          <p>we here at section2</p>
        </bgsection>

        <bgsection className='section section3'>
          <p>we here at section3</p>
        </bgsection>

    </div>
  );
}

export default About;
