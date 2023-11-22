const BaseUrl = 'http://localhost:3030/users/register'

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

    const response = await fetch(BaseUrl, httpHeaders);
    const result = await response.json();

    return result;

}