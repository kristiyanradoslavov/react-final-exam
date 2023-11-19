const baseUrl = 'http://localhost:3030/jsonstore/games'


export const getAllGames = async () => {

    const response = await fetch(baseUrl);
    const data = await response.json();

    return Object.values(data);
}