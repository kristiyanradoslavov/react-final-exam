import styles from "./shoppingCart.module.css";

export default function ShoppingCart() {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Shopping Cart</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['products-wrapper']}>
                <div className={styles['products']}>
                    <div className={styles['product']}>
                        <img src="" alt="" />

                    </div>
                </div>

                <form className={styles['checkout-form']}>
                    
                </form>
            </div>
        </>
    );
}