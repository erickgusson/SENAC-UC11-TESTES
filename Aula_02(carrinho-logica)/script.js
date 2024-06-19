let carrinho = [];
let total = 0;

function AddCarrinho(produto, valor) {
    let fim = false;

    for (let i = 0; i < carrinho.length; i++) {

        if (carrinho[i].produto === produto) {

            carrinho[i].qtd++;
            fim = true;
            break;

        }

    }

    if (!fim) {

        carrinho.push({ produto, valor, qtd: 1 })

    }

    AtualizaCarrinho();

}

function AtualizaCarrinho() {

    const cartItens = document.getElementById('carrinho-itens');
    cartItens.innerHTML = '';
    total = 0;

    carrinho.forEach((item, index) => {

        total += item.valor * item.qtd;
        cartItens.innerHTML += `
        
            <div class="carrinho-itens">
        
                <span>${item.produto} (X ${item.qtd})</span>
                <span>R$ ${item.valor * item.qtd}</span>
                <button onclick="RemoveItemCarrinho(${index})">Remover</button>
        
            </div>
            
        `

    });

    document.getElementById('carrinho-total').innerText = total;

}

function RemoveItemCarrinho(index) {

    total -= carrinho[index].valor * carrinho[index].qtd;
    carrinho.splice(index, 1);
    AtualizaCarrinho();
    
}

function FecharPedido() {
    
    if (carrinho.length === 0) {
        
        alert('Seu carrinho está vazio');
        return;

    } else {

        alert(`Compra finalizada! Total: R$ ${total}`);
        
    }

    carrinho = [];
    AtualizaCarrinho();

}