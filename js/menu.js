//Ancoras (A)/Botões menu superior que interferem no dropdown
const anchorQuerid = document.getElementById("anchor-querid");
const anchorPetisc = document.getElementById("anchor-petisc");
const anchorCarnes = document.getElementById("anchor-carnes");
const anchorFrutos = document.getElementById("anchor-frutos");
const anchorBebida = document.getElementById("anchor-bebida");
const anchorSobre = document.getElementById("anchor-sobrem");

//------------------------------------------------------------------//

//Botões do dropdown
const dropBtnQuerid = document.getElementById("link-queridinhos");
const dropBtnPetisco = document.getElementById("link-petiscos");
const dropBtnCarne = document.getElementById("link-carnes");
const dropBtnFrutos = document.getElementById("link-frutos");
const dropBtnBebida = document.getElementById("link-bebidas");
const dropBtnSobre = document.getElementById("link-sobremesa");

//------------------------------------------------------------------//

//blocos dos menus dropdown
const dropQuerid = document.getElementById("wrapper-queridinhos");
const dropPetisco = document.getElementById("wrapper-petiscos");
const dropCarne = document.getElementById("wrapper-carnes");
const dropFrutos = document.getElementById("wrapper-frutos");
const dropBebida = document.getElementById("wrapper-bebidas");
const dropSobre = document.getElementById("wrapper-sobremesa");

//------------------------------------------------------------------//

//Cliques nos ancoras (A)/Botões menu superior que interferem no dropdown
anchorQuerid.addEventListener("click", () => dropQuerid.scrollIntoView({ behavior: 'smooth' }));
anchorPetisc.addEventListener("click", () => dropPetisco.scrollIntoView({ behavior: 'smooth' }));
anchorCarnes.addEventListener("click", () => dropCarne.scrollIntoView({ behavior: 'smooth' }));
anchorFrutos.addEventListener("click", () => dropFrutos.scrollIntoView({ behavior: 'smooth' }));
anchorBebida.addEventListener("click", () => dropBebida.scrollIntoView({ behavior: 'smooth' }));
anchorSobre.addEventListener("click", () => dropBtnSobre.scrollIntoView({ behavior: 'smooth' }));


//------------------------------------------------------------------//

//Cliques nos Botões do dropdown, que ficam como título de cada categoria
dropBtnQuerid.addEventListener("click", () => dropQuerid.classList.toggle('hide'))
dropBtnPetisco.addEventListener("click", () => dropPetisco.classList.toggle('hide'))
dropBtnCarne.addEventListener("click", () => dropCarne.classList.toggle('hide'))
dropBtnFrutos.addEventListener("click", () => dropFrutos.classList.toggle('hide'))
dropBtnBebida.addEventListener("click", () => dropBebida.classList.toggle('hide'))
dropBtnSobre.addEventListener("click", () => dropSobre.classList.toggle('hide'))


//------------------------------------------------------------------//


//--------------Prenchimento do Menu via Arquivo json---------------//


//------------------------------------------------------------------//

//Objetos dos Containers de Cada Elemento do Menu Dropdown
const containerQueridinhos = document.getElementById("dropdown-menu-queridinhos");
const containerPetiscos = document.getElementById("dropdown-menu-petiscos");
const containerCarnes = document.getElementById("dropdown-menu-carnes");
const containerFrutos = document.getElementById("dropdown-menu-frutos");
const containerBebidas = document.getElementById("dropdown-menu-bebidas");
const containerSobremesa = document.getElementById("dropdown-menu-sobremesa");

//------------------------------------------------------------------//


function carregar() {
    fetch("./json/Pratos.json")
        .then(response => response.json()) //Passa o tetxo para json
        .then(pratos => {

            //percorre o arquivos do json
            pratos.map((prato, index) => {

                //Criação dos Elementos que Abrigarão os seus Respectivos Pratos
                const container = document.createElement("div");
                const ancora = document.createElement("a");
                const quadroPratos = document.createElement("div");
                const textoQuadro = document.createElement("div");
                const nomePrato = document.createElement("div");
                const descPrato = document.createElement("div");
                const precoPrato = document.createElement("div");
                const btnAddCart = document.createElement("button");
                const fotoPrato = document.createElement("div");
                const imgPrato = document.createElement("img");

                //Adição das Classes dos elementos criados
                container.classList.add("container");
                ancora.classList.add("link_pratos");
                quadroPratos.classList.add("quadro_pratos");
                textoQuadro.classList.add("texto_quadro");
                nomePrato.classList.add("nome_prato");
                descPrato.classList.add("desc_prato");
                precoPrato.classList.add("preco_prato");
                btnAddCart.classList.add("btn_add_cart");
                fotoPrato.classList.add("foto_quadro");


                nomePrato.textContent = prato.nome;
                descPrato.textContent = prato.descricao;
                precoPrato.textContent = `R$ ${prato.preco},00`;
                btnAddCart.textContent = "Adicionar ao Carrinho";
                // btnAddCart.onclick = `addCart(${prato.Nome})`
                // let btnAddCart2 = `<button onclick="addCart(${prato.Nome})">Adicionar ao Carrinho</button>`
                imgPrato.src = prato.imagem;
                imgPrato.alt = prato.nome;

                // console.log(index);


                fotoPrato.appendChild(imgPrato);

                textoQuadro.appendChild(nomePrato);
                textoQuadro.appendChild(descPrato);
                textoQuadro.appendChild(precoPrato);
                textoQuadro.appendChild(btnAddCart);
                // textoQuadro.appendChild(btnAddCart2);

                quadroPratos.appendChild(textoQuadro);
                quadroPratos.appendChild(fotoPrato);

                ancora.appendChild(quadroPratos);

                container.appendChild(ancora);
                if (index < 4) {
                    containerQueridinhos.appendChild(container);
                }
                if (index > 3 && index < 8) {
                    containerPetiscos.appendChild(container);
                }
                if (index > 7 && index < 12) {
                    containerCarnes.appendChild(container);
                }
                if (index > 11 && index < 16) {
                    containerFrutos.appendChild(container);
                }
                if (index > 15 && index < 20) {
                    containerBebidas.appendChild(container);
                }
                if (index > 19 && index < 24) {
                    containerSobremesa.appendChild(container);
                }


                btnAddCart.onclick = function () {
                    addCart(prato.id);
                };


            })

        })
}

carregar()





