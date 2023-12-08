import Welcome from "../welcome/Welcome"
import Trending from "../trending/Trending"
import MostPlayed from "../most-played/MostPlayed"
import Newsletter from "../newsletter/Newsletter"

export default function Home() {
    return (
        <>
            <Welcome />

            <Trending />

            <MostPlayed />

            <Newsletter />
        </>
    );
}