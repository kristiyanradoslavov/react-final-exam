import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MostPlayed from "./components/MostPlayed"
import Newsletter from "./components/Newsletter"
import TopCategories from "./components/TopCategories"
import Trending from "./components/Trending"
import Welcome from "./components/Welcome"


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
