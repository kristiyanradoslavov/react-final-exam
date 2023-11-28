import { Routes, Route } from "react-router-dom"

import { useState } from "react"
import { AuthContext, AuthProvider } from "./contexts/authContext";

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

    return (
        <>
            {/* Preloader */}

            <AuthProvider closeRegisterModal={closeRegisterModal} closeLoginModal={closeLoginModal}>
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
            </AuthProvider>
        </>

    )
}

export default App
