import React from "react";
import "./Products.css";

import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  // console.log("check basket", state.basket);

  const addToBasket = () => {
    console.log(" this product...");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}> Add to Busket </button>
    </div>
  );
}

export default Products;
