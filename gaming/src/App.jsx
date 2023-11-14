import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MostPlayed from "./components/most-played/MostPlayed"
import Newsletter from "./components/newsletter/Newsletter"
import TopCategories from "./components/top-categories/TopCategories"
import Trending from "./components/trending/Trending"
import Welcome from "./components/welcome/Welcome"


function App() {

    return (
        <>
            {/* Preloader */}

            {/* ***** Header Area Start ***** */}

            <Header />

            {/* ***** Header Area End ***** */}

            <Welcome />

            <Features />

            <Trending />

            <MostPlayed />

            <TopCategories />

            <Newsletter />

            <Footer />
        </>

    )
}

export default App
