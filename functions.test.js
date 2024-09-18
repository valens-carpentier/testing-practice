const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');


test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('calculator', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.multiply(4, 3)).toBe(12);
});

test('caesarCipher', () => {
    expect(caesarCipher('abc',3)).toBe('def');
    expect(caesarCipher('xyz',3)).toBe('abc');
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});

test('analyzeArray', () => {
    const array = [1, 2, 3, 4, 5];
    expect(analyzeArray(array)).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
}); 