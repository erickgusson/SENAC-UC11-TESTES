const subtrai = require('../src/javascript/subtracao');

test('A Subtração de 1 - 2 é igual a -1', () => {
    expect(subtrai(1, 2)).toBe(-1);
});

test('A Subtração de -10 - -20 é igual a 10', () => {
    expect(subtrai(-10, -20)).toBe(10);
});

test('A Subtração de 0 - 0 é igual a 0', () => {
    expect(subtrai(0, 0)).toBe(0);
});

test('A Subtração de 10.50 - 2.50 é igual a 7.50', () => {
    expect(subtrai(10.00, 2.50)).toBe(7.50);
});

test('A Subtração de 50000000000000 - 50000000000000 é igual a 0', () => {
    expect(subtrai(50000000000000, 50000000000000)).toBe(0);
});
