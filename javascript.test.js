const {capitalize,  reverseString} = require('./javascript.js');

test('String to uppercase first char', () => {
  expect(capitalize("canada")).toBe("Canada");
});

test('Reverses a String', () => {
    expect(reverseString("apple")).toBe("elppa");
  });