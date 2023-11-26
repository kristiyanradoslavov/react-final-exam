import { Routes, Route, useNavigate } from "react-router-dom"

import { useState } from "react"
import { AuthContext } from "./contexts/authContext";
import * as authServices from "./services/authServices";

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import ProductDetails from "./components/product-details/ProductDetails"
import Contacts from "./components/contacts/Contacts"
import Catalogue from "./components/catalogue/Catalogue"
import RegisterModal from "./components/register-modal/RegisterModal"
import LoginModal from "./components/login-modal/LoginModal"
import NewGameForm from "./components/new-game-form/NewGameForm"
import Path from "./paths";


function App() {

    const [createUserModal, setCreateUserModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const navigate = useNavigate();

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authServices.register(values)
            if (result.code === 409) {
                throw new Error('This user already exists')
            }

            closeRegisterModal();
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken)

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
            localStorage.setItem('accessToken', result.accessToken)
            closeLoginModal();
            navigate(Path.Catalogue);

        } catch (error) {
            console.log(error);
        }
    }

    const logoutSubmitHandler = async () => {
        try {
            const result = await authServices.logout();
            if(!result.ok) {
                throw result
            }

            setAuth({});
            localStorage.removeItem('accessToken')
            navigate(Path.Home);

        } catch (error) {
            console.log(error)
        }
    }

    // start of modal open close; TODO: move them in a better place
    const openRegisterModal = () => {
        setCreateUserModal(true);
    }

    const closeRegisterModal = () => {
        setCreateUserModal(false);
    }

    const openLoginModal = () => {
        setLoginModal(true);
    }

    const closeLoginModal = () => {
        setLoginModal(false)
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
        <>
            {/* Preloader */}

            <AuthContext.Provider value={context}>
                <Header createUserHandler={openRegisterModal} openLoginModal={openLoginModal} />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Catalogue} element={<Catalogue />} />
                    <Route path={`${Path.ProductDetails}/:gameId`} element={<ProductDetails />} />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={Path.AddNewGame} element={<NewGameForm />} />

                </Routes>

                {createUserModal && <RegisterModal closeRegisterModal={closeRegisterModal} />}
                {loginModal && <LoginModal closeLoginModal={closeLoginModal} />}

                <Footer />
            </AuthContext.Provider>
        </>

    )
}

export default App
