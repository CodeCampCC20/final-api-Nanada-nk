import * as yup from 'yup'

export const schemaCreateDoctorNote = yup.object({
  note: yup.string().min(3,"Note should be more than 3 digits").max(30).required("Note is required")
})