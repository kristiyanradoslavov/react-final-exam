import { useState } from "react";

export default function useForm(submitHandler, validator, initialValues) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault();

        const validateErrors = validator(values);

        setErrors(validateErrors)

        if (Object.keys(validateErrors).length === 0) {

            submitHandler(values);
        }

    }

    return {
        values,
        errors,
        onChange,
        onSubmit,
    }
}