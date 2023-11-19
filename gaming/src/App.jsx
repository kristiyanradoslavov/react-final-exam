import { Routes, Route } from "react-router-dom"

import { useState } from "react"

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import ProductDetails from "./components/product-details/ProductDetails"
import Contacts from "./components/contacts/Contacts"
import Catalogue from "./components/catalogue/Catalogue"
import RegisterModal from "./components/register-modal/RegisterModal"
import LoginModal from "./components/login-modal/LoginModal"
import NewGameForm from "./components/new-game-form/NewGameForm"


function App() {

    const [createUserModal, setCreateUserModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

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

            <Header createUserHandler={openRegisterModal} openLoginModal={openLoginModal} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="catalogue" element={<Catalogue />} />
                <Route path="product-details" element={<ProductDetails />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="add-new-game" element={<NewGameForm />} />

            </Routes>

            {createUserModal && <RegisterModal closeRegisterModal={closeRegisterModal} />}
            {loginModal && <LoginModal closeLoginModal={closeLoginModal} />}


            <Footer />
        </>

    )
}

export default App
