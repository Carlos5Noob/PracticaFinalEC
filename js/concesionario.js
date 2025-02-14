let navbar = document.querySelector('.navbar');
let btns = document.querySelectorAll('.btn-danger');
let hero = document.querySelector('.hero');
let title = hero.querySelector('h1');

window.addEventListener('load', function() {
    alert('¡Bienvenido al Concesionario de Vehículos!');
});

navbar.addEventListener('click', function() {
    navbar.style.backgroundColor = '#28a745';
});

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu interés en este vehículo!');
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        title.textContent = "¡Echa un vistazo a nuestros vehículos!";
    } else {
        title.textContent = "Encuentra el vehículo de tus sueños";
    }
});