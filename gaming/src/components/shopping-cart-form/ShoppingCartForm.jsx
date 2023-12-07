import { useState } from "react";
import * as shoppingCartServices from "../../services/shoppingCartServices"

import styles from "./shoppingCartForm.module.css"
import Path from "../../paths";
import { useNavigate } from "react-router-dom";

const InitialValue = {
    quantity: 1
}

export default function ShoppingCartForm({
    gameDetails,

}) {
    const [value, setValue] = useState(InitialValue);
    const [serverError, setServerError] = useState([]);
    const navigate = useNavigate()

    const addCartBtnHandler = async (e) => {
        e.preventDefault();
        const finalItems = {
            gameTitle: gameDetails.title,
            gameCategory: gameDetails.category,
            imageUrl: gameDetails.imageUrl,
            finalPrice: gameDetails.price * value.quantity,
            quantity: value.quantity,
        }
        
        try {
            const serverResponse = await shoppingCartServices.createNewItem(finalItems)
            if (serverResponse.code === 403) {
                setServerError(['You need to be logged in order to add item in the cart !'])
            } else {
                navigate(Path.ShoppingCart)

            }

        } catch (error) {
            console.log(error)
        }
    }

    const onChange = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: Number(e.target.value)
        }))
    }

    const increaseBtnHandler = () => {
        setValue(state => ({
            ...state,
            quantity: state.quantity + 1
        }));
    }

    const decreaseBtnHandler = () => {
        if (value.quantity > 1) {
            setValue(state => ({
                ...state,
                quantity: state.quantity - 1
            }));
        }
    }

    return (
        <>
            <form className={styles['add-to-cart-form']} id="qty" action="#" onSubmit={addCartBtnHandler}>
                <div className={styles['quantity-wrapper']}>
                    <button type="button" className={styles['change-value-btn']} onClick={increaseBtnHandler}>+</button>
                    <input
                        type="qty"
                        className={styles['quantity']}
                        id={1}
                        aria-describedby="quantity"
                        name='quantity'
                        value={value.quantity}
                        onChange={onChange}
                        disabled={true}
                    />
                    <button type="button" className={styles['change-value-btn']} onClick={decreaseBtnHandler}>-</button>
                </div>
                <button type="submit">
                    <i className="fa fa-shopping-bag" /> ADD TO CART
                </button>
            </form>
            <ul>
                {serverError
                    &&
                    (serverError).map((error, index) => {
                        return <li key={index} className={styles['error-wrapper']}>
                            <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                            <div className={styles['error-msg']}>
                                {error}
                            </div>
                        </li>
                    })
                }
            </ul>
        </>
    );
}