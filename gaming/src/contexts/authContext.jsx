import { createContext } from "react";
import { useNavigate } from "react-router-dom"

import * as authServices from "../services/authServices";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
    closeRegisterModal,
    closeLoginModal,
}) => {

    const [auth, setAuth] = usePersistedState('auth', {});


    // AUTH PART
    const navigate = useNavigate();

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authServices.register(values)
            if (result.code === 409) {
                throw new Error('This email already exists')
            }

            closeRegisterModal();
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken)

            navigate(Path.Home);

        } catch (error) {
            return error.message;
        }
    }

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authServices.login(values);


            if (result.code === 403) {
                throw new Error("Invalid Email or password!")
            }

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken)

            closeLoginModal();
            navigate(Path.Catalogue);

        } catch (error) {
            // console.error("Error in loginSubmitHandler:", error);
            return error.message;
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

            setAuth({});
            localStorage.removeItem('accessToken')
            navigate(Path.Home);


        }
    }


    const context = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutSubmitHandler,
        isAuthenticated: !!auth.email,
        name: auth.firstName,
        email: auth.email,
        userId: auth._id
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}