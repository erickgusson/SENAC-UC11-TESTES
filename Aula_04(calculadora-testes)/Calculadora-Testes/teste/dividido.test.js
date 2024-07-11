const divide = require('../src/javascript/divisao');

test('A divisão de 1 / 2 é igual a 0.5', () => {
    expect(divide(1, 2)).toBe(0.5);
});

test('A divisão de -10 / -20 é igual a 0.5', () => {
    expect(divide(-10, -20)).toBe(0.5);
});

test('A divisão de 0 / 0 é igual a 0', () => {
    expect(divide(0, 0)).toBe(NaN);
});

test('A divisão de 10.50 / 2.50 é igual a 4.2', () => {
    expect(divide(10.50, 2.50)).toBe(4.2);
});

test('A divisão de 50000000000000 / 50000000000000 é igual a 1', () => {
    expect(divide(50000000000000, 50000000000000)).toBe(1);
});
