const formValueKeys = {
    NewReview: 'new-comment'
}

export default function newReviewValidator(values) {
    let errors = {};

    for (const currentValue of Object.values(formValueKeys)) {
        if (values[currentValue].length === 0 || !values[currentValue].trim().length) {
            errors[currentValue] = ['This field is mandatory!']
        }
    }

    return errors;

}