// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">

        <section className='section section1'>  
          <div className='about-message founder-message'>
            <div className='textbox'>
              <h1>From the Founder</h1>
              <p>
              Sanjana Solanki, a Bay Area native & 2024 Business Administration
              graduate from San Jose State University, created solucky as a creative
              outlet. Her passions for fashion, film, organization, decoration, & 
              makeup, along with her South Asian heritage, consistently shape the 
              brand’s unique vision. Hobbies like thrifting, decorating, & photography 
              inspired her to create solucky, allowing her to showcase these interests
              & collaborate with some of the most dedicated & hardworking people she
              has ever met.
              </p>
            </div>
          </div>
          <img className='about-image-1' src='../Assets/About/5.png' alt='overlap-image' ></img> 
        </section>
        
        <section className='section section2'>
          <img className='about-image-2' src='../Assets/About/3.png' alt='overlap-image' ></img> 
          <img className='about-image-3' src='../Assets/About/6.png' alt='overlap-image' ></img> 

          <div className='about-message brand-message'>
            <div className='textbox2'>
              <h1>The Brand</h1>
              <p>
              Founded by Sanjana in August 2020, the brand draws its name from a cherished 
              childhood memory. Inspired by her father's endearing reference to their family
              as "so-lucky," the name "solucky" was chosen to reflect a personal connection
              & resonate as a catchy, memorable brand identity.
              </p>
            </div>
          </div>
        </section>

        <section className='section section3'>
        </section>

        <section className='section section4'>
        </section>

        <section className='section section5'>
        </section>
        

    </div>
  );
}

export default About;
