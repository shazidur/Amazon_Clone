import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase"; // Firebase authentication
import "react-alice-carousel/lib/alice-carousel.css";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";

// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useStateValue } from "./StateProvider"; // main store

const promise = loadStripe(
  "pk_test_51HSzwrIyXWqKfeud4NvQDJulsMEpVnIsXtNvz2SKKrf8ZX9OCJCQMog6rvT5bgBXfgi9ePP8QbGuuUzxBc396imZ009eS2wf1O"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run while app component load only...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user logged in ...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
