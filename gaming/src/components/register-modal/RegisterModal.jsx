import styles from './registerModal.module.css'

export default function RegisterModal() {
    return (
        <div className={styles['overlay']}>
            <div className={styles['backdrop']}></div>
            <div className={styles['modal']}>
                <div className="user-container">
                    <header className="headers">
                        <h2>Register</h2>
                        <button className="btn close">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>

                    <form>
                        <div className="form-row">

                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <input id="firstName" name="firstName" type="text" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input id="lastName" name="lastName" type="text" />

                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="text" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <input id="phoneNumber" name="phoneNumber" type="text" />

                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="Password">Password</label>
                            <input id="Password" name="Password" type="text" />
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="Repeat Password">Repeat Repeat Password</label>
                            <input id="Repeat Password" name="Repeat Password" type="text" />
                        </div>

                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Register</button>
                            <button id="action-cancel" className="btn" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}