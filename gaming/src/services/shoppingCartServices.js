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