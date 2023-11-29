import { useNavigate, useParams } from 'react-router-dom'
import styles from './editGameForm.module.css'

import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import { createNewGame } from '../../services/gamesServices';
import Path from '../../paths';


const EditGameKeys = {
    Title: 'title',
    Category: 'category',
    ImageUrl: 'imageUrl',
    Price: 'price',
    Description: 'description',
}


export default function EditGameForm() {
    
    const { gameId } = useParams();
    const navigate = useNavigate();

    const formSubmitHandler = (submitValues) => {

        try {
            createNewGame(submitValues);
            navigate(`${Path.ProductDetails}/${gameId}`)

        } catch {
            // TODO: BETTER ERROR HANDLING
            console.log('error when creating game')
        }
    }

    const { values, onChange, onSubmit } = useForm(formSubmitHandler, {
        [EditGameKeys.Title]: '',
        [EditGameKeys.Category]: '',
        [EditGameKeys.ImageUrl]: '',
        [EditGameKeys.Price]: '',
        [EditGameKeys.Description]: '',

    });

    return (

        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Edit Game</h3>
                            <span className="breadcrumb">
                                <Link to={Path.Catalogue}>Catalogue</Link> &gt; <Link to={`${Path.ProductDetails}/${gameId}`}>Game Details</Link> &gt; Edit Game
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <form className={styles['game-form']} onSubmit={onSubmit}>
                <div className={styles['form-group']}>
                    <label htmlFor="title">Game title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        values={values[EditGameKeys.Title]}
                        onChange={onChange}
                    />

                    <div className={styles['form-group']}>
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            values={values[EditGameKeys.Category]}
                            onChange={onChange}
                        />

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        values={values[EditGameKeys.ImageUrl]}
                        onChange={onChange}
                    />


                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            values={values[EditGameKeys.Price]}
                            onChange={onChange}
                        />

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        type="text"
                        values={values[EditGameKeys.Description]}
                        onChange={onChange}
                    />
                </div>

                <div id={styles['form-actions']}>
                    <button id="action-add" className="btn" type="submit">Edit Game</button>
                </div>

            </form>
        </div>
    );

}