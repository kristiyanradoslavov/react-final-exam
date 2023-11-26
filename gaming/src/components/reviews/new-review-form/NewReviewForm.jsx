import styles from './newReviewForm.module.css';


export default function NewReviewForm() {
    return (
        <form className={styles['new-comment-wrapper']}>

            <textarea
                name="new-comment"
                id=""
                cols="50"
                rows="5"
                className={styles['review-area']}
            >

            </textarea>

            <button className={styles['new-review-btn']}>Add Review</button>
        </form>
    );
}