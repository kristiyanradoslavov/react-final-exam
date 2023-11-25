const BaseUrl = 'http://localhost:3030/users'

const token = localStorage.getItem('accessToken');

export const register = async (values) => {
    const data = {
        firstName: values['first-name'],
        lastName: values['last-name'],
        email: values['email'],
        phoneNumber: values['phone-number'],
        password: values['password'],
    }

    const httpHeaders = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    }

    // if (token) {
    //     httpHeaders.headers = {
    //         ...httpHeaders.headers,
    //         'X-Authorization': token
    //     };
    // }


    const response = await fetch(`${BaseUrl}/register`, httpHeaders);
    const result = await response.json();

    return result;

}

export const login = async (values) => {

    const httpHeaders = {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json'
        }
    }

    // if (token) {
    //     httpHeaders.headers = {
    //         ...httpHeaders.headers,
    //         'X-Authorization': token
    //     };
    // }

    const response = await fetch(`${BaseUrl}/login`, httpHeaders);
    const result = await response.json();

    return result
}