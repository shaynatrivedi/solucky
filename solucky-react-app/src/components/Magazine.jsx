import React from "react";
import './Magazine.css';


const Magazine = () =>{
    return(
        <section className="magazine-page">
            <div className="magazine-info-div">
                <img className="right-sticky-picture" src="../Assets/Magazine/legs.png" alt="legs"></img>
                <div className="info-text-container">
                    <div className="top-text-container">
                        <div className="header-text-container">
                            <p className="header-brand-text">solucky</p>
                            <p className="header-magazine-text">maga</p>
                            <p className="header-magazine-text">zine</p>
                        </div>
                        <div className="magazine-para-text" id="text-box">
                            At first, solucky began as a blog to share the founder’s passions with family & friends, 
                            where makeup, fashion, organization, decoration, & film intertwined. The blog soon gained 
                            popularity & blossomed into a multifaceted brand thanks to the endless support & 
                            collaboration of the community. In just a year, solucky evolved from a blog into a magazine,
                            fueled by contributions from a devoted team of volunteers. 
                        </div>
                    </div>

                    <div className="bottom-text-container" >
                        <div className="magazine-para-text">
                            Since its first magazine issue in March 2021, solucky has become a publication where every photo, 
                            video, article, & piece of art is infused with the dedication of its contributors. The brand became
                            a platform for a growing community of creatives, each contributing their passions & skills to build 
                            something greater than any one individual. Operating on no budget, each issue is a testament to the 
                            power of collaboration & community, with a unique theme & a space where creativity is not only shared 
                            but celebrated.
                        </div>
                    </div>

                </div>
                <div className="info-buttons-section">
                    <div className="buttons-container">
                        <a className="button-1" href="">
                            <button>
                                <p className="centered-p-bai-jamjuree">subscribe to <i>solucky</i> magazine</p>
                                <img className="button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                            </button>
                        </a>
                        <a  className="button-2" href="">
                            <button>
                                <p className="centered-p-bai-jamjuree">view all magazine media</p>
                                <img className="button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                            </button>
                        </a>
                        <a className="button-3" href="">
                            <button>
                                <p className="centered-p-bai-jamjuree">join the <i>solucky</i> team</p>
                                <img className="button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                            </button>
                        </a>
                    </div>

                    <img className="pointer-text-image" src="../Assets/Magazine/magazine-pointer.png" alt="magazine below ↓"></img>
                </div>


            </div>

            <div className="cover-hover-section">
                <div className="cover-box" id="next-issue-gif"></div>
                <div className="cover-box" id="magazine-23">
                    <img className="magazine-picture" src="../Assets/Magazine/cover23.png" alt="mag23"></img>
                </div>
                <div className="cover-box" id="magazine-22">
                    <img className="magazine-picture" src="../Assets/Magazine/cover22.png" alt="mag22"></img>
                </div>
                <div className="cover-box" id="magazine-21">
                    <img className="magazine-picture" src="../Assets/Magazine/cover21.png" alt="mag21"></img>
                </div>
                <div className="cover-box" id="magazine-20">
                    <img className="magazine-picture" src="../Assets/Magazine/cover20.png" alt="mag20"></img>
                </div>
                <div className="cover-box" id="magazine-19">
                  <img className="magazine-picture" src="../Assets/Magazine/cover19.png" alt="mag19"></img>
                </div>
                <div className="cover-box" id="magazine-18">
                   <img className="magazine-picture" src="../Assets/Magazine/cover18.png" alt="mag18"></img>
                </div>
                <div className="cover-box" id="magazine-17">
                    <img className="magazine-picture" src="../Assets/Magazine/cover17.png" alt="mag17"></img>
                </div>
                <div className="cover-box" id="magazine-16">
                   <img className="magazine-picture" src="../Assets/Magazine/cover16.png" alt="mag16"></img>
                </div>
                <div className="cover-box" id="magazine-15">
                    <img className="magazine-picture" src="../Assets/Magazine/cover15.png" alt="mag15"></img>
                </div>
                <div className="cover-box" id="magazine-14">
                    <img className="magazine-picture" src="../Assets/Magazine/cover14.png" alt="mag14"></img>
                </div>
                <div className="cover-box" id="magazine-13">
                    <img className="magazine-picture" src="../Assets/Magazine/cover13.png" alt="mag13"></img>
                </div>
                <div className="cover-box" id="magazine-12">
                    <img className="magazine-picture" src="../Assets/Magazine/cover12.png" alt="mag12"></img>
                </div>
                <div className="cover-box" id="magazine-11">
                    <img className="magazine-picture" src="../Assets/Magazine/cover11.png" alt="mag11"></img>
                </div>
                <div className="cover-box" id="magazine-10">
                    <img className="magazine-picture" src="../Assets/Magazine/cover10.png" alt="mag10"></img>
                </div>
                <div className="cover-box" id="magazine-9">
                    <img className="magazine-picture" src="../Assets/Magazine/cover9.png" alt="mag9"></img>
                </div>
                <div className="cover-box" id="magazine-8">
                    <img className="magazine-picture" src="../Assets/Magazine/cover8.png" alt="mag8"></img>
                </div>
                <div className="cover-box" id="magazine-7">
                    <img className="magazine-picture" src="../Assets/Magazine/cover7.png" alt="mag7"></img>
                </div>
                <div className="cover-box" id="magazine-6">
                    <img className="magazine-picture" src="../Assets/Magazine/cover6.png" alt="mag6"></img>
                </div>
                <div className="cover-box" id="magazine-5">
                    <img className="magazine-picture" src="../Assets/Magazine/cover5.png" alt="mag5"></img>
                </div>
                <div className="cover-box" id="magazine-4">
                    <img className="magazine-picture" src="../Assets/Magazine/cover4.png" alt="mag4"></img>
                </div>
                <div className="cover-box" id="magazine-3">
                    <img className="magazine-picture" src="../Assets/Magazine/cover3.png" alt="mag3"></img>
                </div>
                <div className="cover-box" id="magazine-2">
                    <img className="magazine-picture" src="../Assets/Magazine/cover2.png" alt="mag2"></img>
                </div>
                <div className="cover-box" id="magazine-1">
                    <img className="magazine-picture" src="../Assets/Magazine/cover1.png" alt="mag1"></img>
                </div>

            </div>
        

        </section>       
    )
}

export default Magazine;