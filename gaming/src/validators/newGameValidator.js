const NewGameKeys = {
    Title: 'title',
    Category: 'category',
    ImageUrl: 'imageUrl',
    Price: 'price',
    Description: 'description',
}


export default function newGameValidator(values) {
    let errors = {};

    for (const currentValue of Object.values(NewGameKeys)) {
        if (values[currentValue].length === 0 || !values[currentValue].trim().length) {
            errors[currentValue] = ['This field is mandatory!']
        }
    }

    return errors;
}