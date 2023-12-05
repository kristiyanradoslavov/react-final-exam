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
            errors[currentValue] = ['This field is mandatory!']
        }
    }

    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)?$/

    if (!nameRegex.test(values[FormKeys.FirstName])) {
        if (!errors.hasOwnProperty(FormKeys.FirstName)) {
            errors[FormKeys.FirstName] = [];
        }
        errors[FormKeys.FirstName].push('The first name should contain only letters!')
    }
    
    if (!nameRegex.test(values[FormKeys.LastName])) {
        if (!errors.hasOwnProperty(FormKeys.LastName)) {
            errors[FormKeys.LastName] = [];
        }
        errors[FormKeys.LastName].push('The last name should contain only letters!')
    }

    return errors;
}