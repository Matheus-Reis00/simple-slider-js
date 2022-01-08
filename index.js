let blocks = document.querySelectorAll('.block')
let circles = document.querySelectorAll('.circle')
let button = document.getElementById("button")
let button2 = document.getElementById("button2")
let container = document.getElementById("blocks")
let indicador = 0; /*CRIADO PARA REALIZAR A INSERÇÃO DE CLASSE NOS ITEMS DOS ARRAYS "blocks" e "circles"*/


function rollRight() {
    blocks[indicador].classList.remove("center")
    circles[indicador].classList.remove("active")
    indicador++

    if(indicador > blocks.length - 1){
        indicador--
        /* IF CRIADO PARA INFORMAR QUAL O ULTIMO BLOCO E BLOQUEAR UMA CONTINUAÇÃO DE ROLAGEM E BUG */
    }

    blocks[indicador].classList.add("center")
    circles[indicador].classList.add("active")

    container.scrollBy(150, 0)
    /* FAZ A ROLAGEM NO EIXO X, FAZENDO COM QUE O BLOCO ATIVO (PRINCIPAL) ESTEJA CENTRALIZADO */
    /* CASO QUEIRA VER A FUNCIONALIDADE, SUBSTITUA OVERFLOW: HIDDEN; POR OVERFLOW: AUTO; NO CSS NO ID BLOCKS ( #blocks ) */
}

function rollLeft() {
    blocks[indicador].classList.remove("center")
    circles[indicador].classList.remove("active")
    indicador--

    if(indicador <= 0){
        indicador = 0
        /* IF CRIADO PARA INFORMAR QUAL O PRIMEIRO BLOCO E BLOQUEAR UMA CONTINUAÇÃO DE ROLAGEM E BUG */
    }

    blocks[indicador].classList.add("center")
    circles[indicador].classList.add("active")

    container.scrollBy(-150, 0)
    /* FAZ A ROLAGEM NO EIXO X, FAZENDO COM QUE O BLOCO ATIVO (PRINCIPAL) ESTEJA CENTRALIZADO */
    /* CASO QUEIRA VER A FUNCIONALIDADE, SUBSTITUA OVERFLOW: HIDDEN; POR OVERFLOW: AUTO; NO CSS NO ID BLOCKS ( #blocks ) */
}

button.addEventListener("click", () => {
    rollRight()
})
button2.addEventListener("click", () => {
    rollLeft()
})