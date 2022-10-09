
function addTodosOsListeners() {
    addListenersIniciar()
    addListenersResetar()
    addListenersRemover()
}

function resetarTodosOsListeners () {
    resetarListenersIniciar()
    resetarListenersResetar()
    resetarListenersRemover()
}

function addListenersIniciar() {
    for (let i = 0; i < listaBtnsIniciar.length; i++)
        listaBtnsIniciar[i].addEventListener("click", callbackIniciar);
}

function callbackIniciar(event) {
    const { indice, campos } = findIndiceECampos(event);
    iniciarIntervalo(indice, campos);
}

function resetarListenersIniciar() {
    for (let i = 0; i < listaBtnsIniciar.length; i++)
        listaBtnsIniciar[i].removeEventListener("click", callbackIniciar);
    addListenersIniciar();
}

function addListenersResetar() {
    for (let i = 0; i < listaBtnsResetar.length; i++)
        listaBtnsResetar[i].addEventListener("click", callbackResetar);
}

function callbackResetar(event) {
    const { indice, campos } = findIndiceECampos(event);
    resetarTemposEvento(indice, campos);
}

function resetarListenersResetar() {
    for (let i = 0; i < listaBtnsResetar.length; i++)
        listaBtnsResetar[i].removeEventListener("click", callbackResetar);
    addListenersResetar()
}

function addListenersRemover() {
    for (let i = 0; i < listaBtnsFechar.length; i++)
        listaBtnsFechar[i].addEventListener("click", callbackRemover)
}

function callbackRemover(event) {
    const { indice } = findIndiceECampos(event);
    if(indice === -1) {
        console.log("nao existe na listaDeEventos")
        return
    }
    
    const lista = document.querySelector("#lista-eventos");
    
    let numElementos = lista.childElementCount;
    
    let elemento = lista.firstElementChild;
    for(let i=0;i<numElementos;i++) {
        if(i === indice) {
            console.log("Removeu:",listaDeEventos[i],`para o indice ${i}, devia ser ${indice}`)
            elemento.remove();
            break;
        }
        elemento = elemento.nextElementSibling;
    }

    const indexTimer = listaTimers.findIndex((el)=>el.nome === listaDeEventos[indice].nome)
    listaTimers.splice(indexTimer,1)
    listaDeEventos.splice(indice,1)
}

function resetarListenersRemover() {
    for (let i = 0; i < listaBtnsFechar.length; i++)
        listaBtnsFechar[i].removeEventListener("click", callbackRemover)
    addListenersRemover()
}

// evento de clique dentro de titulo/campos/botoes
function findIndiceECampos(event) {
    let preCampos = event.target.parentNode.parentNode.childNodes

    let titulo = null;
    let campos = null;
    for (let i = 0; i < preCampos.length; i++) {
        const elemento = preCampos.item(i)
        if (elemento.classList !== undefined) {
            if (elemento.classList[0] === "campos")
                campos = elemento
            if (i === 1)
                titulo = elemento.childNodes.item(1).value
        }
    }

    let indiceDoEvento = null;
    indiceDoEvento = listaDeEventos.findIndex((el) => el.nome === titulo)

    return { indice: indiceDoEvento, campos: campos }
}

function onFocusTitulo(event) {
    const inputTitulo = event.target
    const tituloAnterior = inputTitulo.value
    const indiceEvento = listaDeEventos.findIndex((item)=>item.nome === tituloAnterior)

    inputTitulo.addEventListener("blur", (event) => {
        const liEvento = event.target.parentNode.parentNode.parentNode
        const ulEventos = liEvento.parentNode

        for (let i=0;i< ulEventos.childElementCount;i++) {
            if (i === indiceEvento) {
                let counter=0;
                let elemento = ulEventos.firstElementChild
                while(counter < i) {
                    elemento = elemento.nextElementSibling
                    counter++;
                }
                
                listaDeEventos[indiceEvento].nome = event.target.value
            }
        }
    })
}

function onClickAdd() {
    listaDeEventos.push({nome:`Evento ${numeroDeEventos + 1}`,tempo:"0-0-0-0-0"})
    listaTimers.forEach((el,i)=>pararIntervalo(i))
    listaTimers = []
    adicionarLiNovoEvento(listaDeEventos[listaDeEventos.length - 1])
    numeroDeEventos++;
}