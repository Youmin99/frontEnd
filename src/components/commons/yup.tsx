import * as yup from "yup";

export const schema = yup.object().shape({
  writer: yup.string().required("write writer"),

  password: yup
    .string()
    .min(4, "password is more then 4.")
    .max(15, "password is less than 15.")
    .required("write password"),

  title: yup.string().required("write title"),

  contents: yup.string().required("write contents"),

  boardAddress: yup.object().shape({
    zipcode: yup.string().optional(),
    address: yup.string().optional(),
    addressDetail: yup.string().optional(),
  }),

  youtubeUrl: yup.string().optional(),
});
