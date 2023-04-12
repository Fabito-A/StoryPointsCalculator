var jornada =8;
var storyPoint =1;

var Buttoncalc = document.getElementById('Button-calc');
Buttoncalc.addEventListener('click',clickedCalc)

var ButtonReset=document.getElementById('Button-reset').addEventListener('click',()=>
{
    document.getElementById('screen-result').innerHTML ="0";
    document.getElementById('hora-jornada').value ="8";
    document.getElementById('story-p').value = "1";
    document.getElementById('tiempo-labor').value = "00:00";
});

function clickedCalc(_event)
{   
    let jorL =document.getElementById('hora-jornada').value;
    let storyp=document.getElementById('story-p').value;
    jornada = parseInt(jorL);
    storyPoint=parseInt(storyp);
    let tiempoLabor =document.getElementById('tiempo-labor').value;
    let result =convertTime(tiempoLabor);
    console.log(result);
    document.getElementById('screen-result').innerHTML = result + '<font size="5">Sp</font>';
};

function convertTime(Hora_ent){
    let lista = Array.from(Hora_ent.split(":"));
    let story;
    if (lista.length == 1) {
    lista.splice(0, 0, "0"); // inserta el valor "0" en la primera posición de la lista si solo envía minutos
      } 
    let hora = parseInt(lista[0]);
    let minuto = parseInt(lista[1]);
    if (isNaN (hora) || isNaN(minuto)){
        story="ERROR";
    }else
    {
        let totalMinutos = (hora * 60) + minuto;
        story = calcular_Story(totalMinutos,storyPoint,jornada)

    };
    return story;
};

function calcular_Story(minutos,story,jornadaL){
    jornada = jornadaL;   
    storyPoint = story;
    let min_story = (storyPoint/jornada)/60;
    let valor = minutos * min_story;
    let preresultado = valor.toString();
    let resultado  = preresultado.slice(0, preresultado.indexOf(".") + 6);
    return resultado;   
}



