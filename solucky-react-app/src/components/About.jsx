// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">

        <section className='section section1'>  
          <div className='about-message founder-message'>
            <div className='textbox'>
              <h1 className='text-pt-serif'>From the Founder</h1>
              <p className='para-bai-jamjuree'>
              Sanjana Solanki, a Bay Area native & 2024 Business Administration
              graduate from San Jose State University, created <i>solucky</i> as a creative
              outlet. Her passions for fashion, film, organization, decoration, & 
              makeup, along with her South Asian heritage, consistently shape the 
              brand’s unique vision. Hobbies like thrifting, decorating, & photography 
              inspired her to create <i>solucky</i>, allowing her to showcase these interests
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
              <h1 className='text-pt-serif'>The Brand</h1>
              <p className='para-bai-jamjuree'>
              Founded by Sanjana in August 2020, the brand draws its name from a cherished 
              childhood memory. Inspired by her father's endearing reference to their family
              as "so-lucky," the name "<i>solucky</i>" was chosen to reflect a personal connection
              & resonate as a catchy, memorable brand identity.
              </p>
            </div>
          </div>
        </section>

        <section className='section section3'>
          <img className='about-image-4' src='../Assets/About/2.png' alt='overlap-image' ></img> 
          <img className='about-image-5' src='../Assets/About/10.png' alt='overlap-image' ></img> 
          <img className='about-image-6' src='../Assets/About/4.png' alt='overlap-image' ></img> 
        </section>

        <section className='section section4'>
          <div className='about-message story-message'>
            <div className='textbox2'>
              <h1 className='text-pt-serif'>Our Story</h1>
              <p className='para-bai-jamjuree'>
              Initially envisioned as a blog to share the Founder’s creative passions with
              loved ones, <i>solucky</i> took an unexpected turn just before its launch. Collaborating
              with close friends to offer limited-time items, the brand swiftly transformed into
              the multi-dimensional creative force it is today.
              </p>
            </div>
          </div>
        </section>

        <section className='section section5'>
        </section>
        

    </div>
  );
}

export default About;
