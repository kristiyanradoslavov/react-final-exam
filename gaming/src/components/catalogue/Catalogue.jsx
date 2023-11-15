export default function Catalogue() {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our Shop</h3>
                            <span className="breadcrumb">
                                <a href="/">Home</a> &gt; Our Shop
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <a className="is_active" href="#!" data-filter="*">
                                Show All
                            </a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".adv">
                                Adventure
                            </a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".str">
                                Strategy
                            </a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".rac">
                                Racing
                            </a>
                        </li>
                    </ul>
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
                                    <a href="product-details.html">
                                        <i className="fa fa-shopping-bag" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li>
                                    <a href="#"> &lt; </a>
                                </li>
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a className="is_active" href="#">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#"> &gt; </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}