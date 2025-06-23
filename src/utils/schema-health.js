import * as yup from 'yup'

export const schemaCreateHealth = yup.object({
  type: yup.string().min(3,"Type should be more than 3 digits").max(30).required("Type is required"),
  value: yup.string().min(3,"Value should be more than 3 digits").max(30).required("Value is required")
})