const test = require('node:test');
const assert = require('node:assert');
const { calcularTotalCarrinho } = require('./carrinho');

test('calcularTotalCarrinho deve retornar o total correto do carrinho', () => {
    const itens = [
        { nome: 'Camiseta', preco: 50, quantidade: 2 },
        { nome: 'Bone', preco: 30, quantidade: 1 },
    ];

    const total = calcularTotalCarrinho(itens);
    
    assert.strictEqual(total, 130); // 50*2 + 30*1 = 130
});

test('carrinho vazio deve retornar 0', () => {
    assert.strictEqual(calcularTotalCarrinho([]), 0);
});