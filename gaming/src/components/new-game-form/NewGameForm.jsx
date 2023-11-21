import { useState } from 'react';
import styles from './newGameForm.module.css'

import useForm from '../../hooks/useForm';


const NewGameKeys = {
    Title: 'title',
    Category: 'category',
    ImageUrl: 'imageUrl',
    Price: 'price',
    Description: 'description',
}

export default function NewGameForm() {

    const formSubmitHandler = (submitValues) => {
        console.log(submitValues)
    }

    const { values, onChange, onSubmit } = useForm(formSubmitHandler, {
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
                                <a href="#">Home</a> &gt; <a href="#">Catalogue</a> &gt; Add Game
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

                    <div className={styles['form-group']}>
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            values={values[NewGameKeys.Category]}
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
                        values={values[NewGameKeys.ImageUrl]}
                        onChange={onChange}
                    />


                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            values={values[NewGameKeys.Price]}
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
                        values={values[NewGameKeys.Description]}
                        onChange={onChange}
                    />
                </div>

                <div id={styles['form-actions']}>
                    <button id="action-add" className="btn" type="submit">Add Game</button>
                </div>

            </form>
        </div>
    );

}