import styles from './newGameBtn.module.css';
import { Link } from 'react-router-dom';

export default function NewGameBtn() {

    
    return (
        <Link to={'add-new-game'} className={styles['single-product']}>
            <img src="assets/images/pngegg.png" alt="" />
            <div>Add new Game</div>
        </Link>
    );
}