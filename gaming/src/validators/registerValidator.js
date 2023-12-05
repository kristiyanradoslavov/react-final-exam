const FormKeys = {
    FirstName: 'first-name',
    LastName: 'last-name',
    Email: 'email',
    PhoneNumber: 'phone-number',
    Password: 'password',
    RepeatPassword: 'repeat-password'

}

const NameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)?$/
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PhoneRegex = /^0[1-9]{9}$|^359[1-9]{9}$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).+$/

export default function registerValidator(values) {
    let errors = {};

    for (const currentValue of Object.values(FormKeys)) {
        if (values[currentValue].length === 0 || !values[currentValue].trim().length) {
            errors[currentValue] = ['This field is mandatory!']
        }
    }


    if (!NameRegex.test(values[FormKeys.FirstName])) {
        if (!errors.hasOwnProperty(FormKeys.FirstName)) {
            errors[FormKeys.FirstName] = [];
        }
        errors[FormKeys.FirstName].push('The first name should contain only letters!')
    }

    if (!NameRegex.test(values[FormKeys.LastName])) {
        if (!errors.hasOwnProperty(FormKeys.LastName)) {
            errors[FormKeys.LastName] = [];
        }
        errors[FormKeys.LastName].push('The last name should contain only letters!')
    }


    if (!EmailRegex.test(values[FormKeys.Email])) {
        if (!errors.hasOwnProperty(FormKeys.Email)) {
            errors[FormKeys.Email] = [];
        }

        errors[FormKeys.Email].push('This email is invalid!')
    }

    if (!PhoneRegex.test(values[FormKeys.PhoneNumber])) {
        if (!errors.hasOwnProperty(FormKeys.PhoneNumber)) {
            errors[FormKeys.PhoneNumber] = [];
        }

        errors[FormKeys.PhoneNumber].push('The phone must start with 0 and be 10 digits long or start with 359 and be 12 digits long!')
    }

    if (!PasswordRegex.test(values[FormKeys.Password])) {
        if (!errors.hasOwnProperty(FormKeys.Password)) {
            errors[FormKeys.Password] = [];
        }

        errors[FormKeys.Password].push('The password must contain at least 1 lower case letter, 1 upper case letter and one digit!')
    }


    
    if (values[FormKeys.Password] != values[FormKeys.RepeatPassword]) {
        if (!errors.hasOwnProperty(FormKeys.RepeatPassword)) {
            errors[FormKeys.RepeatPassword] = [];
        }

        errors[FormKeys.RepeatPassword].push('The two passwords don`t match!')
    }


    return errors;
}