import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string("Email should string...")
      .min(6, "Password must be at least 6 characters")
      .email("Entered value should be email only...")
      .required("Email is required ..."),
    password: yup
      .string("Password should string...")
      .required("Password is required ..."),
    name: yup.string("Name should string...").required("Name is required ..."),
    role: yup.string("Role should string...").required("Role is required ..."),
  })
  .required();

export default schema;
