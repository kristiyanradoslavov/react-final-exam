import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import ProductDetails from "./components/product-details/ProductDetails"
import Contacts from "./components/contacts/Contacts"
import Catalogue from "./components/catalogue/Catalogue"
import RegisterModal from "./components/register-modal/RegisterModal"
import { useState } from "react"


function App() {

    const [createUserModal, setCreateUserModal] = useState(false)

    const openRegisterModal = () => {
        setCreateUserModal(true)
    }

    const closeRegisterModal = () => {
        setCreateUserModal(false)
    }

    return (
        <>
            {/* Preloader */}

            <Header createUserHandler={openRegisterModal} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="catalogue" element={<Catalogue />} />
                <Route path="product-details" element={<ProductDetails />} />
                <Route path="contacts" element={<Contacts />} />

            </Routes>

            {createUserModal && <RegisterModal />}



            <Footer />
        </>

    )
}

export default App
