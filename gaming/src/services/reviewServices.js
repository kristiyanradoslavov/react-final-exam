const baseUrl = 'http://localhost:3030/data/reviews'

export const newReview = async (values) => {
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        }
    }

    const response = await fetch(baseUrl, httpHeaders);

    const result = await response.json();

    return result;
}

export const getGameReviews = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });
    
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }
    
    const response = await fetch(`${baseUrl}?${query}`, httpHeaders);

    if (!response.ok) {
        throw response;
    }

    const result = await response.json();

    return result;
}