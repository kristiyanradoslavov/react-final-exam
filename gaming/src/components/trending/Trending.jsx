import { useEffect, useState } from "react";
import * as selectedGamesServices from '../../services/selectedGamesServices'
import TrendingGame from "./trending-game/TrendingGame";

import styles from './trending.module.css'

export default function Trending() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        selectedGamesServices.getTrendingGames()
            .then((result) => {
                setGames(result)
            })
    }, [])
    return (
        <div className="section trending">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>Trending</h6>
                            <h2>Trending Games</h2>
                        </div>
                    </div>
                    <ul className={styles['games-wrapper']}>
                        {games.map((game) =>
                            <li
                                key={game._id}
                                className={styles['single-game']}
                            >
                                <TrendingGame gameData={{...game}} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}