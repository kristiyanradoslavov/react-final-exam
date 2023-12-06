import Welcome from "../welcome/Welcome"
import Features from "../features/Features"
import Trending from "../trending/Trending"
import MostPlayed from "../most-played/MostPlayed"
import TopCategories from "../top-categories/TopCategories"
import Newsletter from "../newsletter/Newsletter"

export default function Home() {
    return (
        <>

            <Welcome />

            {/* <Features /> */}

            <Trending />

            <MostPlayed />

            <TopCategories />

            <Newsletter />
        </>
    );
}