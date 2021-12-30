import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";
import { MdArrowBackIos } from "react-icons/md";

function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry="US" value={value} />
      <p>
        By entering your number, you're agreeing to our
        <span> Terms of service and Privacy Policy. </span>Thanks!
      </p>
    </div>
  );
}

export default PhoneConfirmation;
