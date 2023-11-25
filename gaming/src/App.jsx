import { Routes, Route, useNavigate } from "react-router-dom"

import { useState } from "react"
import { AuthContext } from "./contexts/authContext";
import { login, register } from "./services/authServices";

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
    const [auth, setAuth] = useState({});

    const navigate = useNavigate();

    const registerSubmitHandler = async (values) => {
        try {
            const result = await register(values)
            if (result.code === 409) {
                throw new Error('This user already exists')
            }


            localStorage.setItem('accessToken', result.accessToken)

            closeRegisterModal();
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    const loginSubmitHandler = async (values) => {
        try {
            const result = await login(values);

            if (result.code === 403) {
                throw new Error("Invalid credentials")
            }

            // localStorage.setItem('accessToken', result.accessToken);

            setAuth(result);
            closeLoginModal();
            navigate('catalogue');

        } catch (error) {
            console.log(error);
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
        isAuthenticated: !!auth.email,
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
