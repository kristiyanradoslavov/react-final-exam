import styles from "./deleteModal.module.css";
import * as gamesServices from '../../services/gamesServices'
import { useNavigate } from "react-router-dom";
import Path from "../../paths";


export default function DeleteModal({
    closeModalHandler,
    gameId,
}) {    

    const navigate = useNavigate();


    const closeButtonHandler = () => {
        closeModalHandler()
    }

    const deleteBtnHandler = () => {
        gamesServices.deleteGame(gameId)
            .then(result => {
                navigate(Path.Catalogue)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className={styles['overlay']} >
            <div className={styles['backdrop']} onClick={closeButtonHandler}></div>
            <div className={styles['modal']}>
                <div className={styles['user-container']}>
                    <div className={styles['form-header']}>
                        <p className={styles['text-info']}>Are you sure you want to delete Mortal Combat ? </p>
                    </div>

                    <div className={styles['btn-wrapper']}>
                        <button className={styles['btn']} onClick={closeButtonHandler}>Cancel</button>
                        <button className={styles['delete']} onClick={deleteBtnHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}