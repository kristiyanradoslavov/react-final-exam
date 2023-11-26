import styles from './reviews.module.css';


export default function Reviews({
    name,
    email,
    _createdOn,
    newReview,
}) {

    const date = new Date(_createdOn);
    const finalDate = date.toLocaleDateString();
    return (
        <div className={styles['review-wrapper']}>
            <p className={styles['reviewer-name']}>Name: {name}</p>
            <p>Created on: {finalDate}</p>
            <p className={styles['review-text']}>{newReview}</p>
            <hr />
        </div>
    );
}