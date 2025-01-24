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
              Discover unique second-hand treasures from our wardrobe, thoughtfully curated to reflect the themes of each
              solucky magazine issue. Explore our collection of stylish, wallet-friendly pieces that add solucky’s 
              creative flair to your closet!
              </p>
            </div>

            <div className="shop-info-para para-2">
              <p>
              Browse our inventory through the “solucky store” highlight on Instagram or at occasional in-person events. 
              Each curated selection features themes like EuropeanSummer, Y2K, 90s Casting Call, & more. Enjoy free shipping 
              on  
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              orders over $20 (additional fees apply for shipping outside California).
              </p>
            </div>

            <div className="sales-final-message">
              <p className="final-sale-cap1">all sales are</p>
              <p className="final-sale-cap2">final</p>
              <p className="final-sale-cap3">no returns or exchanges!</p>
            </div>


            <img className="cloth-pile-image" src="Assets/Shop/clothpile.png" alt="clothes-pile"></img>
          </div>



        </div>
    );
}

export default Shop;