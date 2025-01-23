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

            <div>
              <p className="cutout-captions">WORTHINGTON velvet long sleeve $7</p>
            </div>

            <div>
              <p className="cutout-captions">AMERICAN apparel plaid skirt $8</p>
            </div>

            <div className="cutout-image">
              <img src='/Assets/Shop/full-cutout.png'></img>
            </div>

            <div>
              <p className="cutout-captions">ALDO boots $12</p>
            </div>

          </div>

        </div>
    );
}

export default Shop;