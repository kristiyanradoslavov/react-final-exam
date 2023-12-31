const baseUrl = 'http://localhost:3030/data/games'


export const getAllGames = async (filterBy) => {
    if (filterBy != 'all') {
        const query = new URLSearchParams({
            where: `category="${filterBy}"`
        });

        const response = await fetch(`${baseUrl}?${query}`);
        const data = await response.json();
        return data;
    }

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


export const editGame = async (gameId, gameData) => {
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: "PUT",
        body: JSON.stringify(gameData),
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    }

    const response = await fetch(`${baseUrl}/${gameId}`, httpHeaders);

    const result = response.json();

    return result;
}

export const deleteGame = async (gameId) => {
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    }

    const response = await fetch(`${baseUrl}/${gameId}`, httpHeaders);

    const result = await response.json();

    return result;
}

export const getGamesPerPage = async (skip, pageSize, filterBy) => {
    const httpHeaders = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
        }
    }

    if (filterBy != 'all') {
        const query = new URLSearchParams({
            where: `category="${filterBy}"`
        });

        const response = await fetch(`${baseUrl}?offset=${skip}&pageSize=${pageSize}&${query}`, httpHeaders);
        const result = await response.json();
        return result;

    }

    const response = await fetch(`${baseUrl}?offset=${skip}&pageSize=${pageSize}`, httpHeaders);
    const result = await response.json();
    return result;
}


export const getSearchedGame = async (gameTitle) => {
    const httpHeaders = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
        }
    }

    const query = new URLSearchParams({
        where: `title="${gameTitle}"`
    });

    const response = await fetch(`${baseUrl}?${query}`, httpHeaders);

    const result = await response.json();

    return result;
}