import {capitalize, reverseString, Calculator, caesarCipher, analyzeArray} from "../modules/FunctionsToBeTested.js";

const STR_ONLY_ERROR_MSG = 'Error: accepts string values only';
const NUM_ONLY_ERROR_MSG = 'Error: accepts numeric values only';

// test helper function
const _testInvalidInputsSingleParam = (func, errorMsg, testCases) => {
  testCases.forEach((test) => {
    expect(() => func(test.input)).toThrow(errorMsg);
  });
}

const _testInvalidInputsDoubleParams = (func, errorMsg, testCases) => {
  testCases.forEach((test) => {
    expect(() => func(test.input1, test.input2)).toThrow(errorMsg);
  });
}

const testFunctionExists = (getFn, name = "no name provided") => {
  test(`exists and is a function (${name})`, () => {
    const fn = getFn();
    expect(fn).toBeDefined();
    expect(typeof fn).toBe("function");
  });
};

describe("capitalize()", ()=> {
  testFunctionExists(() => capitalize, "capitalize");

  test('should return error when passed with non-string args', () => {
    let testCases = [
      {input: 25},         // Number
      {input: false},      // Boolean
      {input: null},       // NULL
      {input: undefined},  // Undefined
      {input: []},         // Object: Array
      {input: () => {}}    // Object: Function
    ]

    _testInvalidInputsSingleParam(capitalize, STR_ONLY_ERROR_MSG, testCases);
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
  testFunctionExists(() => reverseString, "reverseString");

  test('should return error when passed with non-string args', () => {
    let testCases = [
      {input: 25},         // Number
      {input: false},      // Boolean
      {input: null},       // NULL
      {input: undefined},  // Undefined
      {input: []},         // Object: Array
      {input: () => {}}    // Object: Function
    ]

    _testInvalidInputsSingleParam(reverseString, STR_ONLY_ERROR_MSG, testCases)
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

  testFunctionExists(() => Calculator, "Calculator");

  describe("add()", () => {
    testFunctionExists(() => calculator.add, "add");

    test('has 2 parameters', () => {
      expect(calculator.add.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      let testCases = [
        {input1: 25, input2: "35"},         // Stringed Number
        {input1: 8, input2: "two"},         // Worded Number
        {input1: () => [], input2: []}      // Object / Array
      ]

      _testInvalidInputsDoubleParams(calculator.add, NUM_ONLY_ERROR_MSG, testCases)
    })

    test('should sum numbers accurately', () => {
      let testCases = [
        {num1: 12, num2: 21, expected: 33},                  // Positive Integer
        {num1: 12, num2: -21, expected: -9},                 // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 6.2},               // Decimal
        {num1: 9999999999, num2: 1, expected: 10000000000},  // Edge Case
      ]

      testCases.forEach((test) => {
        expect(calculator.add(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })


  describe("subtract()", () => {
    testFunctionExists(() => calculator.subtract, "subtract");

    test('has 2 parameters', () => {
      expect(calculator.subtract.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      let testCases = [
        {input1: 25, input2: "35"},         // Stringed Number
        {input1: 8, input2: "two"},         // Worded Number
        {input1: () => [], input2: []}      // Object / Array
      ]
      
      _testInvalidInputsDoubleParams(calculator.subtract, NUM_ONLY_ERROR_MSG, testCases);
    })

    test('should subtract numbers accurately', () => {
      let testCases = [
        {num1: 12, num2: 21, expected: -9},                 // Positive Integer
        {num1: 12, num2: -21, expected: 33},                // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 0.8},              // Decimal
        {num1: 9999999999, num2: 1, expected: 9999999998},  // Edge Case
      ]

      testCases.forEach((test) => {
        expect(calculator.subtract(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })

  describe("divide()", () => {
    testFunctionExists(() => calculator.divide, "divide");

    test('has 2 parameters', () => {
      expect(calculator.divide.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      let testCases = [
        {input1: 25, input2: "35"},         // Stringed Number
        {input1: 8, input2: "two"},         // Worded Number
        {input1: () => [], input2: []}      // Object / Array
      ]
      
      _testInvalidInputsDoubleParams(calculator.divide, NUM_ONLY_ERROR_MSG, testCases);
    })

    test('should divide numbers accurately', () => {
      let testCases = [
        {num1: 12, num2: 21, expected: 0.57},                 // Positive Integer
        {num1: 12, num2: -21, expected: -0.57},               // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 1.3},                // Decimal
        {num1: 9999999999, num2: 2, expected: 4999999999.5},  // Edge Case
      ]

      testCases.forEach((test) => {
        expect(calculator.divide(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })

  describe("multiply()", () => {
    testFunctionExists(() => calculator.multiply, "multiply");

    test('has 2 parameters', () => {
      expect(calculator.multiply.length).toBe(2);
    })

    test('should return an error when passed with non-numeric arguments', () => {
      let testCases = [
        {input1: 25, input2: "35"},         // Stringed Number
        {input1: 8, input2: "two"},         // Worded Number
        {input1: () => [], input2: []}      // Object / Array
      ]
      
      _testInvalidInputsDoubleParams(calculator.multiply, NUM_ONLY_ERROR_MSG, testCases);
    })

    test('should multiply numbers accurately', () => {      
      let testCases = [
        {num1: 12, num2: 21, expected: 252},                  // Positive Integer
        {num1: 12, num2: -21, expected: -252},                 // Negative Integer
        {num1: 3.5, num2: 2.7, expected: 9.45},               // Decimal
        {num1: 9999999999, num2: 2, expected: 19999999998},  // Edge Case
      ];      

      testCases.forEach((test) => {
        expect(calculator.multiply(test.num1, test.num2)).toBeCloseTo(test.expected);
      })
    })
  })
})

describe("caesarCipher()", ()=> {
  testFunctionExists(() => caesarCipher, "caesarCipher")

  test('has 2 parameters', () => {
    expect(caesarCipher.length).toBe(2);
  })

  test('should return error when param types does not match', () => {
    const ERROR_MSG = 'Invalid input: characters should be string and factor should be a number'
    const CHAR_MOCK_DATA = 'mock';
    const FACTOR_MOCK_DATA = 12;

    // Non strings
    let characterInvalidTestData = [ 
      {input: 25},         // Number
      {input: false},      // Boolean
      {input: null},       // NULL
      {input: undefined},  // Undefined
      {input: []},         // Object: Array
      {input: () => {}}    // Object: Function
    ]

    // Non number
    let factorInvalidTestData = [
      {input: "25"},       // String
      {input: false},      // Boolean
      {input: null},       // NULL
      {input: undefined},  // Undefined
      {input: []},         // Object: Array
      {input: () => {}}    // Object: Function
    ]

    characterInvalidTestData.forEach((test) => {
      expect(() => caesarCipher(test.input, FACTOR_MOCK_DATA)).toThrow(ERROR_MSG); // First Parameter (Characters) testing
    })

    factorInvalidTestData.forEach((test) => {
      expect(() => caesarCipher(CHAR_MOCK_DATA, test.input)).toThrow(ERROR_MSG); // Second Parameter (Factor) testing
    })

  });

  test('should return the shifted characters of the passed string', () => {
    let testCases = [
      {char: "abc", factor: 3, result: "def"},
      {char: "efp", factor: 5, result: "jku"},
      {char: "jqz", factor: 12, result: "vcl"},
      {char: "olrak", factor: -8, result: "gdjsc"},
      {char: "HeLLo", factor: 3, result: "KhOOr"},
      {char: "Hello, World!", factor: 3, result: "Khoor, Zruog!"},
      {char: "123456789", factor: 3, result: "123456789"},
      {char: "", factor: 3, result: ""},
    ]

    testCases.forEach((test) => {
      expect(caesarCipher(test.char, test.factor)).toBe(test.result)
    })
  })
})

describe("analyzeArray()", ()=> {
  testFunctionExists(() => analyzeArray, "analyzeArray");

  test('should error out non-array arguments & non-number array values', () => {
    const ERROR_MSG = 'Invalid input: accepts array with number values only'
      let testCases = [
        {input: "string"},
        {input: 100},
        {input: null},
        {input: undefined},
        {input: true},
        {input: false},
        {input: () => {}},
        {input: new Set([1,2])},
        {input: new Map()},
        {input: ["apple", "banana", "orange"]},
        {input: ["1", "2", "3"]},
        {input: [1, 2, "3"]},
      ]
      
      _testInvalidInputsSingleParam(analyzeArray, ERROR_MSG, testCases);
  })

  test('should process empty arrays & return properties with null value', () => {
    const propsToReturn = ['average', 'min', 'max', 'length'];
    const arr = analyzeArray([]);

    propsToReturn.forEach((prop) => {
        expect(arr[prop]).toBeNull();
      })
  })

  test('should return accurate results for valid arrays', () => {
        let testCases = [
      {
        arr: [1,8,3,4,2,6],
        expected: {
          average: 4,
          min: 1,
          max: 8,
          length: 6
        }
      },
      {
        arr: [15,14,12,13,11], 
        expected: {
          average: 13,
          min: 11,
          max: 15,
          length: 5
        }
      },
      {
        arr: [0], 
        expected: {
          average: 0,
          min: 0,
          max: 0,
          length: 1
        }
      },
      {
        arr: [-99, 1214, 0, 0.1, 7.66, -456899.00], 
        expected: {
          average: -75962.71,
          min: -456899.00,
          max: 1214,
          length: 6
        }
      },
    ]

    testCases.forEach((test) => {
      const actual = analyzeArray(test.arr);
      expect(actual.average).toBeCloseTo(test.expected.average);
      expect(actual.min).toBeCloseTo(test.expected.min);
      expect(actual.max).toBeCloseTo(test.expected.max);
      expect(actual.length).toBeCloseTo(test.expected.length);
    })
  })
})