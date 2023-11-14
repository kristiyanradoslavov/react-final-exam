import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import OurShop from "./components/our-shop/OurShop"


import { Routes, Route } from "react-router-dom"


function App() {

    return (
        <>
            {/* Preloader */}

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="our-shop" element={<OurShop />} />

            </Routes>



            <Footer />
        </>

    )
}

export default App
