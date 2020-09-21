import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import "./Payment.css";
import CurrencyFrmat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db } from "./Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // create a secret stripe that allows us to charge a customer
    const getClientSecret = async () => {
      console.log("from use effect");
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100} `,
      });
      console.log("API response >>>>>", response.data);
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the clientSecret is >>>>", clientSecret);

  // --------------------------------
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  // --------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(" finish submit process ....");
    setProcessing(true); //stripe functions

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

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
          <div className="payment__title">
            <h3> Payment Method ... </h3>
          </div>
          <div className="payment__details">
            {/* stripe will be here....  */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFrmat
                  renderText={(value) => <h3> Order Total {value} </h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? <p> Processing ... </p> : "Buy Now"}
                  </span>
                </button>
              </div>
              {/* Error  here */}
              {error && <div> {error} </div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
