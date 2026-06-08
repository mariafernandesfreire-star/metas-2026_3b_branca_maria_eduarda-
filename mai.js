const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i =0;i < botoes.leghth; i++){
   botoes[i].onclick = function () {
    for (let) j=0; j<botoes.leghth; j++ {
      botoes{j}.classList.remove("ativo");
      textos{j}.classList.remove("ativo");
  }
  botoes{i}.classList.remove("ativo");
      textos{i}.classList.remove("ativo");
 }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2027-1-1T00.00");
const tempoObjetivo2 = new Date("2026-9-10T00.00");
const tempoObjetivo3 = new Date("2027-1-1T00.00");
const tempoObjetivo4 = new Date("2026-7-4T00.00");

const tempo =(tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4);




function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return "Prazo Finalizado";
    }
}

function atualizaCronometro(){

    for (let i = 0; i < tempos.length; i++){

        let tempoAtual = new Date();
        let tempoFinal = tempos[i] - tempoAtual;

        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        if (tempoFinal > 0){
            document.getElementById(`dias${i}`).textContent = dias;
            document.getElementById(`horas${i}`).textContent = horas;
            document.getElementById(`min${i}`).textContent = minutos;
            document.getElementById(`seg${i}`).textContent = segundos;
        } else {
            document.getElementById(`dias${i}`).textContent = "0";
            document.getElementById(`horas${i}`).textContent = "0";
            document.getElementById(`min${i}`).textContent = "0";
            document.getElementById(`seg${i}`).textContent = "0";
        }
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();