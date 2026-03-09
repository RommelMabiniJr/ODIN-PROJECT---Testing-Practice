# Testing Practice - The Odin Project

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)  [![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014-brightgreen)](https://nodejs.org/) [![Jest](https://img.shields.io/badge/Jest-tested-green)](https://jestjs.io/)

A simple Jest testing practice project demonstrating best practices for unit testing in JavaScript. This project includes a suite of utility functions with considerable test coverage, including edge cases, error handling, and input validation.

## 📚 Project Overview

This project is part of **The Odin Project's Testing curriculum**. It serves as a practical exercise in writing robust unit tests using Jest, with a focus on:

- Test organization and structure
- Parameterized testing
- Error handling and validation
- Edge case coverage
- Test helper functions and DRY principles

## ✨ Features

The project includes **5 core functions** fully tested:

- **`capitalize()`** - Capitalizes the first character of a string
- **`reverseString()`** - Reverses a string
- **`Calculator`** - A calculator object with `add()`, `subtract()`, `divide()`, and `multiply()` methods
- **`caesarCipher()`** - Implements Caesar cipher encryption with shift factor support
- **`analyzeArray()`** - Analyzes numeric arrays and returns statistics (average, min, max, length)

## 🚀 Getting Started

### Prerequisites
Make sure the following are installed on your machine:

- ![Node.js](https://img.shields.io/badge/Node.js-v14%2B-brightgreen?logo=node.js&logoColor=white) **Node.js** (v14 or higher)
- ![npm](https://img.shields.io/badge/npm-%3E%3D6-red?logo=npm&logoColor=white) **npm** or ![Yarn](https://img.shields.io/badge/Yarn-%5E1.22-blue?logo=yarn&logoColor=white) **Yarn**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RommelMabiniJr/ODIN-PROJECT---Testing-Practice.git
cd ODIN-PROJECT---Testing-Practice
```

2. Install dependencies:
```bash
npm install
```

## ▶️ Running Tests

**Run all tests:**
```bash
npm test
```

**Run tests in watch mode** (re-runs on file changes):
```bash
npm run watch
```

## 📂 Project Structure

```
├── 📁 modules/
│   ├── 📄 FunctionsToBeTested.js     # Core functions to be tested
│   └── 📄 utils.js                   # Validation helper utilities
├── 📁 tests/
│   └── 📄 implementations.test.js    # Comprehensive Jest test suite
├── ⚙️  babel.config.js               # Babel configuration
├── 📦 package.json                   # Project dependencies and scripts
└── 📖 README.md                      # This file
```

## 🎯 Test Suite Highlights

### Best Practices Implemented

- Tests are organized using `describe()` blocks for logical grouping
- Uses arrays of test cases with `forEach()` to reduce duplication
- Custom test helpers (`_testInvalidInputsSingleParam`, `_testInvalidInputsDoubleParams`, `testFunctionExists`) promote DRY code
- Each function includes tests for:
  - Function existence and type checking
  - Type validation and error handling
  - Valid input cases
  - Edge cases (empty strings/arrays, large numbers, negative values, etc.)
- Clear, action-oriented test descriptions


## ⚡ Functions Overview

### capitalize(string)
Capitalizes the first character of a string while preserving the rest.
```javascript
capitalize("hello") // Returns "Hello"
capitalize("1 hundred") // Returns "1 hundred"
```

### reverseString(string)
Reverses the entire string.
```javascript
reverseString("hello") // Returns "olleh"
reverseString("") // Returns ""
```

### Calculator()
Factory function that returns a calculator object with basic arithmetic operations.
```javascript
const calc = Calculator();
calc.add(5, 3)      // Returns 8
calc.subtract(5, 3) // Returns 2
calc.multiply(5, 3) // Returns 15
calc.divide(6, 3)   // Returns 2
```

### caesarCipher(string, shift)
Encrypts text using Caesar cipher with a specified shift factor. Preserves non-alphabetic characters.
```javascript
caesarCipher("abc", 3)           // Returns "def"
caesarCipher("Hello, World!", 3) // Returns "Khoor, Zruog!"
caesarCipher("xyz", 3)           // Returns "abc" (wraps around)
```

### analyzeArray(array)
Analyzes a numeric array and returns statistics.
```javascript
analyzeArray([1, 8, 3, 4, 2, 6])
// Returns {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// }

analyzeArray([]) // Returns { average: null, min: null, max: null, length: null }
```

## ⚠️ Error Handling

All functions include proper validation and throw descriptive errors:

- **String functions** throw: `"Error: accepts string values only"`
- **Numeric functions** throw: `"Error: accepts numeric values only"`
- **Caesar Cipher** throws: `"Invalid input: characters should be string and factor should be a number"`
- **Array Analysis** throws: `"Invalid input: accepts array with number values only"`

## 🛠️ Technologies Used


<div style="display: flex; justify-content: left; flex-wrap: wrap; gap: 8px;">

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest">
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">

</div>




## 📚 Resources

- 📖 [Jest Documentation](https://jestjs.io/)
- 🎓 [The Odin Project - Testing](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)
- 💡 [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

## 👨‍💻 Author

Created as part of **The Odin Project** testing curriculum.

## 📄 License

![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)

---

<div align="center">

### **Happy Testing! 🧪**

If you found this helpful, please ⭐ star this repository!

</div>
