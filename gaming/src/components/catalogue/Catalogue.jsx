import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as gamesServices from "../../services/gamesServices";

import Product from "../product/Product";
import styles from './catalogue.module.css'
import NewGameBtn from "../new-game-btn/NewGameBtn";
import { AuthContext } from "../../contexts/authContext";
import Path from "../../paths";


const PageSize = 10;

export default function Catalogue() {
    const [gamesPerPage, setGamesPerPage] = useState([]);
    const [allGames, setAllGames] = useState([]);
    const [page, setPage] = useState(0);
    const [selectedGames, setSelectedGames] = useState('all')

    useEffect(() => {
        gamesServices.getAllGames(selectedGames)
            .then(data => {
                setAllGames(data);
                setGamesPerPage(data);
            });

    }, [selectedGames])


    useEffect(() => {
        const skip = page * PageSize
        gamesServices.getGamesPerPage(skip, PageSize, selectedGames)
            .then((data) => {
                setGamesPerPage(data);
            })
    }, [page, selectedGames])

    const { isAuthenticated } = useContext(AuthContext);

    const filterBtnHandler = (e) => {
        setSelectedGames(e.target.name);
    }

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our Shop</h3>
                            <span className="breadcrumb">
                                <Link to={Path.Home}>   </Link> &gt; Our Shop
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <button onClick={filterBtnHandler} name="all"
                                className={selectedGames === 'all' ? `${styles['filter-btn']} ${styles['active-filter']}` : styles['filter-btn']}
                            >
                                Show All
                            </button>
                        </li>
                        <li>
                            <button onClick={filterBtnHandler} name="Adventure"
                                className={selectedGames === 'Adventure' ? `${styles['filter-btn']} ${styles['active-filter']}` : styles['filter-btn']}
                            >
                                Adventure
                            </button>
                        </li>
                        <li>
                            <button onClick={filterBtnHandler} name="Horror"
                                className={selectedGames === 'Horror' ? `${styles['filter-btn']} ${styles['active-filter']}` : styles['filter-btn']}
                            >
                                Horror
                            </button>
                        </li>
                        <li>
                            <button onClick={filterBtnHandler} name="Shooter"
                                className={selectedGames === 'Shooter' ? `${styles['filter-btn']} ${styles['active-filter']}` : styles['filter-btn']}
                            >
                                Shooter
                            </button>
                        </li>
                    </ul>

                    <div className={styles['games-wrapper']}>

                        {isAuthenticated && <NewGameBtn />}

                        {gamesPerPage.map((game =>
                            <Product key={game._id} gameData={game} gameId={game._id} />
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li>
                                    <button
                                        className={styles['page-btn']}
                                        onClick={() => {
                                            if (page > 0) {
                                                setPage(oldValue => (
                                                    oldValue - 1
                                                ))
                                            }
                                        }}
                                    > &lt;
                                    </button>
                                </li>

                                {[...Array(Math.ceil(allGames.length / PageSize))].map((_, index) => (
                                    <li key={index + 1}>
                                        <button
                                            className={
                                                page === index
                                                    ?
                                                    `${styles['page-btn']} ${styles['is_active']}`
                                                    :
                                                    `${styles['page-btn']}`
                                            }
                                            onClick={() => setPage(index)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}

                                <li>
                                    <button
                                        className={styles['page-btn']}
                                        onClick={() => {
                                            if ((Math.ceil(allGames.length / PageSize)) > (page + 1)) {
                                                setPage(oldValue => (
                                                    oldValue + 1
                                                ))
                                            }
                                        }}
                                    > &gt;
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}