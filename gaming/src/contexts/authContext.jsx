import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"

import * as authServices from "../services/authServices";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";
// import { closeRegisterModal, closeLoginModal } from '../App'


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
    closeRegisterModal,
    closeLoginModal,
}) => {

    const [auth, setAuth] = usePersistedState('accessToken', {});

    // AUTH PART
    const navigate = useNavigate();

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authServices.register(values)
            if (result.code === 409) {
                throw new Error('This user already exists')
            }

            closeRegisterModal();
            setAuth(result);

            // localStorage.setItem('accessToken', result.accessToken)

            navigate(Path.Home);

        } catch (error) {
            console.log(error);
        }
    }

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authServices.login(values);

            if (result.code === 403) {
                throw new Error("Invalid credentials")
            }
            setAuth(result);

            // localStorage.setItem('accessToken', result.accessToken)

            closeLoginModal();
            navigate(Path.Catalogue);

        } catch (error) {
            console.log(error);
        }
    }

    const logoutSubmitHandler = async () => {
        try {
            const result = await authServices.logout();
            if (!result.ok) {
                throw result
            }

            setAuth({});
            localStorage.removeItem('accessToken')
            navigate(Path.Home);

        } catch (error) {
            console.log(error)
        }
    }


    const context = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutSubmitHandler,
        isAuthenticated: !!auth.email,
        name: auth.firstName,
        email: auth.email,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}