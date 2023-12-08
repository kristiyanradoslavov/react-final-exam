import { useEffect, useState } from "react";
import MostPlayedGame from "./most-played-game/MostPlayedGame";
import * as selectedGamesServices from "../../services/selectedGamesServices";
import styles from "./mostPlayed.module.css";

export default function MostPlayed() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        selectedGamesServices.getMostBoughtGames()
            .then((result) => {
                setGames(result);
            });
    }, [])
    return (
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
                        {/* <div className="main-button">
                            <a href="shop.html">View All</a>
                        </div> */}
                    </div>

                    <ul className={styles['games-wrapper']}>
                        {games.map((game) =>
                            <li 
                            key={game._id}
                            className={styles['single-game']}
                            >
                                {<MostPlayedGame gameData={{...game}}/>}
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </div>
    );
}