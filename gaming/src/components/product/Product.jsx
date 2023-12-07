import { Link } from "react-router-dom";
import styles from "./product.module.css"

export default function Product({
    gameData,
    gameId,
}) {
    return (
        <Link to={`/product-details/${gameId}`} className={styles['single-product']}>
            <div>
                <div className="item">
                    <div className="thumb">
                        <img src={gameData.imageUrl} alt="" className={styles['product-img']} />
                        <span className="price">
                            $ {gameData.price}
                        </span>
                    </div>
                    <div className="down-content">
                        <span className="category">{gameData.category}</span>
                        <h4>{gameData.title}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
}