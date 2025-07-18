import * as Yup from "yup";
export const AddressInfoValidator = Yup.object({
  street: Yup.string().required("Street required"),
  apartment: Yup.string(),

  city: Yup.string().required("City required"),
  state: Yup.string().required("State required"),
  zipcode: Yup.string().required("Zip code required"),
});
