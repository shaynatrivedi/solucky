import './Events.css';
import React from 'react';
import Footer from './Footer';

const Events = () =>{
    return(
        <div className='events-page'>
            <section className='landing-section'>
                <div className='iphone-paragraph-container'>
                    <div className='iphone-container'>
                        <img src='../Assets/Events/iphone.png' className="iphone-pic" alt="iphone"></img>
                    </div>
                    <div className='para-text-container'>
                        <img src="../Assets/Events/theartof-text.png" alt="the-art-of"></img>
                        <p className='events-header-text'>connection</p>
                        <p className='events-para-text'>
                            Our brand thrives on bringing creative energy  to life through events & pop-up shops that
                            foster community connections. From our anniversary parties to holiday celebrations, each
                            gathering highlights culture, collaboration, & artistry. 
                        </p>
                        <p className='events-para-text'>
                            Moving forward, plan to expand our events with casual picnics, cultural celebrations, immersive
                            experiences, & more. We aim to unite people in fresh & impactful ways, crafting memorable moments 
                            beyond the pages of our magazine. 
                        </p>
                        <img src="../Assets/Events/stay-tuned-text.svg" alt="the-art-of"></img>
                    </div>
                </div>

            </section>
            <section className='moving-strip'>
                <p className='strip-text'> Placeholder text yay!</p>
            </section>
            <section className='events-section'>
                <div className='hover-section'>
                    <img src='../Assets/Events/4th-anni.png' alt='event-background' className='event-picture'></img>
                    <a href="https://www.youtube.com/watch?v=ZZ5ioM_5n6A">
                        <button className="gallery-button">
                            <p className='event-button-text'>view gallery </p>
                            <img src='../Assets/Team/apply-arrow.png' alt="->"></img>
                        </button> 
                    </a>
                </div>

                <div className='hover-section'>
                    <img src='../Assets/Events/diwali-event.png' alt='event-background' className='event-picture'></img>
                    <a href="https://www.youtube.com/watch?v=ZZ5ioM_5n6A">
                        <button className="gallery-button">
                            <p className='event-button-text'>view gallery </p>
                            <img src='../Assets/Team/apply-arrow.png' alt="->"></img>
                        </button>  
                    </a>
                </div>

                <div className='hover-section'>
                    <img src='../Assets/Events/halloween-event.png' alt='event-background' className='event-picture'></img>
                    <a href="https://www.youtube.com/watch?v=ZZ5ioM_5n6A">
                        <button className="gallery-button">
                            <p className='event-button-text'>view gallery </p>
                            <img src='../Assets/Team/apply-arrow.png' alt="->"></img>
                        </button>  
                    </a>

                </div>

                <div className='hover-section'>
                    <img src='../Assets/Events/3rd-anni.png' alt='event-background' className='event-picture'></img>
                    <a href="https://www.youtube.com/watch?v=ZZ5ioM_5n6A">
                        <button className="gallery-button">
                            <p className='event-button-text'>view gallery </p>
                            <img src='../Assets/Team/apply-arrow.png' alt="->"></img>
                        </button>  
                    </a>
                </div>

                <div className='hover-section'>
                    <img src='../Assets/Events/clothing-tour.png' alt='event-background' className='event-picture'></img>
                    <a href="https://www.youtube.com/watch?v=ZZ5ioM_5n6A">
                        <button className="gallery-button">
                            <p className='event-button-text'>view gallery </p>
                            <img src='../Assets/Team/apply-arrow.png' alt="->"></img>
                        </button>  
                    </a>
                </div>
                
            </section>    
        <Footer/>
        </div>
        
    )
}


export default Events;