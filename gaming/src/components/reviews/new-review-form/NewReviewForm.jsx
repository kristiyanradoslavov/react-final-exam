import useForm from '../../../hooks/useForm';
import styles from './newReviewForm.module.css';

import * as reviewServices from '../../../services/reviewServices';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/authContext';

const formValueKeys = {
    NewReview: 'new-comment'
}

export default function NewReviewForm() {

    const { name, email } = useContext(AuthContext);

    const formSubmitHandler = async (value) => {
        const finalData = {
            newReview: value['new-comment'],
            name,
            email,
        }

        try {
            await reviewServices.newComment(finalData);
            
        } catch (error) {
            console.log(error)
        }
     }

    const { values, onChange, onSubmit } = useForm(formSubmitHandler, {
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