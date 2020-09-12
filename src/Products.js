import React from "react";
import "./Products.css";

function Products({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small> $ </small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐️ </p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button> Add to Busket </button>
    </div>
  );
}

export default Products;
