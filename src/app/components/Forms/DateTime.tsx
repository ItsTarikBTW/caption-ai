"use client"
import { useFormik, FormikProps } from "formik"
import { DateFormValue } from "@/types/forms";
import { dateSchema } from "@/schemas";
import { useEffect } from "react";

const DateTime = () => {

    const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }: FormikProps<DateFormValue> = useFormik<DateFormValue>({
        initialValues: {
            date: "",
        },
        validationSchema: dateSchema,
        onSubmit: async (values, actions) => {
            console.log(values);
            await new Promise(resolve => setTimeout(resolve, 1000));
            actions.resetForm();
        }
    });

    useEffect(() => {
        console.log(values.date);
    }, [values.date]);


    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Time and date
                </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <label className="mb-3 block text-black dark:text-white">
                        Date picker
                    </label>
                    <div className="relative mb-5">
                        <input
                            id="date"
                            value={values.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="date"
                            className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        {errors.date && touched.date && (
                            <p className="text-left text-xs text-danger pt-1">
                                {errors.date}
                            </p>
                        )}
                    </div>
                    <button disabled={isSubmitting} type="submit" className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DateTime
