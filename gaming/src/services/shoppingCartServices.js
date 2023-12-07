const baseUrl = 'http://localhost:3030/data/cartItems'


export const createNewItem = async (formData) => {
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

    return result;
}


export const getAllItems = async (userId) => {

    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`
    });

    const httpHeaders = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}?${query}`, httpHeaders);
    const data = await response.json();

    return data;
}


export const deleteItem = async (itemId) => {
    const token = localStorage.getItem('accessToken');

    const httpHeaders = {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    }

    const response = await fetch(`${baseUrl}/${itemId}`, httpHeaders);

    const result = await response.json();

    return result;
}