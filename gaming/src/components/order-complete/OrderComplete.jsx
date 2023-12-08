import { Link } from "react-router-dom";
import styles from "./orderComplete.module.css";
import Path from "../../paths";


export default function OrderComplete() {
    return (
        <>
        <div className="page-heading header-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Successful Order</h3>
                        <span className="breadcrumb">
                            <Link to={Path.Home}>Home</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['message']}>
            <img src="/assets/images/Tick.png" alt="" />
            <div>The order is successful!</div>
        </div>

    </>
    );
}