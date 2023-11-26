import useForm from '../../../hooks/useForm';
import styles from './newReviewForm.module.css';

const formValueKeys = {
    NewReview: 'new-comment'
}

export default function NewReviewForm({
    addNewReviewHandler,
}) {


    const { values, onChange, onSubmit } = useForm(addNewReviewHandler, {
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

            <button className={styles['new-review-btn']}>Add Review</button>
        </form>
    );
}