import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

import styles from './header.module.css'

import { AuthContext } from '../../contexts/authContext';

import Path from '../../paths';

export default function Header({
    createUserHandler,
    openLoginModal
}) {

    const [activeTab, setActiveTab] = useState('Home');

    const tabClickHandler = (tabName) => {
        setActiveTab(tabName);
    }

    const registerBtnHandler = () => {
        createUserHandler();
    }

    const loginBtnHandler = () => {
        openLoginModal();
    }

    const logoutBtnHandler = () => {
        logoutSubmitHandler();
    }

    const { isAuthenticated, logoutSubmitHandler } = useContext(AuthContext)
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <Link to={Path.Home} className="logo">
                                <img src="/assets/images/logo.png" alt="" style={{ width: 158 }} />
                            </Link>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li>
                                    <Link
                                        to={Path.Home}
                                        className={activeTab === 'Home' ? 'active' : ""}
                                        onClick={() => tabClickHandler('Home')}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={Path.Catalogue}
                                        className={activeTab === 'Catalogue' ? 'active' : ""}
                                        onClick={() => tabClickHandler('Catalogue')}
                                    >
                                        Catalogue
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={Path.Contacts}
                                        className={activeTab === 'Contacts' ? 'active' : ""}
                                        onClick={() => tabClickHandler('Contacts')}
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                {!isAuthenticated && (
                                    <>
                                        <li>
                                            <button className={styles["auth-btns"]} onClick={registerBtnHandler}>Register</button>
                                        </li>
                                        <li>
                                            <button className={styles["auth-btns"]} onClick={loginBtnHandler}>Login</button>
                                        </li>
                                    </>
                                )}

                                {isAuthenticated && (
                                    <>
                                        <li>
                                            <Link to={Path.ShoppingCart} className={styles["auth-btns"]}>Shopping cart</Link>
                                        </li>
                                        <li>
                                            <button className={styles["auth-btns"]} onClick={logoutBtnHandler}>Logout</button>
                                        </li>
                                    </>
                                )}
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