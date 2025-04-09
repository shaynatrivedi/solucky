import React from "react";
import './Collabs.css';
import Footer from './Footer';

const Collabs = () =>{
    return(
        <div className="collabs-page">
            <div className="top-section">
                <div className="content-container-grid">
                    <div className="create-image-container">
                        <img className="svg-image" alt="create-with-solucky" src="../Assets/Collabs/create-image.svg"></img>
                    </div>
                    <div className="collab-paragraph-container">
                        <div className="magazine-para-text">
                            A collaboration with solucky creates a seamless partnership 
                            between your business & our creative brand. Simply send us 
                            your products, & our team of experts including models, 
                            production crew, & creative directors will take care of the
                            rest. After the shoot(s), we’ll return your products along
                            with high-quality content that you can freely use across 
                            your social media platforms.
                        </div>
                        <div className="magazine-para-text">
                            Additionally, this content will be featured on our social 
                            media channels & website, expanding your reach & boosting 
                            engagement. All that we ask in return is that you credit our 
                            brand & team, along with our collaboration title. If desired, 
                            we’re happy to collaborate on the creative direction, ensuring 
                            a vision both parties love.
                        </div>
                        <div className="magazine-para-text">
                            Email solucky.contact@gmail.com to collab with us!
                        </div>
                    </div>
                    <div className="bracelet-svg-container">
                        <img className="svg-bracelet" alt="bracelet" src="../Assets/Collabs/bracelet.svg"></img>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="view-archive-text-container">
                    <img className="view-archive-svg" src="../Assets/Collabs/view-archive-text.svg"></img>
                </div>
                <div className="horizontal-scroll-section">

                </div>
            </div>

            
        </div>
    )
}

export default Collabs
