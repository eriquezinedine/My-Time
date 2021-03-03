
const contenedor3 = document.querySelector('.contenedor3');


contenedor3.addEventListener('click', detector);

function detector(elemento){
// console.log(elemento.target);
saveLocalDesarrolloWeb(elemento.target.innerText);
}


function saveLocalDesarrolloWeb(todo){
    let desarrolloWeb;
    if(localStorage.getItem('desarrolloWeb') === null){
      desarrolloWeb=[];
    }else{
      desarrolloWeb = JSON.parse(localStorage.getItem('desarrolloWeb'))
    }

    desarrolloWeb.push(todo);
    localStorage.setItem("desarrolloWeb", JSON.stringify(desarrolloWeb));
}


function saveLocalDiseño(todo){
    let diseño;
    if(localStorage.getItem('diseño') === null){
        diseño=[];
    }else{
      desarrolloWeb = JSON.parse(localStorage.getItem('diseño'))
    }

    diseño.push(todo);
    localStorage.setItem("diseño", JSON.stringify(diseño));
}

function saveLocalEjercicio(todo){
    let ejercicio;
    if(localStorage.getItem('ejercicio') === null){
        ejercicio=[];
    }else{
      desarrolloWeb = JSON.parse(localStorage.getItem('ejercicio'))
    }

    ejercicio.push(todo);
    localStorage.setItem("ejercicio", JSON.stringify(ejercicio));
}

//localStorage.clear(); sirve para limpiar el localstorage

