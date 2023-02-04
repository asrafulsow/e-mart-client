import React from "react";
import logo from "../../../images/logo.png";

const RecentVIew = () => {
  return (
    <div className="card lg:card-side shadow-xl w-52">
      <figure>
        <img src={logo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default RecentVIew;
