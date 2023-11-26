import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleGame } from "../../services/gamesServices";
import { useContext } from 'react';
import { AuthContext } from "../../contexts/authContext";


import Reviews from "../reviews/Reviews";
import NewReviewForm from "../reviews/new-review-form/NewReviewForm";

import * as reviewServices from '../../services/reviewServices';

export default function ProductDetails() {

    const [game, setGame] = useState({});
    const [reviews, setReviews] = useState([]);

    const { gameId } = useParams();
    const { name, email } = useContext(AuthContext);

    useEffect(() => {
        getSingleGame(gameId)
            .then((result) => setGame(result))
            // TODO: BETTER ERROR HANDLING
            .catch((error) => {
                console.log(error)
            })

        reviewServices.getGameReviews(gameId)
            .then(result => {
                setReviews(result);
            });

        // console.log(result);

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
            setReviews(oldValue => [...oldValue, result]);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>{game.title}</h3>
                            <span className="breadcrumb">
                                <a href="#">Home</a> &gt; <a href="#">Shop</a> &gt; Assasin Creed
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={`${game.imageUrl}`} alt={`${game.title}`} />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>{game.title}</h4>
                            <span className="price">
                                <em>$28</em> ${game.price}
                            </span>
                            <p>
                                {game.description}
                            </p>
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
                            <ul>
                                <li>
                                    <span>Game Owner:</span> some name
                                </li>
                                <li>
                                    <span>Genre:</span> <a href="#">{game.category}</a>
                                </li>
                                {/* <li>
                                    <span>Multi-tags:</span> <a href="#">War</a>,{" "}
                                    <a href="#">Battle</a>, <a href="#">Royal</a>
                                </li> */}
                            </ul>
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
                                                You can search for more templates on Google Search using
                                                keywords such as "templatemo digital marketing", "templatemo
                                                one-page", "templatemo gallery", etc. Please tell your
                                                friends about our website. If you need a variety of HTML
                                                templates, you may visit Tooplate and Too CSS websites.
                                            </p>
                                            <br />
                                            <p>
                                                Coloring book air plant shabby chic, crucifix normcore
                                                raclette cred swag artisan activated charcoal. PBR&amp;B
                                                fanny pack pok pok gentrify truffaut kitsch helvetica jean
                                                shorts edison bulb poutine next level humblebrag la croix
                                                adaptogen. Hashtag poke literally locavore, beard marfa kogi
                                                bruh artisan succulents seitan tonx waistcoat chambray
                                                taxidermy. Same cred meggings 3 wolf moon lomo irony cray
                                                hell of bitters asymmetrical gluten-free art party raw denim
                                                chillwave tousled try-hard succulents street art.
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

                                            {(reviews.length === 0) && (
                                                <h3>No reviews yet</h3>

                                            )}

                                            {reviews.map((review) => {
                                                return <Reviews key={review._id} {...review} />
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RELATED GAMES START */}

            {/* <div className="section categories related-games">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Action</h6>
                                <h2>Related Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <a href="shop.html">View All</a>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/categories-01.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/categories-05.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/categories-03.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/categories-04.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/categories-05.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* RELATED GAMES END */}
        </>

    );
}