import { useContext, useState } from 'react';
import useForm from '../../hooks/useForm';
import { AuthContext } from '../../contexts/authContext';

import styles from './registerModal.module.css'
import registerValidator from '../../validators/registerValidator';

const FormKeys = {
    FirstName: 'first-name',
    LastName: 'last-name',
    Email: 'email',
    PhoneNumber: 'phone-number',
    Password: 'password',
    RepeatPassword: 'repeat-password'

}

export default function RegisterModal({
    closeRegisterModal,
    openLoginModal,
}) {

    const [serverError, setServerError] = useState([]);


    const closeButtonHandler = () => {
        closeRegisterModal()
    }

    const loginBtnHandler = () => {
        closeRegisterModal();
        openLoginModal();
    }

    const { registerSubmitHandler } = useContext(AuthContext);


    const { values, errors, onChange, onSubmit } = useForm(
        async () => {
            const serverResult = await registerSubmitHandler(values);

            if (serverResult) {
                setServerError([serverResult]);
            }
        }
        , registerValidator, {
        [FormKeys.FirstName]: '',
        [FormKeys.LastName]: '',
        [FormKeys.Email]: '',
        [FormKeys.PhoneNumber]: '',
        [FormKeys.Password]: '',
        [FormKeys.RepeatPassword]: '',
    });



    return (
        <div className={styles['overlay']}>
            <div className={styles['backdrop']} onClick={closeButtonHandler}></div>
            <div className={styles['modal']}>
                <div className={styles['user-container']}>
                    <div className={styles['form-header']}>
                        <h2>Register</h2>
                        <button className={`${styles['btn']} ${styles['close']}`} onClick={closeButtonHandler}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={onSubmit}>
                        <div className={styles['form-row']}>

                            <div className={styles['form-group']}>
                                <label htmlFor="first-name">First name</label>
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    values={values[FormKeys.FirstName]}
                                    onChange={onChange}
                                />
                                <ul>
                                    {errors[FormKeys.FirstName]
                                        &&
                                        (errors[FormKeys.FirstName]).map((error, index) => {
                                            return <li key={index} className={styles['error-wrapper']}>
                                                <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                                <div className={styles['error-msg']}>
                                                    {error}
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>

                            <div className={styles['form-group']}>
                                <label htmlFor="last-name">Last name</label>
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    values={values[FormKeys.LastName]}
                                    onChange={onChange}
                                />
                                <ul>
                                    {errors[FormKeys.LastName]
                                        &&
                                        (errors[FormKeys.LastName]).map((error, index) => {
                                            return <li key={index} className={styles['error-wrapper']}>
                                                <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                                <div className={styles['error-msg']}>
                                                    {error}
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>



                        </div>

                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    values={values[FormKeys.Email]}
                                    onChange={onChange}
                                />
                                <ul>
                                    {errors[FormKeys.Email]
                                        &&
                                        (errors[FormKeys.Email]).map((error, index) => {
                                            return <li key={index} className={styles['error-wrapper']}>
                                                <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                                <div className={styles['error-msg']}>
                                                    {error}
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>

                                <ul>
                                    {serverError
                                        &&
                                        serverError.map((error, index) => {
                                            return <li key={index} className={styles['error-wrapper']}>
                                                <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                                <div className={styles['error-msg']}>
                                                    {error}
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>

                            <div className={styles['form-group']}>
                                <label htmlFor="phone-number">Phone number</label>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    values={values[FormKeys.PhoneNumber]}
                                    onChange={onChange}
                                />

                                <ul>
                                    {errors[FormKeys.PhoneNumber]
                                        &&
                                        (errors[FormKeys.PhoneNumber]).map((error, index) => {
                                            return <li key={index} className={styles['error-wrapper']}>
                                                <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                                <div className={styles['error-msg']}>
                                                    {error}
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles['form-group']} ${styles['long-line']}}`}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                values={values[FormKeys.Password]}
                                onChange={onChange}
                            />

                            <ul>
                                {errors[FormKeys.Password]
                                    &&
                                    (errors[FormKeys.Password]).map((error, index) => {
                                        return <li key={index} className={styles['error-wrapper']}>
                                            <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                            <div className={styles['error-msg']}>
                                                {error}
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                        <div className={`${styles['form-group']} ${styles['long-line']}}`}>
                            <label htmlFor="repeat-password">Repeat Password</label>
                            <input
                                id="repeat-password"
                                name="repeat-password"
                                type="password"
                                values={values[FormKeys.RepeatPassword]}
                                onChange={onChange}
                            />

                            <ul>
                                {errors[FormKeys.RepeatPassword]
                                    &&
                                    (errors[FormKeys.RepeatPassword]).map((error, index) => {
                                        return <li key={index} className={styles['error-wrapper']}>
                                            <img src="/assets/images/error.png" alt="" className={styles['error-img']} />
                                            <div className={styles['error-msg']}>
                                                {error}
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                        <div id={styles['form-actions']}>
                            <button id="action-save" className="btn" type="submit">Register</button>
                            <button id="action-cancel" className="btn" type="button" onClick={closeButtonHandler}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>

                {/* TODO: add functionality to the button here */}
                <div className={styles['change-modal']}>
                    Already have an account ?
                    <button className={styles['reroute-btn']} onClick={loginBtnHandler}>Login</button>
                </div>
            </div>
        </div>
    );
}