//DEFINIR VARIABLES//
let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector ('.list-container');
let containerMenu = document.querySelector ('.menu');
let activador = true;


//MENU DESPLEGABLE//
btnMenu.addEventListener('click', () => {
    document.querySelector('.btn-menu i').classList.toggle('fa-times') //covertir barras en X al desplazar menu//

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s"

        activador = false;
    } else{
        activador = false;

        menu.style.left = "-100% ";
        menu.style.transition = "0.5s"

        activador = true;
    }
});

// Intercalar class "active" // ACTIVE - DESACTIVADO
let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');
  });
});

//EFECTO SCROLL
let prevScrollpos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
    let currentscrollpos = window.pageYOffset;
    //MOSTRAR Y OCULTAR MENU

    if (prevScrollpos > currentscrollpos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    } else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollpos = currentscrollpos;

    //mostrar y ocultar scroll estilos

    let arriba = window.pageYOffset;

    if(arriba <= 600) {
        containerMenu.style.borderBottom = "none";
    
        goTop.style.right = "-100%";
    } else{
        containerMenu.style.borderBottom = "3px solid #ff2e63"

        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
    }
}

goTop.addEventListener('click', () => {
    document.body.scrollTop = 0; //para Safari
    document.documentElement.scrollTop = 0; //todos los navegadores
});

let verAbajo = document.querySelector('#abajo');
verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});

