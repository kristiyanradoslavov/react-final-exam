import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header({
    createUserHandler
}) {
    const registerBtnHandler = () => {
        createUserHandler()
    }

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
                                    <Link to="catalogue">Catalogue</Link>
                                </li>
                                {/* <li>
                                    <Link to="product-details">Product Details</Link>
                                </li> */}
                                <li>
                                    <Link to="contacts">Contact Us</Link>
                                </li>
                                <li>
                                    <button className={styles["auth-btns"]}>Shopping cart</button>
                                </li>
                                <li>
                                    <button className={styles["auth-btns"]}>Sign in</button>
                                </li>
                                <li>
                                    <button className={styles["auth-btns"]} onClick={registerBtnHandler}>Register</button>
                                </li>
                                <li>
                                    <button className={styles["auth-btns"]}>Login</button>
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