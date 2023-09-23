import * as yup from "yup";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signInSchema = yup.object().shape({
    si_email: yup.string().email("Please enter a valid email").required("Required"),
    si_password: yup.string().min(5, "Password must be at least 5 characters").matches(passwordRules, {message: "Please create a stronger password"}).required("Required"),
});

export const signUpSchema = yup.object().shape({
    su_fullName: yup.string().min(5, "Full name must be at least 5 characters").max(50).required("Required"),
    su_email: yup.string().email("Please enter a valid email").required("Required"),
    su_password: yup.string().min(5, "password must be at least 5 characters").matches(passwordRules, {message: "Please create a stronger password"}).required("Required"),
    su_confirmPassword: yup.string().oneOf([yup.ref("su_password"), ""], "Password must match").required("Required")
});

export const contactSchema = yup.object().shape({
    co_firstName: yup.string().min(2, "first name must be at least 2 characters").max(25).required("Required"),
    co_lastName: yup.string().min(2, "last name must be at least 2 characters").max(25).required("Required"),
    co_email: yup.string().email("Please enter a valid email").required("Required"),
    co_subject: yup.string().min(2, "subject must be at least 2 characters").max(50).required("Required"),
    co_country: yup.string().oneOf(["USA", "Algeria", "Russia", "France"]).required("Select your country").required("Required"),
    co_message: yup.string().min(5, "subject must be at least 5 characters").max(255).required("Required"),
});

export const dateSchema = yup.object().shape({
    date: yup.date().nullable().required("Date is required"),
});

// .min(new Date('1900-01-01'), 'Date must be after 1900-01-01')
// .max(new Date(`${currentYear}-12-31`), `Date must be before ${currentYear}-12-31`)

export const fileUploadSchema = yup.object().shape({
    file: yup.mixed().required("required")
});

export const multiSelectSchema = yup.object().shape({
    options: yup.string().required("required")
});