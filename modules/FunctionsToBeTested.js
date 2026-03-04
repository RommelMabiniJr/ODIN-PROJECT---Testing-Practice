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


const _isALetter = (char) => {
    return /[a-zA-Z]/.test(char);
}

const _isCapitalized = (char) => {
    return _isALetter(char) && char == char.toUpperCase();
}


export const caesarCipher = (characters, factor) => {
   const lowercased_alphabet = 'abcdefghijklmnopqrstuvwxyz';
   const uppercased_alphabet = lowercased_alphabet.toUpperCase();

   if((typeof characters !== "string") || (typeof factor !== "number")) {
        throw new Error('Invalid input: characters should be string and factor should be a number');
   }

   let encryptedString = '';

   for (let p = 0; p < characters.length; p++) {
    const char = characters[p];

    if (!_isALetter(char)) {
        encryptedString += char;
        continue;
    }

    const alphabet = !_isCapitalized(char) ? lowercased_alphabet : uppercased_alphabet;
    
    const index = alphabet.indexOf(char);
    const sum = index + factor;

    const finalIndex = (sum + alphabet.length) % alphabet.length;
    const charToBeAdded = alphabet.charAt(finalIndex);

    encryptedString += charToBeAdded;
   }

   return encryptedString;
}