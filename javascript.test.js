const {capitalize,  reverseString, calculator, caesarCipher, analyzeArray} = require('./javascript.js');

test('String to uppercase first char', () => {
  expect(capitalize("canada")).toBe("Canada");
});

test('Reverses a String', () => {
    expect(reverseString("apple")).toBe("elppa");
  });



test("Add two numbers", () => {
    expect(calculator.add(1,2)).toBe(3);
})

test("minus two numbers", () => {
    expect(calculator.subtract(2,2)).toBe(0);
})

test("mult two numbers", () => {
    expect(calculator.multiply(1,2)).toBe(2);
})

test("divide two numbers", () => {
    expect(calculator.divide(1,2)).toBe(0.5);
})


test("Caesar cipher wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("Caesar cipher punctuation", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})


test("Array of numbers returns average", () => {
    expect(analyzeArray([1,2,3,4,5,6]).average).toBe(3.5);
})

test("Array of numbers returns min", () => {
    expect(analyzeArray([1,2,3,4,5,6]).min).toBe(1);
})

test("Array of numbers returns max", () => {
    expect(analyzeArray([1,2,3,4,5,6]).max).toBe(6);
})

test("Array of numbers returns length", () => {
    expect(analyzeArray([1,2,3,4,5,6]).length).toBe(6);
})