
const LoginKeys = {
    Email: 'email',
    Password: 'password',
}

export default function loginValidator(values) {
    let errors = {};

    for (const currentValue of Object.values(LoginKeys)) {
        if (values[currentValue].length === 0 || !values[currentValue].trim().length) {
            errors[currentValue] = ['This field is mandatory!']
        }
    }

    return errors;
}