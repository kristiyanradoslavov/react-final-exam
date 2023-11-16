import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import ProductDetails from "./components/product-details/ProductDetails"
import Contacts from "./components/contacts/Contacts"
import Catalogue from "./components/catalogue/Catalogue"
import RegisterModal from "./components/register-modal/RegisterModal"


function App() {

    return (
        <>
            {/* Preloader */}

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="catalogue" element={<Catalogue />} />
                <Route path="product-details" element={<ProductDetails />} />
                <Route path="contacts" element={<Contacts />} />

            </Routes>



            <Footer />
        </>

    )
}

export default App
