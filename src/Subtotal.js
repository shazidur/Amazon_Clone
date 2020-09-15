import React from "react";
import "./Subtotal.css";
import CurrencyFrmat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFrmat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items) : <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />

      <button> Proceed to Checkout </button>
    </div>
  );
}

export default Subtotal;
