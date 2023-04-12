var jornada =8;
var storyPoint =1;

var Buttoncalc = document.getElementById('Button-calc');
Buttoncalc.addEventListener('click',clickedCalc)

var ButtonReset=document.getElementById('Button-reset').addEventListener('click',()=>
{
    document.getElementById('screen-result').innerHTML ="0";
    document.getElementById('story-p').value = "1";
    document.getElementById('total-Hist').value = "0";
});

function clickedCalc(_event)
{   
    let storyp=document.getElementById('story-p').value;
    let jorL =document.getElementById('hora-jornada').value;
    let totalH = document.getElementById('total-Hist').value;
    let result ="";
    let totalHist = parseFloat(totalH);
    storyPoint=parseInt(storyp);
    jornada = parseInt(jorL);
    
    if (isNaN(storyp) || isNaN(jorL) ||isNaN(totalHist))
    {
        result= "Error"
    }else
    {
        result =CalcularStoryHora(totalHist,storyp,jornada);
        console.log(result);  
    }

    document.getElementById('screen-result').innerHTML = result;
};


function CalcularStoryHora(Totalstory,valStory,jorn){
    //calcular tiempo en decimal
    storyPoint = valStory;
    jornada = jorn;  
    let historypoint = (storyPoint/jornada)/60;
    let tiempo = (Totalstory / historypoint)/60;
    //calcular tiempo hh:mm:ss
    let hora = parseInt(tiempo);
    let minuto = Math.floor((tiempo * 60) % 60);
    let segundo = Math.floor((tiempo * 3600) % 60);
    let resultado = `${hora}:${minuto < 10 ? '0' : ''}${minuto}:${segundo < 10 ? '0' : ''}${segundo}`;
    if (hora === 0)
    {
        if (minuto === 0)
        {
            resultado = resultado + '<font size="5">Segundos</font>'; 
        }else
        {
            resultado = resultado + '<font size="5">Minutos</font>';
        } 
        
    }else
    {

        resultado = resultado + '<font size="5">horas</font>';
    }
    return resultado;
}



