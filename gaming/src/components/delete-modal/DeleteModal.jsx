import styles from "./deleteModal.module.css";


export default function DeleteModal({
    closeModalHandler,
}) {


    const closeButtonHandler = () => {
        closeModalHandler()
    }

    const deleteBtnHandler = () => {
        console.log('delete')
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