import * as Yup from "yup";

export const personalInfoValidator = Yup.object({
  fullname: Yup.string().required("Fullname required"),
  gender: Yup.string()
    .required("gender required")
    .oneOf(["male", "female"], "Gender must be either male or female"),
  birthday: Yup.date().max(new Date(), "Date must be in the past"),
  phoneNumber: Yup.string().required("Phone number required"),
});
