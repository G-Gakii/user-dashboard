import * as Yup from "yup";

export const registrationFormValidator = Yup.object({
  email: Yup.string()
    .email("please enter a valid email")
    .required("Please enter an email"),
  password: Yup.string()
    .required("please enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Use 8+ characters with uppercase, lowercase, number & special symbol."
    ),
});
