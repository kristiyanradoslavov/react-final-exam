const baseUrl = 'http://localhost:3030/data/games'


export const getAllGames = async () => {

    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
}


export const createNewGame = async (formData) => {
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    }
    const response = await fetch(baseUrl, httpHeaders);
    const result = await response.json();

    // console.log(result)
    return result;
}

export const getSingleGame = async (gameId) => {

    const response = await fetch(`${baseUrl}/${gameId}`);
    const result = await response.json();
    
    return result;
}