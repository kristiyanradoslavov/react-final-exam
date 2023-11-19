import styles from './newGameForm.module.css'


export default function NewGameForm() {
    const closeButtonHandler = () => {
        console.log('close')
    }

    return (

        <div>

            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add New Game</h3>
                            <span className="breadcrumb">
                                <a href="#">Home</a> &gt; <a href="#">Catalogue</a> &gt; Add Game
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <form className={styles['game-form']}>
                <div className={styles['form-group']}>
                    <label htmlFor="gameTitle">Game title</label>
                    <input id="gameTitle" name="gameTitle" type="text" />

                    <div className={styles['form-group']}>
                        <label htmlFor="category">Category</label>
                        <input id="category" name="category" type="text" />

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input id="imageUrl" name="imageUrl" type="text" />


                    <div className={styles['form-group']}>
                        <label htmlFor="price">Price</label>
                        <input id="price" name="price" type="text" />

                    </div>
                </div>

                <div className={styles['form-group']}>
                    <label htmlFor="price">Description</label>
                    <textarea id="price" name="price" type="text" />
                </div>

                <div id={styles['form-actions']}>
                    <button id="action-add" className="btn" type="submit">Add Game</button>
                </div>

            </form>
        </div>
    );

}