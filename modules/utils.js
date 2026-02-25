export const validateTwoNumbers = (a, b) => {
    if((typeof a !== "number") || (typeof b !== "number")) {
        throw new Error('Error: accepts numeric values only');
    }
}

export const validateString = () => {
    if(typeof word != "string") {
        throw new Error('Error: accepts string values only')
    }
}