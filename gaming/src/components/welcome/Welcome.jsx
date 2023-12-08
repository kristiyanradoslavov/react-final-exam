import styles from "./welcome.module.css"


export default function Welcome() {
    return (
        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="caption header-text">
                            <h6>Welcome to lugx</h6>
                            <h2>BEST GAMING SITE EVER!</h2>
                            <p>
                                LUGX Gaming is free website on which you can upload your games for other people to buy.
                                You can also browse what is already offered and buy at very good prices.
                            </p>
                            <div className="search-input">
                                <form id="search" action="#">
                                    <input
                                        type="text"
                                        placeholder="Search Game"
                                        id="searchText"
                                        name="searchKeyword"
                                    />
                                    <button role="button">Search Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <div className="right-image">
                            <img className={styles['home-img']} src="assets/images/single-game.jpg" alt="" />
                            <span className="price">$ 58.99</span>
                            <span className="offer">-40%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}