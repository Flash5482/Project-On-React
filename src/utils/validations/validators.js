export const requiredField = value => {
    if (value) return undefined;
    return 'Field is reqired'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max Lenght is ${maxLength} symbols`;
    return undefined
}
