import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Trending from "./components/Trending"
import Welcome from "./components/Welcome"


function App() {

    return (
        <>
            {/* Preloader */}

            {/* ***** Header Area Start ***** */}

            <Header />

            {/* ***** Header Area End ***** */}

            <Welcome />

            <Features />

            <Trending />
            
            <div className="section most-played">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>TOP GAMES</h6>
                                <h2>Most Played</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <a href="shop.html">View All</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/top-game-01.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/top-game-02.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/top-game-03.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/top-game-04.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/top-game-05.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html">
                                        <img src="assets/images/top-game-06.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Categories</h6>
                                <h2>Top Categories</h2>
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
            </div>
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
                                                Go Pre-Order Buy &amp; Get Best <em>Prices</em> For You!
                                            </h2>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod
                                            tempor incididunt.
                                        </p>
                                        <div className="main-button">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 align-self-end">
                            <div className="subscribe">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h6>NEWSLETTER</h6>
                                            <h2>
                                                Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!
                                            </h2>
                                        </div>
                                        <div className="search-input">
                                            <form id="subscribe" action="#">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Your email..."
                                                />
                                                <button type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default App
