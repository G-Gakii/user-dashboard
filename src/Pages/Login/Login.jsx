import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import AuthForm from "../../Components/Form/AuthForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <Navbar />
      <Socials />
      <AuthForm />

      <div className="form__checkbox">
        <div></div> <span>Remember me</span>
      </div>
    </div>
  );
};

export default Login;
