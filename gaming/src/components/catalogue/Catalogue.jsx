import { useEffect, useState } from "react";
import Product from "../product/Product";
import * as gamesServices from "../../services/services";

export default function Catalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesServices.getAllGames()
            .then(data => setGames(data))

    }, [])

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

                    {games.map((game =>
                        <Product key={game._id} gameData={game} />
                    ))}

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