import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Newsletter() {
    return (
        <div className="section cta">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="shop">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-heading">
                                        <h6>Our Shop</h6>
                                        <h2>
                                            Get Best <em>Prices</em> on the market!
                                        </h2>
                                    </div>
                                    <p>
                                        The most flexible website with many of the most trending and popular games right now.
                                    </p>
                                    <div className="main-button">
                                        <Link to={Path.Catalogue}>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}