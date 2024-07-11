const soma = require('../src/javascript/soma');

test('A Soma de 1 + 2 é igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('A Soma de -10 + -20 é igual a -30', () => {
    expect(soma(-10, -20)).toBe(-30);
});

test('A Soma de 0 + 0 é igual a 0', () => {
    expect(soma(0, 0)).toBe(0);
});

test('A Soma de 10.50 + 2.50 é igual a 12.50', () => {
    expect(soma(10.00, 2.50)).toBe(12.50);
});

test('A Soma de 50000000000000 + 50000000000000 é igual a 100000000000000', () => {
    expect(soma(50000000000000, 50000000000000)).toBe(100000000000000);
});
