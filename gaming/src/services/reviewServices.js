const baseUrl = 'http://localhost:3030/data/reviews'

export const newComment = async (values) => {
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

export const getGameComments = async () => {
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: 'GET',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        }
    }


}