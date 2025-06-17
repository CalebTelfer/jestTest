const {capitalize,  reverseString, calculator, caesarCipher} = require('./javascript.js');

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