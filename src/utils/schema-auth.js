import * as Yup from 'yup'

export const schemaRegisterForUser = Yup.object({
  username: Yup.string().min(3,"Username should be more than 3 digits").max(30).required("Username is required"),
  password: Yup.string().min(3,"Password should be more than 3 digits").max(30).required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"),null],"Password is not match").required("Confirm Password is required")
})
export const schemaRegisterForDoctor = Yup.object({
  username: Yup.string().min(3,"Username should be more than 3 digits").max(30).required("Username is required"),
  password: Yup.string().min(3,"Password should be more than 3 digits").max(30).required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"),null],"Password is not match").required("Confirm Password is required"),
  specialization: Yup.string().max(30).required("specialization is required"),
})

