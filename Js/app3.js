const TH = document.getElementById('TH');
const TM = document.getElementById('TM');
const TS = document.getElementById('TS');

TH.textContent =  parseFloat(CDWH.textContent) + parseFloat(CDH.textContent) + parseFloat(CEH.textContent);
TM.textContent =  parseFloat(CDWM.textContent) + parseFloat(CDM.textContent) + parseFloat(CEM.textContent);
TS.textContent =  parseFloat(CDWS.textContent) + parseFloat(CDS.textContent) + parseFloat(CES.textContent);

let AlternoHoras = TH.textContent
let AlternoMinutos = TM.textContent
let AlternoSegundo = TS.textContent

console.log(AlternoHoras,AlternoMinutos,AlternoSegundo);



if(TS.textContent >= 60){
   let restoS = TS.textContent % 60
   let minuto = (TS.textContent - restoS)/60

   TS.textContent = restoS;
   TM.textContent = parseFloat(TM.textContent) + minuto;
   console.log(TM.textContent)
   if(TM.textContent >= 60){
    let restoM = (parseFloat(TM.textContent)) % 60
    let horas =(parseFloat(TM.textContent) - restoM)/60
    TM.textContent = restoM;
    // console.log(horas,TH.textContent)
    TH.textContent = TH.textContent + horas
}
}

function cronometroTotalGeneral(){
    // window.TercerIntervalo = setInterval(()=>{

        if(TS.textContent === '60'){
            TS.textContent = 0;
            TM.textContent++
            if(TM.textContent === '60'){
                TM.textContent = 0;
                TH.textContent++
            }
        }
        // console.log(TS.textContent);
    // },1000);
}
