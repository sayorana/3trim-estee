const botões = document. querySelectorAll(".botao");
const textos = document. querySelectorAll(".aba-conteudo");

for(let j = 0; j < botoes.length; j++){
    botoes[j].onclick = function(){
        for(let i = 0; i < botoes.length; i++){
            botoes[i].classList.remove("ativo");
            botoes[i].classList.remove("ativo");
        }
    }
   
    botoes[i].classList.add("ativo");
    botoes[i].classList.add("ativo");

}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("0000-00-00T00:00:00");
const tempoObjetivo2 = new Date ("0000-00-00T00:00:00");
const tempoObjetivo3 = new Date ("0000-00-00T00:00:00");
const tempoObjetivo4 = new Date ("0000-00-00T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calcularTempo(tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetvio - tempoAtual;
    let segundos = math.floor(tempoFinal / 1000);
    let minutos = math.floor(segundos / 60 );
    let horas = math.floor(minutos / 60 );
    let dias = math.floor(horas / 24 );

    segundos %=60;
    minutos %=60;
    horas %=24;

if (tempoFinal > 0);{
        return [dias,horas,minuos,segundos];
    }else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

    function comecaCronometro() {
        atualizaCronometro();
        setInterval(atualizaCronometro, 1000);
    }
comecaCronometro();
