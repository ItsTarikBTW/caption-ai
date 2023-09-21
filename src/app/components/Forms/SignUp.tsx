"use client"

import { FormikProps, useFormik } from "formik";
import { SignUpFormValues } from "@/types/forms";
import { signUpSchema } from "@/schemas";

const SignUp = () => {

    const { values, touched, handleBlur, handleChange, handleSubmit, errors, isSubmitting }: FormikProps<SignUpFormValues> = useFormik<SignUpFormValues>({
        initialValues: {
            su_fullName: "",
            su_email: "",
            su_password: "",
            su_confirmPassword: ""
        },
        validationSchema: signUpSchema,
        onSubmit: async (values, actions) => {
            console.log(values);
            await new Promise(resolve => setTimeout(resolve, 1000));
            actions.resetForm();
        }
    });

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Sign Up Form
                </h3>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="p-6.5">
                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Name
                        </label>
                        <input
                            id="su_fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.su_fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.su_fullName && touched.su_fullName && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.su_fullName}
                            </p>
                        )}
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Email
                        </label>
                        <input
                            id="su_email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.su_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.su_email && touched.su_email && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.su_email}
                            </p>
                        )}
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Password
                        </label>
                        <input
                            id="su_password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.su_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.su_password && touched.su_password && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.su_password}
                            </p>
                        )}
                    </div>

                    <div className="mb-5.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Re-type Password
                        </label>
                        <input
                            id="su_confirmPassword"
                            type="password"
                            placeholder="Re-enter password"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.su_confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.su_confirmPassword && touched.su_confirmPassword && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.su_confirmPassword}
                            </p>
                        )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
