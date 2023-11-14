import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import OurShop from "./components/our-shop/OurShop"
import ProductDetails from "./components/product-details/ProductDetails"
import Contacts from "./components/contacts/Contacts"


function App() {

    return (
        <>
            {/* Preloader */}

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="our-shop" element={<OurShop />} />
                <Route path="product-details" element={<ProductDetails />} />
                <Route path="contacts" element={<Contacts />} />

            </Routes>



            <Footer />
        </>

    )
}

export default App
