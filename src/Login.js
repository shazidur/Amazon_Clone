import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth // fireBase login will be here.....
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth // if the account created successfully
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    // fireBase register here
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=" "
        />
      </Link>
      <div className="login__container">
        <h1> Sign-in</h1>
        <form>
          <h5> E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign-in
          </button>
        </form>
        <p>
          By signing-in your agree to the Amazon Fake Clone Condition of use &
          sale. Please see out privacy Notice, out cookies Notice.
        </p>
        <button
          type="submit"
          className="login__registrationButton"
          onClick={register}
        >
          Create new Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
