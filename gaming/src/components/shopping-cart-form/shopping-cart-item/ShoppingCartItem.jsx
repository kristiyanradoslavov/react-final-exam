import styles from "./shoppingCartItem.module.css"

import * as shoppingCartServices from '../../../services/shoppingCartServices'


export default function ShoppingCartItem({
    itemDetails,
    onItemDelete,
    updateFinalPrice,
}) {

    const deleteBtnHandler = async (e) => {
        const currentGameId = e.currentTarget.id;
        try {
            const result = await shoppingCartServices.deleteItem(currentGameId);
            onItemDelete(currentGameId);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={itemDetails.imageUrl}
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: 65 }}
                            />
                        </div>
                        <div className="ms-3">
                            <h5>{itemDetails.gameTitle}</h5>
                            <p className="small mb-0">{itemDetails.gameCategory}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">{itemDetails.quantity}</h5>
                        </div>
                        <div style={{ width: 80 }}>
                            <h5 className="mb-0">$ {itemDetails.finalPrice}</h5>
                        </div>
                        <button id={itemDetails._id} className={styles['delete-btn']} style={{ color: "#cecece" }} onClick={deleteBtnHandler}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}