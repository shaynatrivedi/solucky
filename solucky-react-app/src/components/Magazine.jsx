import React from "react";
import './Magazine.css';


const Magazine = () =>{
    return(
        <section className="magazine-page">
            <div className="magazine-info-div">
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

                    <div className="bottom-text-coontainer" >
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
                <div className="info-button-containter">
                    buttons!
                </div>
            </div>

            <img className="right-sticky-picture" src="../Assets/Magazine/legs.png" alt="legs"></img>
        

        </section>       
    )
}

export default Magazine;