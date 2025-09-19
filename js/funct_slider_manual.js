let porj = 0;
let l = 0;

let lastScrollTop = 0; // Guarda la última posición de desplazamiento
const navbar = document.getElementById('navbar');

const logLoader = document.getElementById('logo-loader');
const efecLogLoader = document.getElementById('efecLoader');

const fondosln = document.getElementById('fon-n');
const fondoslp = document.getElementById('fon-p');
const fondosll = document.getElementById('fon-l');
const fondoslx = document.getElementById('fon-x');

function slidermanual(sw){
    l=document.getElementById("manual_slider").querySelectorAll("div");
    if(sw==0){
        if(porj<0){
            porj += 99;
        }
        else{
            porj = -99 * (l.length-5);
        }
    }
    if(sw==1){
        if(porj>-99*(l.length - 5)){
            porj += -99;
        }
        else{
            porj = 0;
        };
    }
    switch(porj){
        case 0:
            fondoslx.style.clipPath = "polygon(100% 100%, 100% 100%, 50% 100%, 0 100%, 0 100%)"
            fondosln.style.clipPath = "polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0)";
            fondoslp.style.clipPath = "polygon(100% 100%, 100% 100%, 50% 100%, 0 100%, 0 100%)";
            break;
        case -99:
            fondosln.style.clipPath = "polygon(100% 0, 100% 0, 50% 0, 0 0, 0 0)";
            fondoslp.style.clipPath = "polygon(100% 100%, 100% 48%, 50% 0, 0 50%, 0 100%)";
            fondosll.style.clipPath = "polygon(100% 0, 100% 0, 50% 0, 0 0, 0 0)";
            break;
        case -198:
            fondoslp.style.clipPath = "polygon(100% 100%, 100% 100%, 50% 100%, 0 100%, 0 100%)";
            fondosll.style.clipPath = "polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0)";
            fondoslx.style.clipPath = "polygon(100% 100%, 100% 100%, 50% 100%, 0 100%, 0 100%)";
            break;
        case -297:
            fondosll.style.clipPath = "polygon(100% 0, 100% 0, 50% 0, 0 0, 0 0)";
            fondoslx.style.clipPath = "polygon(100% 100%, 100% 48%, 50% 0, 0 50%, 0 100%)";
            fondosln.style.clipPath = "polygon(100% 0, 100% 0, 50% 0, 0 0, 0 0)";
            break;
    }

    document.getElementById("manual_slider").style.transform ="translateX("+porj+"vw)";  
}

setInterval(slidermanual,6000, 1);

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Desplazándose hacia abajo
        navbar.style.top = '-70px'; // Ajusta según la altura de tu navbar
    } else {
        // Desplazándose hacia arriba
        navbar.style.top = '0';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});




//loader funcion -----------------------------------------------------------------------------------------------------------
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader")
});

function cambiarLogo(){
    logLoader.style.opacity = "0.5";
    efecLogLoader.style.opacity = "0.2";
    setTimeout(() => {
        reaparecerLogo();
    }, 1000);
};

function reaparecerLogo(){
    logLoader.style.opacity = "1";
    efecLogLoader.style.opacity = "1";
    setTimeout(() => {
        cambiarLogo();
    }, 1000);
};

cambiarLogo();



