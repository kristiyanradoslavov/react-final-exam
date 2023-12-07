import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import * as reviewServices from '../../services/reviewServices';
import * as gameServices from '../../services/gamesServices';
import styles from './styles.module.css';

import Reviews from "../reviews/Reviews";
import NewReviewForm from "../reviews/new-review-form/NewReviewForm";
import Path from "../../paths";
import DeleteModal from "../delete-modal/DeleteModal";


export default function ProductDetails() {

    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([]);
    const [modalState, setModalState] = useState(false);

    const { gameId } = useParams();
    const { name, email, userId } = useContext(AuthContext);

    useEffect(() => {
        gameServices.getSingleGame(gameId)
            .then((gameResult) => {
                setGame(gameResult)
            })
            .catch((error) => {
                console.log(error);
            })


        reviewServices.getGameReviews(gameId)
            .then((reviewResult) => {
                setReviews(reviewResult);
            })

            .catch((error) => {
                console.log(error)
            })

    }, [gameId])


    const addNewReviewHandler = async (value) => {
        const finalData = {
            newReview: value['new-comment'],
            name,
            email,
            gameId,
        }

        try {
            const result = await reviewServices.newReview(finalData);

            if (result.code === 403) {
                throw new Error('You need to be logged in, in order to add a review!')
            }
            setReviews(oldValue => ([
                ...oldValue,
                result
            ]));

        } catch (error) {
            return error.message;
        }
    }

    const deleteBtnHandler = () => {
        setModalState(true);
    }

    const closeModalHandler = () => {
        setModalState(false);
    }

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>{game.title}</h3>
                            <span className="breadcrumb">
                                <Link to={Path.Home}>Home</Link> &gt; <Link to={Path.Catalogue}>Catalogue</Link> &gt; Assasin Creed
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles['left-image']}>
                                <img src={`${game.imageUrl}`} alt={`${game.title}`} />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className={styles['game-info-wrapper']}>
                                <div>
                                    <h4>{game.title}</h4>
                                    <span className="price">
                                        ${game.price}
                                    </span>
                                </div>
                                <ul className={styles['game-information']}>
                                    <li>
                                        <p>Owner Name: <span>{game.ownerName}</span></p>
                                    </li>

                                    <li>
                                        <p>Owner Email: <span>{game.ownerEmail}</span></p>
                                    </li>
                                    <li className={styles['genre-wrapper']}>
                                        <p>Genre:</p> <a href="#">{game.category}</a>
                                    </li>
                                </ul>

                                <form id="qty" action="#">
                                    <input
                                        type="qty"
                                        className="form-control"
                                        id={1}
                                        aria-describedby="quantity"
                                        placeholder={1}
                                    />
                                    <button type="submit">
                                        <i className="fa fa-shopping-bag" /> ADD TO CART
                                    </button>
                                </form>
                            </div>

                        </div>

                        <div className={styles['action-btns']}>
                            {(userId === game._ownerId) && (
                                <>
                                    <Link className={styles['change-btn']} to={`${Path.EditGame}/${gameId}`}>Edit game</Link>
                                    <button className={styles['change-btn']} onClick={deleteBtnHandler}>Delete Game</button>

                                    {modalState && <DeleteModal closeModalHandler={closeModalHandler} gameInfo={game} />}
                                </>
                            )}
                        </div>
                        <div className="col-lg-12">
                            <div className="sep" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper ">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="description-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#description"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="description"
                                                    aria-selected="true"
                                                >
                                                    Description
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="reviews-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#reviews"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="reviews"
                                                    aria-selected="false"
                                                >
                                                    Reviews ({reviews.length})
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="description"
                                            role="tabpanel"
                                            aria-labelledby="description-tab"
                                        >
                                            <p>
                                                {game.description}
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="reviews"
                                            role="tabpanel"
                                            aria-labelledby="reviews-tab"
                                        >

                                            <NewReviewForm addNewReviewHandler={addNewReviewHandler} />

                                            {/* START OF REVIEWS */}

                                            {(reviews.length === 0) &&
                                                (<h3>No reviews yet</h3>)

                                            }

                                            {(reviews.map((review) => {
                                                return <Reviews key={review._id} {...review} />
                                            }))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}