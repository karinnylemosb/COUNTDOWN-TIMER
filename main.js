var iniciar = document.getElementById('start');
var resetar = document.getElementById('reset');

var mes = document.getElementById('months');
var dia = document.getElementById('days');
var hora = document.getElementById('hour');
var minuto = document.getElementById('minute');
var segundo = document.getElementById('sec');

var iniciarTimer = null;

iniciar.addEventListener('click', function () {
  function iniciarIntervalo() {
    iniciarTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  iniciarIntervalo();
});

resetar.addEventListener('click', function () {
  mes.value = 0;
  dia.value = 0;
  hora.value = 0;
  minuto.value = 0;
  segundo.value = 0;

  pararIntervalo();
});

function timer() {
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

function pararIntervalo() {
  clearInterval(iniciarTimer);
}
