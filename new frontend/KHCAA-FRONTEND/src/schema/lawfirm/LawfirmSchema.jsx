import * as Yup from 'yup'

export const NotificationSchema=Yup.object().shape({
    content:Yup.string()
    .min(10,'Notification must be at least 10 characters')
    .required('this field is required'),
    title:Yup.string()
    .min(10,'title must be at least 10 character')
    .required('this field is required')
})