import { useNavigate } from 'react-router-dom'
import styles from './newGameForm.module.css'

import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import { createNewGame } from '../../services/gamesServices';
import Path from '../../paths';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import newGameValidator from '../../validators/newGameValidator';


const NewGameKeys = {
    Title: 'title',
    Category: 'category',
    ImageUrl: 'imageUrl',
    Price: 'price',
    Description: 'description',
}

export default function NewGameForm() {

    const navigate = useNavigate();
    const { name, email } = useContext(AuthContext);

    const formSubmitHandler = (submitValues) => {

        try {
            createNewGame({
                ...submitValues,
                ownerName: name,
                ownerEmail: email,
            });
            navigate('/catalogue')

        } catch {
            // TODO: BETTER ERROR HANDLING
            console.log('error when creating game')
        }
    }

    const { values, errors, onChange, onSubmit } = useForm(formSubmitHandler, newGameValidator, {
        [NewGameKeys.Title]: '',
        [NewGameKeys.Category]: '',
        [NewGameKeys.ImageUrl]: '',
        [NewGameKeys.Price]: '',
        [NewGameKeys.Description]: '',

    });

    return (

        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add New Game</h3>
                            <span className="breadcrumb">
                                <Link to={Path.Home}>Home</Link> &gt; <Link to={Path.Catalogue}>Catalogue</Link> &gt; Add Game
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
                        values={values[NewGameKeys.Title]}
                        onChange={onChange}
                    />
                    <ul>
                        {errors[NewGameKeys.Title]
                            &&
                            (errors[NewGameKeys.Title]).map((error, index) => {
                                return <li key={index} className={styles['error-wrapper']}>
                                    <img src="assets/images/error.png" alt="" className={styles['error-img']} />
                                    <div className={styles['error-msg']}>
                                        {error}
                                    </div>
                                </li>
                            })
                        }
                    </ul>

                    <div className={styles['form-group']}>
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            values={values[NewGameKeys.Category]}
                            onChange={onChange}
                        />
                        <ul>
                            {errors[NewGameKeys.Category]
                                &&
                                (errors[NewGameKeys.Category]).map((error, index) => {
                                    return <li key={index} className={styles['error-wrapper']}>
                                        <img src="assets/images/error.png" alt="" className={styles['error-img']} />
                                        <div className={styles['error-msg']}>
                                            {error}
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        values={values[NewGameKeys.ImageUrl]}
                        onChange={onChange}
                    />
                    <ul>
                        {errors[NewGameKeys.ImageUrl]
                            &&
                            (errors[NewGameKeys.ImageUrl]).map((error, index) => {
                                return <li key={index} className={styles['error-wrapper']}>
                                    <img src="assets/images/error.png" alt="" className={styles['error-img']} />
                                    <div className={styles['error-msg']}>
                                        {error}
                                    </div>
                                </li>
                            })
                        }
                    </ul>

                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            values={values[NewGameKeys.Price]}
                            onChange={onChange}
                        />

                        <ul>
                            {errors[NewGameKeys.Price]
                                &&
                                (errors[NewGameKeys.Price]).map((error, index) => {
                                    return <li key={index} className={styles['error-wrapper']}>
                                        <img src="assets/images/error.png" alt="" className={styles['error-img']} />
                                        <div className={styles['error-msg']}>
                                            {error}
                                        </div>
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        type="text"
                        values={values[NewGameKeys.Description]}
                        onChange={onChange}
                    />
                    <ul>
                        {errors[NewGameKeys.Description]
                            &&
                            (errors[NewGameKeys.Description]).map((error, index) => {
                                return <li key={index} className={styles['error-wrapper']}>
                                    <img src="assets/images/error.png" alt="" className={styles['error-img']} />
                                    <div className={styles['error-msg']}>
                                        {error}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div id={styles['form-actions']}>
                    <button id="action-add" className="btn" type="submit">Add Game</button>
                </div>

            </form>
        </div>
    );

}