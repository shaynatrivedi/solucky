import React from "react";
import './Team.css'

const Team = () =>{
    return(
        <div className="team-page">
            <section className="team-join">
                <div className="join-card">
                    <div className="join-card-text">
                        <h1 className="team-title">Our Team</h1>
                        <h3 className="team-title-caption"><i>What does a team contributor do?</i></h3>
                        <p className="centered-p-bai-jamjuree">
                            Our volunteers dedicate their time & effort to making 
                            the brand what it is today while gaining valuable creative
                            work experience in their fields of interest.
                        </p>
                    </div>
                    <div className="join-card-buttons">
                        <h3 className="join-header team-title-caption"><i>Want to join our team?</i></h3>
                        <div className="apply-button-section">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe81g9uPNPingKHngREZ5MpHuUFtI-zXEeOLqVayNIC6Ba2Sg/viewform">
                                <button type="button">
                                    <p className="apply-textbox centered-p-bai-jamjuree">apply to be a <i>solucky</i> contributor</p>
                                    <img src="/Assets/Team/apply-arrow.png" alt="arrow"></img>
                                </button>
                            </a>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZog6msmIUc8K_dc2SsmXIWx7oEGcV4E1PE9WHw0KxKNjEwg/viewform">
                                <button type="button">
                                    <p className="apply-textbox centered-p-bai-jamjuree">apply to be a <i>solucky</i> model</p>
                                    <img src="/Assets/Team/apply-arrow.png" alt="arrow"></img>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </section>

            <section className="behind-the-scenes">
                <div className="bts-container">
                    <h3 className="bts-title"> BEHIND THE SCENES</h3>
                    <div className="bts-images">
                        <img className='bts-image-1' src='../Assets/Team/BTS/image1.png' alt='film-image' ></img>
                        <img className='bts-image-2' src='../Assets/Team/BTS/image2.png' alt='film-image' ></img>
                        <img className='bts-image-3' src='../Assets/Team/BTS/image3.png' alt='film-image' ></img>
                        <img className='bts-image-1' src='../Assets/Team/BTS/image1.png' alt='film-image' ></img>
                        <img className='bts-image-2' src='../Assets/Team/BTS/image2.png' alt='film-image' ></img>
                        <img className='bts-image-3' src='../Assets/Team/BTS/image3.png' alt='film-image' ></img>
                        <img className='bts-image-1' src='../Assets/Team/BTS/image1.png' alt='film-image' ></img>
                        <img className='bts-image-2' src='../Assets/Team/BTS/image2.png' alt='film-image' ></img>
                        <img className='bts-image-3' src='../Assets/Team/BTS/image3.png' alt='film-image' ></img>
                        <img className='bts-image-1' src='../Assets/Team/BTS/image1.png' alt='film-image' ></img>
                        <img className='bts-image-2' src='../Assets/Team/BTS/image2.png' alt='film-image' ></img>
                    </div>
                </div>
            </section>

            <section className="team-members">
                <div className="main-team-card">
                    <div className="main-team-card-header">
                        <h1 className="team-operations-title">current team members</h1>
                        <p className="team-operations-title-caption">
                        *Click on any team member's photo to visit their Instagram
                        </p>
                    </div>

                    <div className="founder">
                        <h3 className="team-position-title">Founder</h3>
                        <div className="post-div">
                            <div className="post-header">
                                <div className="post-left-group">
                                    <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                    <p className="post-account-name">solucky.life</p>
                                </div>
                                <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                            </div>
                            <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaSolanki.png' alt='founder-image'></img>

                            <div className="post-bottom-div">
                                <div className="post-icons">
                                    <div className="post-icons-left-group">
                                        <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                        <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                        <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                    </div>
                                    <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                </div>
                        
                                <div className="post-text">
                                    <p>
                                       <span className="post-account-name">
                                        solucky.life </span> 
                                        MEET SANJANA SOLANKI (she/her) 🦚 
                                        <span className="specific-position">The Founder</span> 
                                    </p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    
                    <div className="brand-operations">
                        <div className="brand-operations-header">
                            <h3 className="team-position-title">Brand Operations</h3>
                            <div className="horizontal-scroll-section">
                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/ShayariSaha.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SHAYARI SAHA (she/her) 🐳 
                                                <span className="specific-position">Producer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnujaPandit.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANJUA PANDIT (she/her) 🤍
                                                <span className="specific-position">Assistant Creative Director</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AlinaJafri.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ALINA JAFRI (she/her) 🌺
                                                <span className="specific-position">Assistant Creative Director</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AmaniChowdhury.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET AMANI CHOWDHURY (she/her) 🐬
                                                <span className="specific-position">Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnanyaDutta.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANANYA DUTTA (she/her) ❣️
                                                <span className="specific-position">Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
    
                            </div>
                        </div>

                        <div className="brand-operations-gallery">

                        </div>

                    </div>

                    <div className="production">
                        <h3 className="team-position-title">Production</h3>
                    
                    </div>

                    <div className="social-media">
                        <h3 className="team-position-title">Social media</h3>
                    
                    </div>

                    <div className="magazine-publishing">
                        <h3 className="team-position-title">Magazine Publishing</h3>
                    
                    </div>

                    <div className="aesthetic-photographers">
                        <h3 className="team-position-title">Aesthetic photographers</h3>
                    
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Team