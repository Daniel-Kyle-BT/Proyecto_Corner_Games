let orden = 0;

const carrusel1 = document.getElementById('primero');
const carrusel2 = document.getElementById('segundo');
const carrusel3 = document.getElementById('tercero');


function iniciarCarrusel(){
    carrusel1.style.zIndex = "20";
    carrusel1.style.left ='-100vw';
    carrusel2.style.zIndex = "30";
    carrusel2.style.left ='0';
    carrusel3.style.zIndex = "10";
    carrusel3.style.left ='100%';
    setTimeout(() => {
        reubicar();    
    }, 7000);
};

function seguirCarrusel(){
    carrusel1.style.zIndex = "30";
    carrusel1.style.left ='0';
    carrusel2.style.zIndex = "10";
    carrusel2.style.left ='100vw';
    carrusel3.style.zIndex = "20";
    carrusel3.style.left ='-100vw';
    setTimeout(() => {
        iniciarCarrusel();    
    }, 7000);

}

function reubicar(){
    carrusel1.style.zIndex = "10";
    carrusel1.style.left ='100vw';
    carrusel2.style.zIndex = "20";
    carrusel2.style.left ='-100vw';
    carrusel3.style.zIndex = "30";
    carrusel3.style.left ='0';
    setTimeout(() => {
        seguirCarrusel();    
    }, 7000);
};

iniciarCarrusel();