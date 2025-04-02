import React from "react";
import './Media.css';
import Footer from './Footer';

const Media = () => {
    return(
        <div className="media-page">
            <div className="video-text-container">
                <video autoPlay loop muted>
                    <source src="../Assets/Media/text-video.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Media