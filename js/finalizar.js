let listCart = [];
function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('link_pratos='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();
function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has produto in Cart
    if (listCart) {
        listCart.forEach(produto => {
            if (produto) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${produto.imagem}">
                    <div class="info">
                        <div class="name">${produto.nome}</div>
                        <div class="price">R$${produto.preco},00</div>
                    </div>
                    <div class="quantity">${produto.quantity}</div>
                    <div class="returnPrice">R$${produto.preco * produto.quantity},00</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + produto.quantity;
                totalPrice = totalPrice + (produto.preco * produto.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = 'R$' + totalPrice + ',00';
}