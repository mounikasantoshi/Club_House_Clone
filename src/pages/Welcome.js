import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.welcomeInfo}>
        <p>
          We're Working hard to get clubhouse ready for everyone! While we wrap
          up the finishing touches,we're adding people gradually to make sure
          nothing breaks We're Working hard to get clubhouse ready for everyone!
          While we wrap up the finishing touches,we're adding people gradually
          to make sure nothing breaks We're Working hard to get clubhouse ready
          for everyone! While we wrap up the finishing touches,we're adding
          people gradually to make sure nothing breaks
        </p>
        <p>
          We're Working hard to get clubhouse ready for everyone! While we wrap
          up the finishing touches,we're adding people gradually to make sure
          nothing breaks
        </p>
        <p>adding people gradually to make sure nothing breaks</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username
        </Link>
        <Link to="/sign">Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}

export default Welcome;
