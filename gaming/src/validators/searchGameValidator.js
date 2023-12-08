const SearchKey = {
    SearchGame: 'search-game',
}

export default function searchGameValidator(values) {
    let errors = {};

    for (const currentValue of Object.values(SearchKey)) {
        if (values[currentValue].length === 0 || !values[currentValue].trim().length) {
            errors[currentValue] = ['This field is mandatory!']
        }
    }

    return errors;

}