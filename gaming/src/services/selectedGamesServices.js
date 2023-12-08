const trendingGamesBaseUrl = 'http://localhost:3030/data/trendingGames'
const mostBoughtGamesBaseUrl = 'http://localhost:3030/data/mostBought'



export const getTrendingGames = async () => {

    const response = await fetch(trendingGamesBaseUrl);
    const data = await response.json();

    return data;
}


export const getMostBoughtGames = async () => {

    const response = await fetch(mostBoughtGamesBaseUrl);
    const data = await response.json();

    return data;
}