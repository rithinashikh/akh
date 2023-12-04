import * as Yup from 'yup'

export const AdvocateRegisterSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z\s']+$/, 'Name can only contain letters, spaces, and apostrophes')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters')
        .required('Name is required'),

    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    date_of_birth: Yup.date()
        .nullable()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth cannot be in the future')
        .test('is-age-eligible', 'You must be at least 23 years old', function (value) {

            if (!value) {

                return false;
            }

            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();


            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                return age >= 23 - 1;
            }

            return age >= 23;
        }),

    enrollment_id: Yup.string()
        // .matches(/^[A-Z0-9]+$/i, 'Invalid enrollment ID format')
        .required('Enrollment ID is required'),
    specialization: Yup.string()
        .min(2, 'Specialization must be at least 2 characters')
        .required('Specialization is required'),
    address: Yup.string()
        .min(5, 'Address must be at least 5 characters')
        .required('Address is required'),
    profile_image: Yup.mixed()
        .required('Profile image is required')
        .test({
            name: 'fileSize',
            test: function (value) {
                if (!value) {
                    return false;
                }

                // Assuming value is a File object
                const isSizeValid = value.size <= 1024 * 1024; // 1 MB
                return isSizeValid;
            },
            message: 'Image size must be less than 1 MB',
        })
        .test({
            name: 'fileType',
            test: function (value) {
                if (!value) {
                    return false;
                }

                // Assuming value is a File object
                const allowedTypes = ['image/jpeg', 'image/png'];
                const isImage = value && allowedTypes.includes(value.type);
                return isImage;
            },
            message: 'Invalid file type. Only JPEG or PNG are allowed',
        }),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
});


export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
})


export const editadvocateSchema=Yup.object().shape({
    profile_image: Yup.mixed()
    .required('Profile image is required')
    .test({
        name: 'fileSize',
        test: function (value) {
            if (!value) {
                return false;
            }

            // Assuming value is a File object
            const isSizeValid = value.size <= 1024 * 1024; // 1 MB
            return isSizeValid;
        },
        message: 'Image size must be less than 1 MB',
    })
    .test({
        name: 'fileType',
        test: function (value) {
            if (!value) {
                return false;
            }

            // Assuming value is a File object
            const allowedTypes = ['image/jpeg', 'image/png'];
            const isImage = value && allowedTypes.includes(value.type);
            return isImage;
        },
        message: 'Invalid file type. Only JPEG or PNG are allowed',
    }),
})
