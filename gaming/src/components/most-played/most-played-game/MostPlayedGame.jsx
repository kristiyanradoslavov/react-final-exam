import { Link } from "react-router-dom";
import styles from "./mostPlayedGame.module.css"
import Path from "../../../paths";

export default function MostPlayedGame({
    gameData,
}) {
    return (
        <Link to={`${Path.ProductDetails}/${gameData._id}`} className="col-lg-2 col-md-6 col-sm-6">
            <div className={`item ${styles['game-item']}`}>
                <div className="thumb">
                    <img src={gameData.imageUrl} alt={gameData.tittle} />
                </div>
                <div className="down-content">
                    <span className="category">{gameData.category}</span>
                    <h4>{gameData.title}</h4>
                    <a href="product-details.html">Explore</a>
                </div>
            </div>
        </Link>
    );
}