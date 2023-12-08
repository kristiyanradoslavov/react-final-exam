import { Link } from "react-router-dom";
import Path from "../../../paths";

export default function TrendingGame({
    gameData,
}) {
    return (
        <Link to={`${Path.ProductDetails}/${gameData._id}`} className="col-lg-3 col-md-6">
            <div className="item">
                <div className="thumb">
                    <img src={gameData.imageUrl} alt="" />
                    <span className="price">
                        $ {gameData.price}
                    </span>
                </div>
                <div className="down-content">
                    <span className="category">{gameData.category}</span>
                    <h4>{gameData.title}</h4>
                </div>
            </div>
        </Link>
    );
}