import { useState } from 'react';
import styles from './newGameForm.module.css'

import * as gameServices from '../../services/gamesServices'


export default function NewGameForm() {
    const initialFormValues = {
        title: '',
        category: '',
        imageUrl: '',
        price: '',
        description: '',
    }
    const [formValues, setFormValues] = useState(initialFormValues);

    const formValueChangeHandler = (e) => {
        setFormValues(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        gameServices.createNewGame(formValues)
            .then(result => {
                console.log(result)
            })


    }

    return (

        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add New Game</h3>
                            <span className="breadcrumb">
                                <a href="#">Home</a> &gt; <a href="#">Catalogue</a> &gt; Add Game
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <form className={styles['game-form']} onSubmit={formSubmitHandler}>
                <div className={styles['form-group']}>
                    <label htmlFor="title">Game title</label>
                    <input id="title" name="title" type="text" value={formValues.title} onChange={formValueChangeHandler} />

                    <div className={styles['form-group']}>
                        <label htmlFor="category">Category</label>
                        <input id="category" name="category" type="text" value={formValues.category} onChange={formValueChangeHandler} />

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input id="imageUrl" name="imageUrl" type="text" value={formValues.imageUrl} onChange={formValueChangeHandler} />


                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input id="price" name="price" type="text" value={formValues.price} onChange={formValueChangeHandler} />

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" type="text" value={formValues.description} onChange={formValueChangeHandler} />
                </div>

                <div id={styles['form-actions']}>
                    <button id="action-add" className="btn" type="submit">Add Game</button>
                </div>

            </form>
        </div>
    );

}