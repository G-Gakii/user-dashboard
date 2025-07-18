import * as Yup from "yup";

export const loginFormValidator = Yup.object({
  email: Yup.string()
    .email("please enter a valid email")
    .required("Please enter an email"),
  password: Yup.string().required("please enter a password"),
});
