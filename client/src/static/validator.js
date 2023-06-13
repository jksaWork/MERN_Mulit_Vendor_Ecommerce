import * as Yup from "yup";

export const LoginValidator = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .email("Type Valid Email"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
