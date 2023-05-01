const menu = document.querySelector('.hamburguesa');  
const navegacion = document.querySelector('.navegacion');

//para la funcion tamaño pantalla
const sourceDirectora = document.querySelector('#source-directora');
const sourcePistola = document.querySelector('#source-pistola');
const videoDirectora = document.querySelector('#video-directora');
const videoPistola = document.querySelector('#video-pistola');



document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    tamañoPantalla();   //esta comprobacion solo se realiza al empezar porque no tendria sentido lo contrario
    
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () =>{
    //crear elemento la x de boton cerrar
    const btnCerrar = document.createElement('p');
    btnCerrar.textContent = 'x'; //añadimos contenido
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);

    // crear overlay
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    //asi hacemos que si ya existe un overlay se pare aqui la funcion
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    //colocar overlay
    body.appendChild(overlay);

    // Bloquear scroll
    body.style.overflow = 'hidden';
    
    //cerrar menu
    cerrarMenu(btnCerrar, overlay, body);
}


const cerrarMenu = (boton, overlay, body) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
        // Desloquear scroll
        body.style.overflow = 'visible';
    })

    overlay.onclick = function(){
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
        // Desloquear scroll
        body.style.overflow = 'visible';
    }
    //cerrar menu cuando clicas en elemento
    const elementosNav = document.getElementsByClassName('elemento-nav');
    for (element of elementosNav) {
        element.addEventListener('click', ()=>{
            navegacion.classList.add('ocultar');
            overlay.remove();
            boton.remove();
            // Desloquear scroll
            body.style.overflow = 'visible';
        });
    };
}

const tamañoPantalla = () =>{
    // Obtiene el ancho de la ventana del navegador
    const width = window.innerWidth;
    // Comprueba si el ancho es menor que 600 píxeles (para dispositivos móviles)
    if (width < 768) {
        // Código para dispositivos móviles aquí
        sourceDirectora.src = './img/Video separador movil.mp4';
        sourcePistola.src = './img/Video separador 2 movil.mp4';
    } 
    videoDirectora.load();
    videoPistola.load();
    
}

