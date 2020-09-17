import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";

import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run while app component load only...
    auth.onAuthStateChanged((authUser) => {
      console.log(" This is a real user..... ", authUser);
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
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
