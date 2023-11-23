import { Routes, Route, useNavigate } from "react-router-dom"

import { useState } from "react"
import { AuthContext } from "./contexts/authContext";
import { register } from "./services/authServices";

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

    const navigate = useNavigate();

    const registerSubmitHandler = async (values) => {
        try {
            const result = await register(values)
            if (result.code === 409) {
                throw new Error('This user already exists')
            }
            closeRegisterModal();
            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }

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
    }

    return (
        <>
            {/* Preloader */}

            <AuthContext.Provider value={context}>
                <Header createUserHandler={openRegisterModal} openLoginModal={openLoginModal} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="catalogue" element={<Catalogue />} />
                    <Route path="/product-details/:gameId" element={<ProductDetails />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="add-new-game" element={<NewGameForm />} />

                </Routes>

                {createUserModal && <RegisterModal closeRegisterModal={closeRegisterModal} />}
                {loginModal && <LoginModal closeLoginModal={closeLoginModal} />}


                <Footer />
            </AuthContext.Provider>
        </>

    )
}

export default App
