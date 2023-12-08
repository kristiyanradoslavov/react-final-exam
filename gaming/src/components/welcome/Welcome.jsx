import { useState } from "react";
import useForm from "../../hooks/useForm";

import * as gameServices from "../../services/gamesServices"
import searchGameValidator from "../../validators/searchGameValidator";
import styles from "./welcome.module.css"
import { useNavigate } from "react-router-dom";
import Path from "../../paths";

const SearchKey = {
    SearchGame: 'search-game',
}

export default function Welcome() {

    const [submitErrors, setSubmitErrors] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (values) => {
        gameServices.getSearchedGame(values[SearchKey.SearchGame])
            .then((result) => {
                if (!result.length) {
                    throw new Error('No game found')
                }
                navigate(`${Path.ProductDetails}/${result[0]._id}`)
            })
            .catch((error) => {
                setSubmitErrors(error.message)
            })
    }


    const { values, errors, onChange, onSubmit } = useForm(
        submitHandler,
        searchGameValidator, {
        [SearchKey.SearchGame]: '',
    });

    return (
        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="caption header-text">
                            <h6>Welcome to lugx</h6>
                            <h2>BEST GAMING SITE EVER!</h2>
                            <p>
                                LUGX Gaming is free website on which you can upload your games for other people to buy.
                                You can also browse what is already offered and buy at very good prices.
                            </p>
                            <div className="search-input">
                                <form id="search">
                                    <input
                                        type="text"
                                        placeholder="Search Game"
                                        id="searchText"
                                        name="search-game"
                                        onChange={onChange}
                                        values={values[SearchKey.SearchGame]}
                                    />
                                    <button type="submit" onClick={onSubmit}>Search Now</button>
                                </form>

                                {(submitErrors.length != 0) &&
                                    <div className={styles['error-wrapper']}>
                                        <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                        <div className={styles['error-msg']}>
                                            {submitErrors}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <div className="right-image">
                            <img className={styles['home-img']} src="assets/images/single-game.jpg" alt="" />
                            <span className="price">$ 58.99</span>
                            <span className="offer">-40%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}