const iconCart = document.querySelector('.iconCart');
const cart = document.querySelector('.carrinho');
const container = document.querySelector('.container-carrinho');
const close = document.querySelector('.close');
const limpar = document.querySelector('.limpar');

iconCart.addEventListener('click', function () {
    if (cart.style.right == '-100%') {
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function () {
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})




let produtos = null;
// get data from file json
fetch('./json/Pratos.json')
    .then(response => response.json())
    .then(data => {
        produtos = data;
        // addDataToHTML();
    })



//use cookie so the cart doesn't get lost on refresh page

let listaCarrinho = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('link_pratos='));
    if (cookieValue) {
        listaCarrinho = JSON.parse(cookieValue.split('=')[1]);
    } else {
        listaCarrinho = [];
    }
}
checkCart();


function addCart($idPrato) {

    let produtosCopy = JSON.parse(JSON.stringify(produtos));
    //// If this produto is not in the cart
    if (!listaCarrinho[$idPrato]) {
        listaCarrinho[$idPrato] = produtosCopy.filter(produto => produto.id == $idPrato)[0];
        listaCarrinho[$idPrato].quantity = 1;
    } else {
        //If this produto is already in the cart.
        //I just increased the quantity
        listaCarrinho[$idPrato].quantity++;
    }
    document.cookie = "link_pratos=" + JSON.stringify(listaCarrinho) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}
addCartToHTML();
function addCartToHTML() {
    // clear data default
    let listaCarrinhoHTML = document.querySelector('.lista_Carrinho');
    // console.log("listaCarrinhoHTML aqui");
    // console.log(listaCarrinhoHTML);
    listaCarrinhoHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    // if has produto in Cart
    if (listaCarrinho) {
        listaCarrinho.forEach(produto => {
            if (produto) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${produto.imagem}">
                    <div class="content">
                        <div class="name">${produto.nome}</div>
                        <div class="price">R$${produto.preco},00</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${produto.id}, '-')">-</button>
                        <span class="value">${produto.quantity}</span>
                        <button onclick="changeQuantity(${produto.id}, '+')">+</button>
                    </div>`;
                listaCarrinhoHTML.appendChild(newCart);
                totalQuantity = totalQuantity + produto.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
}
function changeQuantity($idProduto, $type) {
    console.log("idProduto aqui");
    console.log($idProduto);
    switch ($type) {
        case '+':
            listaCarrinho[$idProduto].quantity++;
            break;
        case '-':
            listaCarrinho[$idProduto].quantity--;

            // if quantity <= 0 then remove produto in cart
            if (listaCarrinho[$idProduto].quantity <= 0) {
                delete listaCarrinho[$idProduto];
            }
            break;

        default:
            break;
    }
    // save new data in cookie
    document.cookie = "link_pratos=" + JSON.stringify(listaCarrinho) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    // reload html view cart
    addCartToHTML();
}


limpar.addEventListener('click', function () {
    // Percorre listaCarrinho 
    Object.values(listaCarrinho).forEach((produto) => {
        if (produto) {
            // Reduce the quantity by 100
            produto.quantity = 0;

            // If quantity becomes less than or equal to 0, remove the produto from the cart
            if (produto.quantity <= 0) {
                delete listaCarrinho[produto.id];
            }
        }
    });

    // Save the updated data in the cookie
    document.cookie = "link_pratos=" + JSON.stringify(listaCarrinho) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    // Reload the HTML view of the cart
    addCartToHTML();
});
