import * as Yup from 'yup'

export const passwordschema=Yup.object().shape({
    email:Yup.string().email('invalid email').required('Email is required')
})

export const resetpasswordSchema=Yup.object().shape({
    new_password:Yup.string()
    .min(8,'password mustbe be at least 8 characters')
    .required('password is required'),
    retypepassword:Yup.string()
    .oneOf([Yup.ref('new_password'),null],'password must match')
    .required('Confirm password is required')
})