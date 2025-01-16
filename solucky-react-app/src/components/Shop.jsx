import React from "react";
import "./Shop.css";

const Shop = () => {
    return (
        <div className="shop-page">
          <div className="shop-link-div">
            <p className="shop-link-title">solucky wardrobe</p>
            <a href="https://www.instagram.com/stories/highlights/17897013209879517/?hl=en">
                <button className="shop-link-button">
                    <p className="shop-link-button-text">shop second-hand fashion at affordable pricing</p>
                    <img src="/Assets/Icons/shop-arrow.png" alt="arrow"></img>
                </button>
            </a>

          </div>

        </div>
    );
}

export default Shop;