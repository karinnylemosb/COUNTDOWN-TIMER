let listaTimers = []

function timer(campos) {
    let inputs = campos.querySelectorAll(".time")
    let mes = inputs[0]
    let dia = inputs[1]
    let hora = inputs[2]
    let minuto = inputs[3]
    let segundo = inputs[4]

    if (segundo.value != 0) {
      segundo.value--;
    } else if (minuto.value != 0 && segundo.value == 0) {
      segundo.value = 59;
      minuto.value--;
    } else if (hora.value != 0 && minuto.value == 0) {
      minuto.value = 59;
      hora.value--;
    } else if (dia.value != 0 && hora.value == 0) {
      hora.value = 24;
      dia.value--;
    } else if (mes.value != 0 && dia.value == 0) {
      dia.value = 30;
      mes.value--;
    }
}

function iniciarIntervalo(indiceEvento,campos) {
    let nomeEvento = listaDeEventos[indiceEvento].nome;

    console.log(`ADICIONANDO TIMER PARA: `,listaDeEventos[indiceEvento])

    if(listaTimers.findIndex(el=>el.nome===nomeEvento) !== -1) {
        pararIntervalo(indiceEvento)
        listaTimers[indiceEvento].timer = setInterval(()=> {
            timer(campos);
          }, 1000);
    } else {
        let novoTimer = setInterval(()=> {
          timer(campos);
        }, 1000);
        listaTimers.splice(indiceEvento, 1, { timer: novoTimer, nome: nomeEvento })
    }
}

function resetarTemposEvento(indiceEvento,campos) {
    let inputs = campos.querySelectorAll(".time")
    inputs[0].value = 0
    inputs[1].value = 0
    inputs[2].value = 0
    inputs[3].value = 0
    inputs[4].value = 0

    pararIntervalo(indiceEvento)
}

function pararIntervalo(indiceTimer) {
    try {
        clearInterval(listaTimers.find((el)=>el.nome === listaDeEventos[indiceTimer].nome).timer);
    } catch {
        console.log("Tentou parar intervalo não criado")
    }
}