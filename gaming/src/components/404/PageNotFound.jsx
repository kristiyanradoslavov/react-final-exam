import Path from "../../paths"
import styles from "./pageNotFound.module.css"
import { Link } from "react-router-dom"


export default function PageNotFound() {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Page not found</h3>
                            <span className="breadcrumb">
                                <Link to={Path.Home}>Home</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['error-wrapper']}>
                <img src="/assets/images/Error-404.png" alt="" />
            </div>

        </>
    )
}