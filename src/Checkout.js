import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="chceckout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxyAg73PwsWY_CD83UNMYJhaWPKuPty_fFDQ&usqp=CAU"
          alt="#"
        />
        <h2 className="checkout__title"> Your Shopping Basket</h2>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}

        {/* <div className="product__list">
          {basket.map((product) => {
            console.log("------", product);
            return (
              <div className="product__details">
                <b>{product.title} </b>
                <img src={product.image} alt="#" />
                <span> {product.price} </span>{" "}
                <span className="checkout__rating">
                  {Array(product.rating)
                    .fill()
                    .map((_, i) => (
                      <p> ⭐️ </p>
                    ))}
                </span>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="chceckout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
