import {capitalize, reverseString, Calculator, caesarCipher} from "../modules/FunctionsToBeTested.js";

describe("capitalize()", ()=> {
  test('function should exist', () => {
    expect(capitalize).not.toBeUndefined();
    expect(typeof capitalize).toBe("function");
  });

  test('should return error when passed with non-string args', () => {
    const ERROR_MSG = 'Error: accepts string values only'
    let testCases = [
      {input: 25},         // Number
      {input: false},      // Boolean
      {input: null},       // NULL
      {input: undefined},  // Undefined
      {input: []},         // Object: Array
      {input: () => {}}    // Object: Function
    ]

    testCases.forEach((test) => {
      expect(() => capitalize(test.input)).toThrow(ERROR_MSG);
    })
  });

  test('should make first character capitalized', () => {
    let testCases = [
      {input: "mexico", expected: "Mexico"},
      {input: "canada", expected: "Canada"},
      {input: "1 hundred", expected: "1 hundred"},
    ]

    testCases.forEach((test) => {
      expect(capitalize(test.input)).toBe(test.expected);
    })
  });

  
})

describe("reverseString()", ()=> {
  test('function should exist', () => {
    expect(reverseString).not.toBeUndefined();
    expect(typeof reverseString).toBe("function");
  });

  test('should return error when passed with non-string args', () => {
    const ERROR_MSG = 'Error: accepts string values only'
    let testCases = [
      {input: 25},         // Number
      {input: false},      // Boolean
      {input: null},       // NULL
      {input: undefined},  // Undefined
      {input: []},         // Object: Array
      {input: () => {}}    // Object: Function
    ]

    testCases.forEach((test) => {
      expect(() => reverseString(test.input)).toThrow(ERROR_MSG); // Object: Function
    })
  });

  test('should return the reverse of the passed string', () => {
    let testCases = [
      {input: "foo", expected: "oof"},
      {input: "mickey mouse", expected: "esuom yekcim"},
      {input: "123456789", expected: "987654321"},
      {input: "", expected: ""},
    ]

    testCases.forEach((test) => {
      expect(reverseString(test.input)).toBe(test.expected)
    })
  })
})

describe("Calculator", () => {  
  let calculator;
  beforeAll(() => {
    calculator = Calculator();
  });

  test('Object should exist', () => {
    expect(Calculator).not.toBeUndefined();
    expect(typeof calculator).toBe("object");
  });


  describe("add()", () => {
    test('should exist & to be type of function', () => {
      expect(calculator.add).not.toBeUndefined();
      expect(typeof calculator.add).toBe('function');
    });

    test('has 2 parameters', () => {
      expect(calculator.add.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      const ERROR_MSG = 'Error: accepts numeric values only'
      let testCases = [
        {num1: 25, num2: "35"},         // Stringed Number
        {num1: 8, num2: "two"},         // Worded Number
        {num1: () => [], num2: []}      // Object / Array
      ]
      

      testCases.forEach((test) => {
        // console.log(typeof test.num1, typeof test.num2);
        expect(() => calculator.add(test.num1, test.num2)).toThrow(ERROR_MSG);
      })
    })

    test('should sum numbers accurately', () => {

      let testCases = [
        {num1: 12, num2: 21, expected: 33},                  // Positive Integer
        {num1: 12, num2: -21, expected: -9},                 // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 6.2},               // Decimal
        {num1: 9999999999, num2: 1, expected: 10000000000},  // Edge Case
      ]
      

      testCases.forEach((test) => {
        // console.log(typeof test.num1, typeof test.num2);
        expect(calculator.add(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })


  describe("subtract()", () => {
    test('should exist & to be type of function', () => {
      expect(calculator.subtract).not.toBeUndefined();
      expect(typeof calculator.subtract).toBe('function');
    });

    test('has 2 parameters', () => {
      expect(calculator.subtract.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      const ERROR_MSG = 'Error: accepts numeric values only'
      let testCases = [
        {num1: 25, num2: "35"},         // Stringed Number
        {num1: 8, num2: "two"},         // Worded Number
        {num1: () => [], num2: []}      // Object / Array
      ]
      

      testCases.forEach((test) => {
        expect(() => calculator.subtract(test.num1, test.num2)).toThrow(ERROR_MSG);
      })
    })

    test('should subtract numbers accurately', () => {

      let testCases = [
        {num1: 12, num2: 21, expected: -9},                  // Positive Integer
        {num1: 12, num2: -21, expected: 33},                 // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 0.8},               // Decimal
        {num1: 9999999999, num2: 1, expected: 9999999998},  // Edge Case
      ]
      

      testCases.forEach((test) => {
        // console.log(typeof test.num1, typeof test.num2);
        expect(calculator.subtract(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })

  describe("divide()", () => {
    test('should exist & to be type of function', () => {
      expect(calculator.divide).not.toBeUndefined();
      expect(typeof calculator.divide).toBe('function');
    });

    test('has 2 parameters', () => {
      expect(calculator.divide.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      const ERROR_MSG = 'Error: accepts numeric values only'
      let testCases = [
        {num1: 25, num2: "35"},         // Stringed Number
        {num1: 8, num2: "two"},         // Worded Number
        {num1: () => [], num2: []}      // Object / Array
      ]
      

      testCases.forEach((test) => {
        expect(() => calculator.divide(test.num1, test.num2)).toThrow(ERROR_MSG);
      })
    })

    test('should divide numbers accurately', () => {

      let testCases = [
        {num1: 12, num2: 21, expected: 0.57},                  // Positive Integer
        {num1: 12, num2: -21, expected: -0.57},                 // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 1.3},               // Decimal
        {num1: 9999999999, num2: 2, expected: 4999999999.5},  // Edge Case
      ]
      

      testCases.forEach((test) => {
        expect(calculator.divide(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })

  describe("multiply()", () => {
    test('should exist & to be type of function', () => {
      expect(calculator.multiply).not.toBeUndefined();
      expect(typeof calculator.multiply).toBe('function');
    });

    test('has 2 parameters', () => {
      expect(calculator.multiply.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      const ERROR_MSG = 'Error: accepts numeric values only'
      let testCases = [
        {num1: 25, num2: "35"},         // Stringed Number
        {num1: 8, num2: "two"},         // Worded Number
        {num1: () => [], num2: []}      // Object / Array
      ]
      

      testCases.forEach((test) => {
        expect(() => calculator.multiply(test.num1, test.num2)).toThrow(ERROR_MSG);
      })
    })

    test('should divide numbers accurately', () => {

      let testCases = [
        {num1: 12, num2: 21, expected: 252},                  // Positive Integer
        {num1: 12, num2: -21, expected: -252},                 // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 9.45},               // Decimal
        {num1: 9999999999, num2: 2, expected: 19999999998},  // Edge Case
      ]
      

      testCases.forEach((test) => {
        expect(calculator.multiply(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })
})
