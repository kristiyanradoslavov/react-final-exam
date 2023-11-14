import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                                <img src="assets/images/logo.png" alt="" style={{ width: 158 }} />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li>
                                    <Link to="/" className="active">Home</Link>
                                </li>
                                <li>
                                    <Link to="our-shop">Our Shop</Link>
                                </li>
                                <li>
                                    <Link to="product-details">Product Details</Link>
                                </li>
                                <li>
                                    <Link to="contacts">Contact Us</Link>
                                </li>
                                <li>
                                    <a href="#">Sign In</a>
                                </li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}