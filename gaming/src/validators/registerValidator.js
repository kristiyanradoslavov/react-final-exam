const FormKeys = {
    FirstName: 'first-name',
    LastName: 'last-name',
    Email: 'email',
    PhoneNumber: 'phone-number',
    Password: 'password',
    RepeatPassword: 'repeat-password'

}


export default function registerValidator(values) {
    let errors = {};

    for (const currentValue of Object.values(FormKeys)) {
        if (values[currentValue].length === 0 || !values[currentValue].trim().length) {
            errors[currentValue] = 'This field is mandatory!'
        }
    }

    return errors;
}