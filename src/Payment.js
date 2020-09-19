import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( <Link to="./checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section delivary address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery Address </h3>
          </div>
          <div className="payment__address">
            <p> {user?.email} </p>
            <p> 123 Itabashi </p>
            <p> Tokyo, Japan </p>
          </div>
        </div>

        {/* Payment section review items  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review item and delivary </h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section Payment method */}
        <div className="payment__section">
          <div className="payment__details">
            {/* stripe will be here....  */}
            <h3> Payment Method ... </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
