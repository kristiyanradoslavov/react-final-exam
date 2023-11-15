import { Link } from "react-router-dom";

export default function Product() {
    return (
        <div className="row trending-box">
            <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                            <img src="assets/images/trending-02.jpg" alt="" />
                        </a>
                        <span className="price">
                            <em>$45</em>$30
                        </span>
                    </div>
                    <div className="down-content">
                        <span className="category">Action</span>
                        <h4>Assasin Creed</h4>
                        <Link to="/product-details">
                            <i className="fa fa-shopping-bag" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}