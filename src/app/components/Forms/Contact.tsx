"use client"

import { useFormik, FormikProps } from "formik"
import { ContactFormValues } from "@/types/forms"
import { contactSchema } from "@/schemas"

const Contact = () => {

    const { values, handleChange, handleBlur, handleSubmit, touched, errors, isSubmitting }: FormikProps<ContactFormValues> = useFormik<ContactFormValues>({
        initialValues: {
            co_firstName: "",
            co_lastName: "",
            co_email: "",
            co_subject: "",
            co_country: "",
            co_message: "",
        },
        validationSchema: contactSchema,
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
                    Contact Form
                </h3>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                First name
                            </label>
                            <input
                                id="co_firstName"
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                value={values.co_firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.co_firstName && touched.co_firstName && (
                                <p className=" text-left text-xs text-danger pt-1">
                                    {errors.co_firstName}
                                </p>
                            )}
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Last name
                            </label>
                            <input
                                id="co_lastName"
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                value={values.co_lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.co_lastName && touched.co_lastName && (
                                <p className=" text-left text-xs text-danger pt-1">
                                    {errors.co_lastName}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Email <span className="text-meta-1">*</span>
                        </label>
                        <input
                            id="co_email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.co_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.co_email && touched.co_email && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.co_email}
                            </p>
                        )}
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Subject
                        </label>
                        <input
                            id="co_subject"
                            type="text"
                            placeholder="Select subject"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.co_subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.co_subject && touched.co_subject && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.co_subject}
                            </p>
                        )}
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Countries
                        </label>
                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                            <select
                                id="co_country"
                                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                value={values.co_country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="USA">USA</option>
                                <option value="Algeria">Algeria</option>
                                <option value="Russia">Russia</option>
                                <option value="France">France</option>
                            </select>
                            {errors.co_country && touched.co_country && (
                                <p className=" text-left text-xs text-danger pt-1">
                                    {errors.co_country}
                                </p>
                            )}
                            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                <svg
                                    className="fill-current"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.8">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                            fill=""
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Message
                        </label>
                        <textarea
                            id="co_message"
                            rows={6}
                            placeholder="Type your message"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            value={values.co_message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></textarea>
                        {errors.co_message && touched.co_message && (
                            <p className=" text-left text-xs text-danger pt-1">
                                {errors.co_message}
                            </p>
                        )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact