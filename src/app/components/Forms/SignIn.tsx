"use client"

import { useFormik, FormikProps } from "formik";
import { SignInFormValues } from "@/types/forms";
import { signInSchema } from "@/schemas";

const SignIn = () => {

    const { values, touched, handleBlur, handleChange, handleSubmit, errors, isSubmitting }: FormikProps<SignInFormValues> = useFormik<SignInFormValues>({
        initialValues: {
            si_email: "",
            si_password: "",
            si_rememberMe: false,
        },
        validationSchema: signInSchema,
        onSubmit: async (values, actions) => {
            console.log(values);
            await new Promise(resolve => setTimeout(resolve, 1000));
            actions.resetForm();
        }
    });

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-auto">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Sign In Form
                </h3>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="p-6.5">
                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Email
                        </label>
                        <input
                            id="si_email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.si_email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        {errors.si_email && touched.si_email && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.si_email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                            Password
                        </label>
                        <input
                            id="si_password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.si_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.si_password && touched.si_password && (
                            <p className="text-left text-xs text-danger pt-1">
                                {errors.si_password}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 mb-5.5 flex items-center justify-between">
                        <label htmlFor="si_rememberMe" className="flex cursor-pointer">
                            <div className="relative pt-0.5">
                                <input
                                    checked={values.si_rememberMe}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox"
                                    id="si_rememberMe"
                                    className="taskCheckbox sr-only"
                                />
                                <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                                    <span className="text-white opacity-0">
                                        <svg
                                            className="fill-current"
                                            width="10"
                                            height="7"
                                            viewBox="0 0 10 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                                                fill=""
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <p>Remember me</p>
                        </label>

                        <a href="#" className="text-sm text-primary">
                            Forget password?
                        </a>
                    </div>

                    <button disabled={isSubmitting} type="submit" className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;