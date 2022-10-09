let listaBtnsIniciar = document.querySelectorAll(".start");
let listaBtnsResetar = document.querySelectorAll(".reset");
let listaBtnsFechar = document.querySelectorAll(".remover-evento")

let listaDeEventos = [
  {
    nome: "Tirar a pizza do forno",
    tempo: "0-0-0-30-0"
  },
  {
    nome: "Intervalo de Almoço",
    tempo: "0-0-1-0-0"
  }
]

let numeroDeEventos = listaDeEventos.length

// Inserção Inicial dos Evento
iniciarUlEventos(listaDeEventos);

addTodosOsListeners()