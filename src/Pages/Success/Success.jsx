import React from "react";
import "./Success.css";
import success_img from "../../assets/Image.png";
import { useNavigate } from "react-router-dom";

const Success = () => {
  let navigate = useNavigate();
  return (
    <div className="container success">
      <img className="success_img" src={success_img} alt="" />
      <h2 className="success_h2">You are successfully registered</h2>
      <div className="div_btn">
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Go to login
        </button>
      </div>
    </div>
  );
};

export default Success;
