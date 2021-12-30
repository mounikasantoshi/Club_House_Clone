import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { CgArrowLongRightC } from "react-icons/cg";

function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/get_username" className={style.backBtn}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png" />
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to="/allow_notification"
        className=" btn btn-primary  "
        style={{
          borderRadius: "40px",
          width: "80px",
          color: "white",
          height: "35px",
          backgroundColor: "#3287b7",
          fontSize: "13px",
        }}
      >
        Next <CgArrowLongRightC />
      </Link>
    </div>
  );
}

export default CodeConfirm;
