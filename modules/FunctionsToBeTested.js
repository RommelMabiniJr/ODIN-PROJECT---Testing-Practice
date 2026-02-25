import { validateTwoNumbers, validateString } from "./utils"

export const capitalize = (word) => {
    validateString(word);
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export const reverseString = (str) => {
    validateString(str)

    let reversed = "";
    for (let i = str.length; i >= 0; i--) {
        const element = str.charAt(i);
        reversed += element;
    }

    return reversed;
}

export const Calculator = () => {
    const add = (num1, num2) => {
        validateTwoNumbers(num1, num2);
        return num1 + num2;
    }

    const subtract = (num1, num2) => {
        validateTwoNumbers(num1, num2);
        return num1 - num2;
    }

    const divide = (num1, num2) => {
        validateTwoNumbers(num1, num2);
        return num1 / num2;
    }

    const multiply = (num1, num2) => {
        validateTwoNumbers(num1, num2);
        return num1 * num2;
    }
    
    return {
        add,
        subtract,
        divide,
        multiply
    }
}
