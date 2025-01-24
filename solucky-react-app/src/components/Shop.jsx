import React from "react";
import "./Shop.css";

const Shop = () => {
    return (
        <div className="shop-page">
          <div className="top-grid">
            <div className="shop-link-div">
              <div className="shop-link-title">solucky wardrobe</div>
              <a href="https://www.instagram.com/stories/highlights/17897013209879517/?hl=en">
                  <button className="shop-link-button">
                      <p className="shop-link-button-text">shop second-hand fashion at affordable pricing</p>
                      <img src="/Assets/Icons/shop-arrow.png" alt="arrow"></img>
                  </button>
              </a>   
            </div>

            <div className="label-1">
              <p className="cutout-captions cap1">WORTHINGTON velvet long sleeve $7</p>
            </div>

            <div className="label-2" >
              <p className="cutout-captions cap2">AMERICAN apparel plaid skirt $8</p>
            </div>

            <div className="cutout-image">
              <img src='/Assets/Shop/full-cutout.png' alt='outfit-cutout'></img>
            </div>

            <div className="label-3">
              <p className="cutout-captions cap3">ALDO boots $12</p>
            </div>

          </div>

          <div className="horizontal-scroll-section cutout-gallery">
            <div className="cutout-item">
              <img src="Assets/Shop/cutout1.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout2.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout3.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout4.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout5.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout6.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout7.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout8.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout9.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout10.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout11.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout12.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout13.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout14.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout15.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout16.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout17.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout18.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout19.png" alt="cutout-picture"></img>
            </div>

            <div className="cutout-item">
              <img src="Assets/Shop/cutout20.png" alt="cutout-picture"></img>
            </div>
                        
          </div>
            
          <div className="shop-info">
              <div className="info-button-div">
                <div className="shop-header-div">
                  <div className="shop-info-header-text smaller-header">
                    our collection
                  </div>
                  <div className="shop-info-header-text bigger-header">
                    your <i>style</i>
                  </div>
                </div>

                <a className="shop-link" href="https://www.instagram.com/stories/highlights/17897013209879517/?hl=en">
                  <button className="shop-link-button smaller-button">
                    <p className="shop-link-button-text">shop now</p>
                    <img src="/Assets/Icons/shop-arrow.png" alt="arrow"></img>
                  </button>
                </a>
              </div>

              <div className="shop-info-para para-1">
                <p>
                Discover unique <span className="shop-info-para-bold">second-hand</span> treasures from 
                <span className="shop-info-para-bold"> our wardrobe</span>, thoughtfully curated to reflect the themes of each
                <span className="shop-info-para-italic"> solucky magazine</span> issue. Explore our collection of 
                <span className="shop-info-para-bold"> stylish, wallet-friendly</span> pieces that add <span className="shop-info-para-italic"> 
                solucky's</span> creative flair to your closet!
                </p>
              </div>

              <div className="shop-info-para para-2">
                <p>
                Browse our inventory through the <span className="shop-info-para-bold">“solucky store”</span> highlight on 
                <span className="shop-info-para-bold"> Instagram</span> or at occasional <span className="shop-info-para-bold">in-person</span> events. 
                Each curated selection features themes like European Summer, Y2K, 90s Casting Call, & more. Enjoy <span className="shop-info-para-bold">free shipping </span>
                on  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <span className="shop-info-para-bold">orders over $20</span> (additional fees apply for shipping outside California).
                </p>
              </div>

              <div className="sales-final-message">
                <p className="final-sale-cap1">all sales are</p>
                <p className="final-sale-cap2">final</p>
                <p className="final-sale-cap3">no returns or exchanges!</p>
              </div>

              <img className="cloth-pile-image" src="Assets/Shop/clothpile.png" alt="clothes-pile"></img>
            </div>
          <div>

          <div className="footer">
            <div className="footer-card num1">
              <p className="footer-card-title">EXPLORE</p>
              
              <div className="explore-links-container">
                <div className="left-links">
                  <a className="explore-links" href="www.google.com">home</a>
                  <a className="explore-links" href="www.google.com">shop</a>
                  <a className="explore-links" href="www.google.com">magazine</a>
                  <a className="explore-links" href="www.google.com">media</a>
                </div>

                <div className="right-links">
                  <a className="explore-links" href="www.google.com">collabs</a>
                  <a className="explore-links" href="www.google.com">events</a>
                  <a className="explore-links" href="www.google.com">team</a>
                  <a className="explore-links" href="www.google.com">about</a>
                </div>
              </div>
            
            </div>
            <div className="footer-card num2">
              <p className="footer-card-title">JOIN OUR TEAM</p>
              <a className="join-team-links">apply to become a <i>solucky contributor</i></a>
              <a className="join-team-links">apply to become a <i>solucky model</i></a>
            </div>

            <div className="footer-card num3">
              <p className="footer-card-title">GET IN TOUCH</p>
              <div className="touch-link-container">
                <div className="logo-links-div">
                  <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                    <img src="Assets/Shop/insta-shop-link.png" alt='insta-logo'></img>
                  </a>

                  <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                    <img src="Assets/Shop/spotify-link.png"alt='spotify-logo'></img>
                  </a>

                  <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                    <img src="Assets/Shop/linkedin-link.png" alt='linkedin-logo'></img>
                  </a>

                  <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                    <img src="Assets/Shop/pinterest-link.png" alt='pinterest-logo'></img>
                  </a>

                  <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                    <img src="Assets/Shop/tiktok-link.png" alt='tiktok-logo'></img>
                  </a>
                </div>

                <div className="email-link">
                  solucky.contact@gmail.com
                </div>

                <div className="join-team-links">
                click here to subscribe to <i>solucky</i> magazine
                </div>

              </div>
            </div>

            <div className="footer-card num4">
              <p className="footer-card-title">ACKNOWLEDGEMENTS</p>
              <div className="acknowledgement-container">
                <p className="position-name"><span className="bold-position">UX/UI Designer:</span> Shayna Trivedi</p>
                <p className="position-name"><span className="bold-position">Web Developer:</span> Taj Sharma</p>
                <p className="position-name"><span className="bold-position">Content Curators:</span> Sanjana Solanki & Shayari Saha</p>
                <p className="position-name"><span className="bold-position">Consultant:</span> Amani Chowdhury</p>
                <p className="position-name"><span className="bold-position">Brand Photographer & Photo Editor:</span> Amrutha Gururaja</p>
              </div>
            </div>

          </div>
          </div>
        </div>
    );
}

export default Shop;