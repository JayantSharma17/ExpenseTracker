import React, { useContext } from "react";
import "./CSS/ProductCard.css";
import { Link } from "react-router-dom";


const productList = ({ productName, price, description,category, img }) => {

  return (
    <div className="item">
      <div className="item-img-container">
      <img src={img} alt="" />
      </div>
      <div className="item-counter">

      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p className="item-name">{productName}</p>
          <p>{category}</p>
         
        </div>
        <p className="item-desc">{description}</p>
        <p className="item-price">${price}</p>
      </div>
      <Link to="/product">
      <button className="show-more-btn" >show more</button>
      </Link>
    </div>
  );
};

export default productList;
