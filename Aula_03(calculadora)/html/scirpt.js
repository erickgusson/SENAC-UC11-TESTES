function Calcular() {
    var resultado = 0;
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let opcao = document.getElementById('opcao').value;
    if (opcao != 'nenhum') {
        Conta(opcao);
    } else {
        alert('Selecione uma opção para a conta');
    }
}

function Conta(opcao) {
    if (opcao == 'soma') {
        resultado = n1 + n2;
        Exibir(resultado);
    }
    else if (opcao == 'subtracao') {
        resultado = n1 - n2;
        Exibir(resultado);
    }
    else if (opcao == 'multiplicacao') {
        resultado = n1 * n2;
        Exibir(resultado);
    }
    else if (opcao == 'divisao') {
        resultado = n1 / n2;
        Exibir(resultado);
    }
    else {

    }
}

function Exibir(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
}