import { useState } from 'react';
import newReviewValidator from '../../../validators/newReviewValidator';
import styles from './newReviewForm.module.css';

const formValueKeys = {
    NewReview: 'new-comment'
}

export default function NewReviewForm({
    addNewReviewHandler,
}) {

    const [serverError, setServerError] = useState([]);
    const [values, setValues] = useState({[formValueKeys.NewReview]: ''});
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const validateErrors = newReviewValidator(values);

        setErrors(validateErrors)

        if (Object.keys(validateErrors).length === 0) {

            const submitResult = await addNewReviewHandler(values);

            if (submitResult) {
                setServerError(submitResult)
            } else {
                setValues({[formValueKeys.NewReview]: ''})
            }
        }

    }

    return (
        <form className={styles['new-comment-wrapper']} onSubmit={onSubmit}>

            <textarea
                name="new-comment"
                id=""
                cols="50"
                rows="5"
                className={styles['review-area']}
                value={values[formValueKeys.NewReview]}
                onChange={onChange}
            >

            </textarea>
            <ul className={styles['ul-wrapper']}>
                {errors[formValueKeys.NewReview]
                    &&
                    (errors[formValueKeys.NewReview]).map((error, index) => {
                        return <li key={index} className={styles['error-wrapper']}>
                            <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                            <div className={styles['error-msg']}>
                                {error}
                            </div>
                        </li>
                    })
                }
            </ul>

            {(serverError.length != 0) &&
                <div className={styles['error-wrapper']}>
                    <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                    <div className={styles['error-msg']}>
                        {serverError}
                    </div>
                </div>
            }

            <button className={styles['new-review-btn']}>Add Review</button>
        </form>
    );
}