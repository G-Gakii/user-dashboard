import React from "react";
import Header from "../../Components/Header/Header";
import { Field, Form, Formik } from "formik";
import "./ManualAddress.css";
import { getAuth } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { AddressInfoValidator } from "../../validators/Address";
import { useNavigate } from "react-router-dom";

const ManualAddress = () => {
  const navigate = useNavigate();
  let initialValues = {
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipcode: "",
  };
  const handlesubmit = async (values) => {
    try {
      let user = getAuth().currentUser;
      if (!user) {
        alert("kindly register first");
        navigate("/");
      }
      await updateDoc(doc(db, "users", user.uid), {
        street: values.street,
        apartment: values.apartment,
        city: values.city,
        state: values.state,
        zipcode: values.zipcode,
      });
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Header data="Add address" number={3} />
      <Formik
        initialValues={initialValues}
        onSubmit={handlesubmit}
        validationSchema={AddressInfoValidator}
      >
        {({ errors }) => (
          <Form>
            <div className="form__input">
              <label htmlFor="street">street address</label>
              <Field
                type="text"
                name="street"
                placeholder="319 Bainbridge Street"
              ></Field>
            </div>
            {errors.street && <small className="error">{errors.street}</small>}

            <div className="form__input">
              <label htmlFor="text" className="label_one">
                <span>apartment</span> <span>Optional</span>
              </label>
              <Field type="text" name="apartment"></Field>
            </div>
            {errors.apartment && (
              <small className="error">{errors.apartment}</small>
            )}
            <div className="form__input">
              <label htmlFor="text">city</label>
              <Field type="text" name="city" placeholder="New York"></Field>
            </div>
            {errors.city && <small className="error">{errors.city}</small>}
            <div className="address__location">
              <div className="form__input">
                <label htmlFor="text">State</label>
                <Field type="text" name="state" placeholder="New York"></Field>
                {errors.state && (
                  <small className="error">{errors.state}</small>
                )}
              </div>
              <div className="form__input">
                <label htmlFor="text">Zip code</label>
                <Field type="text" name="zipcode" placeholder="11233"></Field>
                {errors.zipcode && (
                  <small className="error">{errors.zipcode}</small>
                )}
              </div>
            </div>
            <button type="submit">Save information</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ManualAddress;
