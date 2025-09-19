
let continuar1 = true; // Variable de control
let continuar2 = true; // Variable de control
let continuar3 = true; // Variable de control
let continuar4 = true; // Variable de control

const grup1 = Array.of(
    document.getElementById('nitendo1'),
    document.getElementById('play1'),
    document.getElementById('xbo1'),
    document.getElementById('lol1')
);
const imagenn2 = document.getElementById('nitendo2');
const imagenp2 = document.getElementById('play2');
const imagenx2 = document.getElementById('xbo2');
const imagenl2 = document.getElementById('lol2');

const imagenn3 = document.getElementById('nitendo3');
const imagenp3 = document.getElementById('play3');
const imagenx3 = document.getElementById('xbo3');
const imagenl3 = document.getElementById('lol3');

// Selecciona todos los elementos con la clase 'mi-clase'
const opcionDesplazar = document.querySelectorAll('.blockn');

// Itera sobre cada elemento y agrega listeners----------------------------------------------------------------------------
opcionDesplazar.forEach(elemento => {
    elemento.addEventListener('mouseover', function () {
        this.classList.add('desplazar'); // Agrega la clase para desplazar
    });

    elemento.addEventListener('mouseout', function () {
        this.classList.remove('desplazar'); // Elimina la clase al salir
    });
});

// Definir las funciones fuera del evento-----------------------------------------------------------------------------------
function devanecer(elemento) {
    elemento.style.opacity = "0";// Agrega la clase para desplazar
    elemento.style.transition = "all 2s ease-in-out";
    switch (elemento.id) {
        case 'nitendo1':
            setTimeout(() => {
                if (continuar1) { // Verificar si continuar es true
                    desaparecer(elemento);
                }
            }, 3500);
            break;
        case 'play1':
            setTimeout(() => {
                if (continuar2) { // Verificar si continuar es true
                    desaparecer(elemento);
                }
            }, 3500);
            break;
        case 'xbo1':
            setTimeout(() => {
                if (continuar3) { // Verificar si continuar es true
                    desaparecer(elemento);
                }
            }, 3500);
            break;
        case 'lol1':
            setTimeout(() => {
                if (continuar4) { // Verificar si continuar es true
                    desaparecer(elemento);
                }
            }, 3500);
            break;
    }
};

function desaparecer(elemento) {
    switch (elemento.id) {
        case 'nitendo1':
            imagenn2.style.opacity = "0";
            imagenn2.style.transition = "all 2s ease-in-out";
            setTimeout(() => {
                if (continuar1) { // Verificar si continuar es true
                    reaparecer(elemento);
                }
            }, 3500);
            break;
        case 'play1':
            imagenp2.style.opacity = "0";
            imagenp2.style.transition = "all 2s ease-in-out";
            setTimeout(() => {
                if (continuar2) { // Verificar si continuar es true
                    reaparecer(elemento);
                }
            }, 3500);
            break;
        case 'xbo1':
            imagenx2.style.opacity = "0";
            imagenx2.style.transition = "all 2s ease-in-out";
            setTimeout(() => {
                if (continuar3) { // Verificar si continuar es true
                    reaparecer(elemento);
                }
            }, 3500);
            break;
        case 'lol1':
            imagenl2.style.opacity = "0";
            imagenl2.style.transition = "all 2s ease-in-out";
            setTimeout(() => {
                if (continuar4) { // Verificar si continuar es true
                    reaparecer(elemento);
                }
            }, 3500);
            break;
    }
};

function reaparecer(elemento) {
    elemento.style.opacity = "1";// Agrega la clase para desplazar
    elemento.style.transition = "all 2s ease-in-out";
    switch (elemento.id) {
        case 'nitendo1':
            imagenn2.style.opacity = "1";
            imagenn2.style.transition = "all 3s ease-in-out";
            setTimeout(() => {
                if (continuar1) { // Verificar si continuar es true
                    devanecer(elemento);
                }
            }, 3000);
            break;
        case 'play1':
            imagenp2.style.opacity = "1";
            imagenp2.style.transition = "all 3s ease-in-out";
            setTimeout(() => {
                if (continuar2) { // Verificar si continuar es true
                    devanecer(elemento);
                }
            }, 3000);
            break;
        case 'xbo1':
            imagenx2.style.opacity = "1";
            imagenx2.style.transition = "all 3s ease-in-out";
            setTimeout(() => {
                if (continuar3) { // Verificar si continuar es true
                    devanecer(elemento);
                }
            }, 3000);
            break;
        case 'lol1':
            imagenl2.style.opacity = "1";
            imagenl2.style.transition = "all 3s ease-in-out";
            setTimeout(() => {
                if (continuar4) { // Verificar si continuar es true
                    devanecer(elemento);
                }
            }, 3000);
            break;
        default:
            continuar=false;
        }
};


// Itera sobre cada elemento y agrega listeners--------------------------------------------------------------------------
grup1.forEach(elemento => {
    elemento.addEventListener('mouseover', function () {
        switch (elemento.id) {
            case 'nitendo1':
                continuar1 = true;
                break;
            case 'play1':
                continuar2= true;
                break;
            case 'xbo1':
                continuar3 = true;
                break;
            case 'lol1':
                continuar4 = true;
                break;
            }
                devanecer(elemento); // Llamar a la función con el elemento actual
    });

    elemento.addEventListener('mouseout', function () {
        elemento.style.opacity = "1";
        elemento.style.transition = "all 0s";
        switch (elemento.id) {
            case 'nitendo1':
                imagenn2.style.opacity = "1";
                continuar1 = false;
                break;
            case 'play1':
                imagenp2.style.opacity = "1";
                continuar2= false;
                break;
            case 'xbo1':
                imagenx2.style.opacity = "1";
                continuar3 = false;
                break;
            case 'lol1':
                imagenl2.style.opacity = "1";
                continuar4 = false;
                break;
            }
    });
});
