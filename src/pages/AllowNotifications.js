import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

function AllowNotifications() {
  return (
    <div className={style.phoneConfirmContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h1 className="mb-3">
          Enable notifications to know when people are talking
        </h1>
        <div className={style.notificationContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would like to send you notifications</h3>
            <p>Notifications may include alerts, sounds, and icon badges</p>
          </div>
          <div className={style.action_btn}>
            <Link exact to="/home">
              Don't Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
            <img
              className={style.hand_icon}
              src="https://www.downloadclipart.net/large/22840-pointer-finger-design.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotifications;
