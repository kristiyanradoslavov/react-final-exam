import { Link, useNavigate } from "react-router-dom";

import * as shoppingCartServices from "../../services/shoppingCartServices"

import styles from "./shoppingCart.module.css";
import Path from "../../paths";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import ShoppingCartItem from "../shopping-cart-form/shopping-cart-item/ShoppingCartItem";

export default function ShoppingCart() {

    const [items, setItems] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        shoppingCartServices.getAllItems(userId)
            .then((result) => {
                setItems(result);
                updateFinalPrice(result);
            })
    }, [userId])

    const checkoutHandler = () => {
        items.map((item) => {
            shoppingCartServices.deleteItem(item._id)
        });

        if (items.length) {
            navigate(Path.OrderComplete);
        }
    }

    const onItemDelete = (itemId) => {
        const updatedItems = items.filter((item) => item._id !== itemId);
        setItems(updatedItems);
        updateFinalPrice(updatedItems);
    }

    const updateFinalPrice = (result) => {
        const totalPrice = result.reduce((total, item) => total + item.finalPrice, 0);
        setFinalPrice(totalPrice);
    }
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Shopping Cart</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['products-wrapper']}>
                <div className={styles['products']}>

                    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <h5 className="mb-3">
                                                        <Link to={Path.Catalogue} className="text-body">
                                                            <i className="fas fa-long-arrow-alt-left me-2" />
                                                            Continue shopping
                                                        </Link>
                                                    </h5>
                                                    <hr />
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <p className="mb-1">Shopping cart</p>
                                                            {items.length > 0 &&
                                                                <p className="mb-0">You have {items.length} items in your cart</p>
                                                            }
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>

                                                    <ul>
                                                        {items.length > 0 && items.map((item) =>
                                                            <li key={item._id}>
                                                                <ShoppingCartItem itemDetails={{ ...item }} onItemDelete={onItemDelete} />
                                                            </li>
                                                        )}
                                                    </ul>

                                                    {!items.length &&
                                                        <div>No Items in cart yet</div>
                                                    }
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="card bg-primary text-white rounded-3">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                                <h5 className="mb-0">Card details</h5>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                                    className="img-fluid rounded-3"
                                                                    style={{ width: 45 }}
                                                                    alt="Avatar"
                                                                />
                                                            </div>
                                                            <p className="small mb-2">Card type</p>
                                                            <a href="#!" type="submit" className="text-white">
                                                                <i className="fab fa-cc-mastercard fa-2x me-2" />
                                                            </a>
                                                            <a href="#!" type="submit" className="text-white">
                                                                <i className="fab fa-cc-visa fa-2x me-2" />
                                                            </a>
                                                            <a href="#!" type="submit" className="text-white">
                                                                <i className="fab fa-cc-amex fa-2x me-2" />
                                                            </a>
                                                            <a href="#!" type="submit" className="text-white">
                                                                <i className="fab fa-cc-paypal fa-2x" />
                                                            </a>
                                                            <form className="mt-4">
                                                                <div className="form-outline form-white mb-4">
                                                                    <input
                                                                        type="text"
                                                                        id="typeName"
                                                                        className="form-control form-control-lg"
                                                                        siez={17}
                                                                        placeholder="Cardholder's Name"
                                                                    />
                                                                    <label className="form-label" htmlFor="typeName">
                                                                        Cardholder's Name
                                                                    </label>
                                                                </div>
                                                                <div className="form-outline form-white mb-4">
                                                                    <input
                                                                        type="text"
                                                                        // id="typeText"
                                                                        className="form-control form-control-lg"
                                                                        siez={17}
                                                                        placeholder="1234 5678 9012 3457"
                                                                        minLength={19}
                                                                        maxLength={19}
                                                                    />
                                                                    <label className="form-label" htmlFor="typeText">
                                                                        Card Number
                                                                    </label>
                                                                </div>
                                                                <div className="row mb-4">
                                                                    <div className="col-md-6">
                                                                        <div className="form-outline form-white">
                                                                            <input
                                                                                type="text"
                                                                                id="typeExp"
                                                                                className="form-control form-control-lg"
                                                                                placeholder="MM/YYYY"
                                                                                size={7}
                                                                                minLength={7}
                                                                                maxLength={7}
                                                                            />
                                                                            <label className="form-label" htmlFor="typeExp">
                                                                                Expiration
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-outline form-white">
                                                                            <input
                                                                                type="password"
                                                                                // id="typeText"
                                                                                className="form-control form-control-lg"
                                                                                placeholder="●●●"
                                                                                size={1}
                                                                                minLength={3}
                                                                                maxLength={3}
                                                                            />
                                                                            <label className="form-label" htmlFor="typeText">
                                                                                Cvv
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <hr className="my-4" />
                                                            <div className="d-flex justify-content-between">
                                                                <p className="mb-2">Shipping</p>
                                                                <p className="mb-2">$ 0</p>
                                                            </div>
                                                            <div className="d-flex justify-content-between mb-4">
                                                                <p className="mb-2">Total(Incl. taxes)</p>
                                                                <p className="mb-2">$ {finalPrice}</p>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                className="btn btn-info btn-block btn-lg"
                                                                onClick={checkoutHandler}
                                                            >
                                                                <div className="d-flex justify-content-between">

                                                                    <span>$ {finalPrice}</span>

                                                                    <span>
                                                                        Checkout{" "}
                                                                        <i className="fas fa-long-arrow-alt-right ms-2" />
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}