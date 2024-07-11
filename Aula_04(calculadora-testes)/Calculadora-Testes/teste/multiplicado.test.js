const multiplicacao = require('../src/javascript/multiplicacao');

test('A multiplicacao de 1 * 2 é igual a 2', () => {
    expect(multiplicacao(1, 2)).toBe(2);
});

test('A multiplicacao de -10 * -20 é igual a 200', () => {
    expect(multiplicacao(-10, -20)).toBe(200);
});

test('A multiplicacao de 0 * 0 é igual a 0', () => {
    expect(multiplicacao(0, 0)).toBe(0);
});

test('A multiplicacao de 10.50 * 2.50 é igual a 26.25', () => {
    expect(multiplicacao(10.50, 2.50)).toBe(26.25);
});

test('A multiplicacao de 500 * 500 é igual a 25', () => {
    expect(multiplicacao(500, 500)).toBe(250000);
});
