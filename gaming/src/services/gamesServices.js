const baseUrl = 'http://localhost:3030/jsonstore/games'


export const getAllGames = async () => {

    const response = await fetch(baseUrl);
    const data = await response.json();

    return Object.values(data);
}


export const createNewGame = async (formData) => {
    const httpHeaders = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json'
        }
    }
    const response = await fetch(baseUrl, httpHeaders);
    const result = await response.json();

    return result;
}

export const getSingleGame = async (gameId) => {

    const response = await fetch(`${baseUrl}/${gameId}`);
    const result = await response.json();

    console.log(result)
    return result;
}