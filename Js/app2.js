/* GUARDAR Horas de Desarrollo web */
/* contador Desarrollo WEB */
const CDWH = document.getElementById('CDW-H');
const CDWM = document.getElementById('CDW-M');
const CDWS = document.getElementById('CDW-S');

//Contador DISEÑO
const CDH = document.getElementById('CD-H');
const CDM = document.getElementById('CD-M');
const CDS = document.getElementById('CD-S');

/* Contador Ejercicio*/
const CEH = document.getElementById('CE-H');
const CEM = document.getElementById('CE-M');
const CES = document.getElementById('CE-S');

function PlayComienza(){
    window.SegundoIntervalo = setInterval(() => {
        // SumarTiempoDW();
        Desicion();
        cronometroTotalGeneral();
    }, 0);
}

function Desicion(){
    switch(window.NuevoID){
        case 'check1':
            SumarTiempoDW();
            break
        case 'check2':
            SumarTiempoD();
            break
        case 'check3':
            SumarTiempoE();
            break
    }
}
function SumarTiempoDW(){
    CDWH.textContent = horas.textContent;
    CDWM.textContent = minutos.textContent;
    CDWS.textContent = segundos.textContent;
}
function SumarTiempoD(){
    CDH.textContent = horas.textContent;
    CDM.textContent = minutos.textContent;
    CDS.textContent = segundos.textContent;
}
function SumarTiempoE(){
    CEH.textContent = horas.textContent;
    CEM.textContent = minutos.textContent;
    CES.textContent = segundos.textContent;
}
/** Intento de Guardar datos **/
function GuardarCambios(){
    let desarrolloWeb;
    let diseño;
    let ejercicio;
    let total_horas;

    localStorage.getItem('desarrolloWeb') === null?  desarrolloWeb=[0,0,0]:desarrolloWeb = JSON.parse(localStorage.getItem('desarrolloWeb'));
    localStorage.getItem('diseño') === null? diseño=[0,0,0] : diseño = JSON.parse(localStorage.getItem('diseño'));
    localStorage.getItem('ejercicio') === null ? ejercicio=[0,0,0]:ejercicio = JSON.parse(localStorage.getItem('ejercicio'));
    localStorage.getItem('total_horas') === null ? total_horas=[0,0,0]:total_horas = JSON.parse(localStorage.getItem('total_horas'));

    desarrolloWeb=[CDWH.textContent,CDWM.textContent,CDWS.textContent];
    diseño=[CDH.textContent,CDM.textContent,CDS.textContent];
    ejercicio=[CEH.textContent,CEM.textContent,CES.textContent];
    total_horas=[TH.textContent,TM.textContent,TS.textContent]

    localStorage.setItem("desarrolloWeb", JSON.stringify(desarrolloWeb));
    localStorage.setItem("diseño", JSON.stringify(diseño));
    localStorage.setItem("ejercicio", JSON.stringify(ejercicio));
    localStorage.setItem("total_horas", JSON.stringify(total_horas));


console.log(desarrolloWeb);
console.log(diseño);
console.log(ejercicio);

}

function empezarTodaElGuardado(){
    /*Guardar datos */
      /* Cuando comienza todo este chiste */
      let desarrolloWeb;
      let diseño;
      let ejercicio;
      let total_horas;
      localStorage.getItem('desarrolloWeb') === null?  desarrolloWeb=[0,0,0]:desarrolloWeb = JSON.parse(localStorage.getItem('desarrolloWeb'));
      localStorage.getItem('diseño') === null? diseño=[0,0,0] : diseño = JSON.parse(localStorage.getItem('diseño'));
      localStorage.getItem('ejercicio') === null ? ejercicio=[0,0,0]:ejercicio = JSON.parse(localStorage.getItem('ejercicio'));
      localStorage.getItem('total_horas') === null ? total_horas=[0,0,0]:total_horas = JSON.parse(localStorage.getItem('total_horas'));


      /* Imprimir desarrollo web*/
      CDWH.textContent =desarrolloWeb[0]
      CDWM.textContent =desarrolloWeb[1]
      CDWS.textContent =desarrolloWeb[2]

      /* Imprimir diseño*/
      CDH.textContent =diseño[0]
      CDM.textContent =diseño[1]
      CDS.textContent =diseño[2]

      /* Imprimir ejercicio*/
      CEH.textContent =ejercicio[0]
      CEM.textContent =ejercicio[1]
      CES.textContent =ejercicio[2]

      /* Imprimir total de horas*/

      TH.textContent =total_horas[0]
      TM.textContent =total_horas[1]
      TS.textContent =total_horas[2]
   }

  empezarTodaElGuardado();





// localStorage.clear();

