import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext";

import Path from "./paths";
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import ProductDetails from "./components/product-details/ProductDetails"
import Contacts from "./components/contacts/Contacts"
import Catalogue from "./components/catalogue/Catalogue"
import RegisterModal from "./components/register-modal/RegisterModal"
import LoginModal from "./components/login-modal/LoginModal"
import NewGameForm from "./components/new-game-form/NewGameForm"
import EditGameForm from "./components/edit-game-form/EditGameForm";
import AuthGuard from "./components/guards/AuthGuard";
import useModalState from "./hooks/useModalState";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";


function App() {

    const {
        openRegisterModal,
        closeRegisterModal,
        openLoginModal,
        closeLoginModal,
        registerModalState,
        loginModalState
    } = useModalState();

    return (
        <>
            {/* Preloader */}

            <AuthProvider closeRegisterModal={closeRegisterModal} closeLoginModal={closeLoginModal}>
                <Header createUserHandler={openRegisterModal} openLoginModal={openLoginModal} />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Catalogue} element={<Catalogue openLoginModal={openLoginModal} />} />
                    <Route path={`${Path.ProductDetails}/:gameId`} element={<ProductDetails />} />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={`${Path.EditGame}/:gameId`} element={<EditGameForm />} />


                    <Route element={<AuthGuard />}>

                        <Route path={Path.AddNewGame} element={<NewGameForm />} />
                        <Route path={Path.ShoppingCart} element={<ShoppingCart />} />

                    </Route>

                </Routes>

                {registerModalState && <RegisterModal closeRegisterModal={closeRegisterModal} openLoginModal={openLoginModal} />}
                {loginModalState && <LoginModal closeLoginModal={closeLoginModal} openRegisterModal={openRegisterModal} />}

                <Footer />
            </AuthProvider>
        </>

    )
}

export default App
