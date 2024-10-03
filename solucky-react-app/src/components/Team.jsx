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

            <section className="team-members">
                <div className="main-team-card">
                    <div className="main-team-card-header">
                        <h1 className="team-title">current team members</h1>
                        <p className="team-title-caption">
                        *Click on any team member's photo to visit their Instagram
                        </p>
                    </div>
                    
                    <h1>that smellshit</h1>
                    <h1>that smellshit</h1>
                    <h1>that smellshit</h1>
                    <h1>that smellshit</h1>
                    <h1>that smellshit</h1>
                </div>
            </section>
        </div>
    );
}

export default Team