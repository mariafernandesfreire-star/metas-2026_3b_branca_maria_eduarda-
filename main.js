
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Controle das abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// Datas dos objetivos
const tempos = [
    new Date("2027-01-01T00:00:00"),
    new Date("2026-09-10T00:00:00"),
    new Date("2027-01-01T00:00:00"),
    new Date("2026-07-04T00:00:00")
];

// Atualiza os contadores
function atualizaCronometro() {

    for (let i = 0; i < tempos.length; i++) {

        const agora = new Date();
        const diferenca = tempos[i] - agora;

        if (diferenca > 0) {

            let segundos = Math.floor(diferenca / 1000);
            let minutos = Math.floor(segundos / 60);
            let horas = Math.floor(minutos / 60);
            let dias = Math.floor(horas / 24);

            segundos %= 60;
            minutos %= 60;
            horas %= 24;

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

// Inicia o cronômetro
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();

