 import * as yup from "yup"
 
 const registerSchema = yup.object({
    fullName:yup.string().required('Full Name is required').min(3,"Full Name must be at least 3 char"),
    userName:yup.string().required('User Name is required').min(3,"User Name must be at least 3 char"),
    email:yup.string().required('Email is required').email("Invalid email format"),
    password:yup.string().required('Password is required')
    .matches(/[A-Z]/,"Password must be contain a capital letter")
    .matches(/[a-z]/,"Password must be contain a small letter")
    .matches(/[0-9]/,"Password must be contain a number")
    .min(8,"password must be at least 8 char"),
    phoneNumber:yup.string().required('Phone Number is required').matches(/^05\d{8}$/,"phone number must be have a numbers"),
  })
  export default registerSchema