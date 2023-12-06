import useForm from '../../../hooks/useForm';
import newReviewValidator from '../../../validators/newReviewValidator';
import styles from './newReviewForm.module.css';

const formValueKeys = {
    NewReview: 'new-comment'
}

export default function NewReviewForm({
    addNewReviewHandler,
}) {


    const { values, errors, onChange, onSubmit } = useForm(addNewReviewHandler, newReviewValidator, {
        [formValueKeys.NewReview]: '',
    })

    return (
        <form className={styles['new-comment-wrapper']} onSubmit={onSubmit}>

            <textarea
                name="new-comment"
                id=""
                cols="50"
                rows="5"
                className={styles['review-area']}
                values={values[formValueKeys.NewReview]}
                onChange={onChange}
            >

            </textarea>
            <ul>
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

            <button className={styles['new-review-btn']}>Add Review</button>
        </form>
    );
}