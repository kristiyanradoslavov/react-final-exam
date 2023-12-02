import Path from '../../paths';
import styles from './newGameBtn.module.css';
import { Link } from 'react-router-dom';


export default function NewGameBtn() {

    return (
        <Link to={Path.AddNewGame} className={styles['single-product']}>
            <img src="assets/images/pngegg.png" alt="" />
            <div>Add new Game</div>
        </Link>
    );
}