import React from "react";
import { Formik, Form, Field } from "formik";
import { registrationFormValidator } from "../../validators/Register";
import { auth } from "../../Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { loginFormValidator } from "../../validators/login";

const AuthForm = () => {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();
  const location = useLocation();
  let myLocation = location.pathname;

  const handleRegister = async (values) => {
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/personal-info");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("This email is already registered. Try logging in instead.");
            navigate("/login");
            break;
        }
      } else {
        console.log(error);
      }
    }
  };
  const handleSignIn = async (values) => {
    const { email, password } = values;
    console.log("start");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            alert("invalid credential");
            break;
        }
      }
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        myLocation === "/" ? registrationFormValidator : loginFormValidator
      }
      onSubmit={myLocation === "/" ? handleRegister : handleSignIn}
    >
      {({ errors }) => (
        <Form>
          <div className="form__input">
            <label htmlFor="email">Email address</label>
            <Field
              type="email"
              name="email"
              placeholder="example@example.com"
            ></Field>
          </div>
          {errors.email && <small>{errors.email}</small>}
          <div className="form__input">
            <label htmlFor="password">password</label>
            <Field
              type="password"
              name="password"
              placeholder="*********"
            ></Field>
          </div>
          {errors.password && <small>{errors.password}</small>}
          <button className="form__button" type="submit">
            {myLocation === "/" ? "Create account" : "Login to Dashboard"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
