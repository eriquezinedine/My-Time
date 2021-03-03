let expanded = false;
const cajamobil = document.querySelector('.cajamobil');
const primeroOBS = document.querySelector('.primeroOBS')

function showCheckboxes() {
  let checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
  cajamobil.style.display = "none";
  /** esto es para corregir la posicion de la caja contenedor */
  primeroOBS.classList.remove('primeroOBS')
  primeroOBS.classList.add('corrector')
}

function onlyOne(id) {// esta funcion me permite que los check solo pueden ser selecionados unos por uno
  for(let i =1; i<4 ;i++){// con este for agarro a todos mis elementos id para optorgarle un valor
    document.getElementById("check" + i).checked = false;
    // console.log("check" + i)
  }
  document.getElementById(id).checked = true;
  switch(id){
    case 'check1':
        // console.log(window.NuevoID);
        // console.log(horas.textContent, CDWH.textContent)
        horas.textContent =CDWH.textContent //desarrolloWeb[0]
        minutos.textContent =CDWM.textContent//desarrolloWeb[1]
        segundos.textContent =CDWS.textContent//desarrolloWeb[2]
        // SumarTiempoDW();
        break;
    case 'check2':
        // console.log(window.NuevoID);
         horas.textContent =   CDH.textContent;//diseño[0]
         minutos.textContent = CDM.textContent;//diseño[1]
         segundos.textContent =CDS.textContent ;//diseño[2]
        break;
    case 'check3':
        // console.log(window.NuevoID);
        horas.textContent=CEH.textContent;//ejercicio[0]
        minutos.textContent=CEM.textContent;//ejercicio[1]
        segundos.textContent=CES.textContent;//ejercicio[2]
        break;
}
   return window.NuevoID= id;

}

function H(){
  console.log(NuevoID);
}

