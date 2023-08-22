import * as yup from "yup";

export const schema = yup.object().shape({
  user: yup.string().required("write username"),

  password: yup
    .string()
    .min(4, "password is more then 4.")
    .max(15, "password is less than 15.")
    .required("write password"),

  email: yup.string().required("write email"),

  phone: yup.string().required("write phone"),
});
