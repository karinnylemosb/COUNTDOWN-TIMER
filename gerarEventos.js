const iniciarUlEventos = (listaEventos) => {
    const htmlCompleto = gerarHtmlCompletoEventos(listaEventos)

    document.querySelector("#lista-eventos").innerHTML = htmlCompleto

    listaBtnsIniciar = document.querySelectorAll(".start");
    listaBtnsResetar = document.querySelectorAll(".reset");
    listaBtnsFechar = document.querySelectorAll(".remover-evento");
}

const adicionarLiNovoEvento = (novoEvento) => {
    const htmlNovoEvento = gerarHtmlCompletoEventos([novoEvento])
    document.querySelector("#lista-eventos").innerHTML += htmlNovoEvento

    listaBtnsIniciar = document.querySelectorAll(".start");
    listaBtnsResetar = document.querySelectorAll(".reset");
    listaBtnsFechar = document.querySelectorAll(".remover-evento");
    resetarTodosOsListeners()
}

const gerarHtmlCompletoEventos = (listaEventos) => {
    let htmlCompleto = ""
    listaEventos.forEach((item) => {
        // [0]-mes [1]-dia [2]-hora [3]-min [4]-sec
        let tempo = item.tempo.split("-")
        let estruturaHtmlEvento = `
                                    <li class="li-evento">
                                        <div class="evento">
                                            <div class="titulo">
                                                <input type="text" class="input-nome-evento" 
                                                    value="${item.nome}"
                                                    placeholder="Digite o nome do seu evento"
                                                    onfocus="onFocusTitulo(event)">
                                                </input>
                                                <button class="remover-evento btn-sm">X</button>
                                            </div>
                                            <div class="campos">
                                                <input type="number" max="99" min="0" value="${tempo[0]}" class="time months"> Months </input>
                                                <input type="number" max="99" min="0" value="${tempo[1]}" class="time days"> Days </input>
                                                <input type="number" max="99" min="0" value="${tempo[2]}" class="time hour"> Hours </input>
                                                <input type="number" max="60" min="0" value="${tempo[3]}" class="time minute"> Mins </input>
                                                <input type="number" max="60" min="0" value="${tempo[4]}" class="time sec"> Secs </input>
                                            </div>
                                            <hr>
                                            <div class="botoes">
                                                <button class="start btn">Start</button>
                                                <button class="reset btn">Reset</button>
                                            </div>
                                        </div>
                                    </li>`

        htmlCompleto += estruturaHtmlEvento;
    })

    return htmlCompleto
}