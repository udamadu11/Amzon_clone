import React from "react";
import { Link } from "react-router-dom";

import Styles from "./login.module.css";

function Login(props) {
  return (
    <div className={Styles.login}>
      <Link>
        <img
          className={Styles.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className={Styles.login__container}>
        <h1>Sign in</h1>
        <form>
          <h2>Email</h2>
          <input type="email" />
          <h2>Password</h2>
          <input type="password" />
          <buuton type="submit" className={Styles.login__signInButton}>
            Sign in
          </buuton>
        </form>
        <p>By sign-in, you agree to Amazon's Terms and Conditions</p>
        <button className={Styles.login__registrationButton}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
