import React from "react";
import "./Socials.css";
import facebook from "../../assets/Shape.png";
import google from "../../assets/super-g.png";
import apple from "../../assets/Apple.png";
import {
  googleProvider,
  auth,
  appleProvider,
  facebookProvider,
} from "../../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Socials = () => {
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLoginWithApple = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLoginWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="socials">
      <button className="social__button" onClick={handleLoginWithApple}>
        {" "}
        <img src={apple} alt="apple logo" />
      </button>
      <button className="social__button" onClick={handleLoginWithFacebook}>
        <img src={facebook} alt="facebook logo" />
      </button>
      <button className="social__button" onClick={handleLoginWithGoogle}>
        {" "}
        <img src={google} alt="google logo" />
      </button>
    </div>
  );
};

export default Socials;
