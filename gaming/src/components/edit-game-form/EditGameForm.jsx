import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import styles from './editGameForm.module.css'
import Path from '../../paths';
import * as gameServices from '../../services/gamesServices';


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

    const [oldValue, setOldValue] = useState({
        [EditGameKeys.Title]: '',
        [EditGameKeys.Category]: '',
        [EditGameKeys.ImageUrl]: '',
        [EditGameKeys.Price]: '',
        [EditGameKeys.Description]: '',
    });

    useEffect(() => {
        try {
            gameServices.getSingleGame(gameId)
                .then((result) => setOldValue(result))

        } catch (error) {
            console.log(error)
        }
    }, [gameId]);

    const onChange = (e) => {
        setOldValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault();

        try {
            gameServices.editGame(gameId, oldValue)
                .then((result) => {
                    // console.log(result);
                    navigate(`${Path.ProductDetails}/${gameId}`)
                })

        } catch (error) {
            console.log(error)
        }
    }


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
                        value={oldValue.title}
                        onChange={onChange}
                    />

                    <div className={styles['form-group']}>
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            value={oldValue.category}
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
                        value={oldValue.imageUrl}
                        onChange={onChange}
                    />


                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            value={oldValue.price}
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
                        value={oldValue.description}
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