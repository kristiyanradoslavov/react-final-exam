import { Link } from "react-router-dom";
import styles from "./product.module.css"

export default function Product({
    gameData
}) {
    return (
        <div className={styles['single-product']}>
            <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                            <img src={gameData.imageUrl} alt="" className={styles['product-img']}/>
                        </a>
                        <span className="price">
                            <em>$45</em>{gameData.price}
                        </span>
                    </div>
                    <div className="down-content">
                        <span className="category">{gameData.category}</span>
                        <h4>{gameData.title}</h4>
                        <Link to="/product-details">
                            <i className="fa fa-shopping-bag" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}