import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as gamesServices from "../../services/gamesServices";

import Product from "../product/Product";
import styles from './catalogue.module.css'
import NewGameBtn from "../new-game-btn/NewGameBtn";
import { AuthContext } from "../../contexts/authContext";
import Path from "../../paths";


const PageSize = 8;

export default function Catalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesServices.getAllGames()
            .then(data => setGames(data));

    }, [])

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our Shop</h3>
                            <span className="breadcrumb">
                                <Link to={Path.Home}>Home</Link> &gt; Our Shop
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

                    <div className={styles['games-wrapper']}>

                        {isAuthenticated && <NewGameBtn />}

                        {games.map((game =>
                            <Product key={game._id} gameData={game} gameId={game._id} />
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li>
                                    <a href="#"> &lt; </a>
                                </li>

                                {[...Array(Math.ceil(games.length / PageSize))].map((_, index) => (
                                     <li>
                                        <button className={'is_active'} href="#">{index + 1}</button>
                                    </li>
                                ))}

                                {/* <li>
                                    <a className={'is_active'} href="#">1</a>
                                </li> */}

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