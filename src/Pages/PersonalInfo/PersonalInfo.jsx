import React from "react";
import { Field, Form, Formik } from "formik";
import { personalInfoValidator } from "../../validators/PersonalInfo";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import "./Personalinfo.css";
import Header from "../../Components/Header/Header";
const PersonalInfo = () => {
  let initialValues = {
    fullname: "",
    gender: "",
    phoneNumber: "",
    birthday: "",
  };
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        alert("kindly register first");
        navigate("/");
        return;
      }
      await setDoc(doc(db, "users", user.uid), {
        fullname: values.fullname,
        gender: values.gender,
        phoneNumber: values.phoneNumber,
        birthday: new Date(values.birthday).toISOString(),
        createdAt: new Date().toISOString(),
      });
      navigate("/address");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container personal__info">
      <Header data="Personal information" number={2} />
      <Formik
        initialValues={initialValues}
        validationSchema={personalInfoValidator}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            <Field
              className="form__input"
              type="text "
              name="fullname"
              placeholder="Fullname"
            />
            {errors.fullname && <small>{errors.fullname}</small>}
            <div className="form__radio">
              {" "}
              Gender:
              <label htmlFor="">
                <Field type="radio" name="gender" value="male" /> male
              </label>
              <label htmlFor="">
                <Field type="radio" name="gender" value="female" /> female
              </label>
            </div>

            <div className="form__about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>{" "}
              The phone number and birthday are only visible to you
            </div>
            <Field
              type="tel"
              className="form__input"
              name="phoneNumber"
              placeholder="Phone number"
            />
            {errors.phoneNumber && <small>{errors.phoneNumber}</small>}
            <Field
              type="date"
              className="form__input"
              name="birthday"
              placeholder="Birthday"
            />
            <small>
              Let as know you birthday so that you dont missing a gift
            </small>
            {errors.birthday && <small>{errors.birthday}</small>}
            <button>Save information</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
