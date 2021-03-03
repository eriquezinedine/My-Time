
    /* Controladores DE TIEMPO */
const Segundos = document.getElementById("segundos");
const Minutos = document.getElementById("minutos");
const Horas= document.getElementById("horas");

/* Controladores DE BOTONES */
const BtnPlay = document.getElementById('BtnPlay');
const BtnPause= document.getElementById("BtnPause");
const BtnReanudar= document.getElementById("BtnReanudar");

/* Controladores DE IMAGENES */

const imagenPlay = document.getElementById("imagen-play");
const imagenPause= document.getElementById("imagen-pause");
const imagenReanudar =document.getElementById("imagen-reanudar");


class Cronometro{
    constructor (){
        this.tiempo();
        this.AgregarBotones();
    }

    AgregarBotones(){
        BtnPause.addEventListener('click',this.PausarEventos)
        BtnReanudar.addEventListener('click',this.ReanudarEventos)
    }

    tiempo(){
        window.Intervalo = setInterval(() =>{
            Segundos.textContent++;
            window.TS.textContent++;
            BtnPlay.removeEventListener('click',this.Comenzar);
            this.condicionalTiempoSegundoMinuto();
        } ,1000)
    }

    condicionalTiempoSegundoMinuto(){
        if(Segundos.textContent === "60"){
            Segundos.textContent= 0;
            Minutos.textContent++;
            this.condicionalTiempoMinutoHora();
        }
    }
    condicionalTiempoMinutoHora(){
        if(Minutos.textContent === "60"){
            Minutos.textContent = 0;
            Horas.textContent++;
        }
    }

    ReanudarEventos(){
        Horas.textContent = 0;
        Minutos.textContent = 0;
        Segundos.textContent = 0;
        imagenReanudar.src="img/restaurarBlanco.png";
        imagenPause.src="img/pausa.png"
        imagenPlay.src="img/boton-de-play.png"
    }

    PausarEventos(){
        clearInterval(window.Intervalo)
        imagenPause.src="img/pauseBlanco.png"
        imagenPlay.src="img/boton-de-play.png"
        imagenReanudar.src="img/restaurarRojo.png";
        BtnPlay.addEventListener('click',window.Comienza)
    }

    Comenzar(){
        imagenPlay.src = "img/playBlanco.png"
        imagenPause.src = "img/pausa.png"
        imagenReanudar.src="img/restaurarRojo.png";
    }
}

BtnPlay.addEventListener('click',Comienza)
function Comienza(){
    var cronometro = new Cronometro();
    imagenPlay.src = "img/playBlanco.png"
    imagenPause.src = "img/pausa.png"
    imagenReanudar.src="img/restaurarRojo.png";
    BtnPlay.removeEventListener('click',Comienza)

}






/* PRIMER INTENTO NUNCA LO OLVIDARE */

// class Cronometro{
    //     constructor(){
    //         this.TiempoEnSegundos();
    //         this.TiempoEnMinutos();
    //         this.TiempoEnHoras();
    //         this.AgregarBotones();
    //     }

    //     TiempoEnSegundos(){
    //         window.tSegundo= setInterval(()=>{ //PREGUNTA
    //             this.segundo= Segundos.innerHTML;
    //             this.segundo++
    //             segundos.innerHTML = this.segundo;
    //             this.TransformarSegundosMinutos();
    //         }, 1000)
    //     }
    //     TiempoEnMinutos(){
    //         window.tMinuto= setInterval(()=>{
    //             this.minuto = Minutos.innerHTML;
    //             this.minuto++
    //             Minutos.innerHTML = this.minuto
    //             this.TransformarMinutosHoras()
    //         },60000)
    //     }

    //     TiempoEnHoras(){
    //         window.tHoras =setInterval(()=>{
    //             this.hora = Horas.innerHTML;
    //             this.hora++
    //             Horas.innerHTML=hora;
    //         },3600000)   
    //     }

    //     TransformarSegundosMinutos(){
    //         if(this.segundo === 60){
    //             segundos.innerHTML= "0";
    //         }
    //     }

    //     TransformarMinutosHoras(){
    //         if(this.minuto===60){
    //             Minutos.innerHTML="0";
    //         }
    //     }

    //     PausarCronometro(){
    //         clearInterval(window.tSegundo)
    //         clearInterval(window.tMinuto)
    //         clearInterval(Window.tHoras)
    //         imagenPause.src="img/pauseBlanco.png"
    //         imagenPlay.src="img/boton-de-play.png"
    //         imagenReanudar.src="img/restaurarRojo.png";
    //     }
        
    //     ReanudarCronometro(){
    //         Segundos.innerHTML = 0;
    //         Minutos.innerHTML = 0
    //         Horas.innerHTML = 0;
    //         this.segundo= 0;
    //         this.minuto= 0;
    //         this.hora = 0;
    //         console.log(this.segundo)
    //         console.log(this.minuto)
    //         console.log(this.hora)
    //         imagenReanudar.src="img/restaurarBlanco.png";
    //         imagenPause.src="img/pausa.png"
    //         imagenPlay.src="img/boton-de-play.png"
    //     }
        
    //     AgregarBotones(){
    //         BtnPause.addEventListener('click',this.PausarCronometro)
    //         BtnReanudar.addEventListener('click',this.ReanudarCronometro)
    //     }
    // }
    
    // function  comenzar(){
    //     let cronometro = new Cronometro();
    //     imagenPlay.src = "img/playBlanco.png"
    //     imagenPause.src = "img/pausa.png"
    //     imagenReanudar.src="img/restaurarRojo.png";
    // }
    // comenzar();