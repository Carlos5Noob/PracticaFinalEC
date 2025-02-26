 // Selecciona el elemento con la clase 'navbar' (barra de navegación)
 let navbar = document.querySelector('.navbar');

 // Selecciona todos los elementos con la clase 'btn-danger' (botones de alerta o acción)
 let btns = document.querySelectorAll('.btn-danger');
 
 // Selecciona el elemento con la clase 'hero' (sección principal destacada)
 let hero = document.querySelector('.hero');
 
 // Selecciona el primer elemento h1 dentro de la sección 'hero'
 let title = hero.querySelector('h1');
 
 // Evento 'load' para cuando la página ha cargado completamente
 window.addEventListener('load', function() {
     // Muestra una alerta de bienvenida al usuario cuando la página se carga
     alert('¡Bienvenido al Concesionario de Vehículos!');
 });
 
 // Evento 'click' en el elemento de la barra de navegación (navbar)
 navbar.addEventListener('click', function() {
     // Cambia el color de fondo de la barra de navegación a verde
     navbar.style.backgroundColor = '#28a745';
 });
 
 // Para cada botón con la clase 'btn-danger', añadir un evento de clic
 btns.forEach(function(btn) {
     btn.addEventListener('click', function(e) {
         // Prevenir el comportamiento por defecto del botón (enlace)
         e.preventDefault();
         // Muestra una alerta de agradecimiento cuando se hace clic en un botón
         alert('¡Gracias por tu interés en este vehículo!');
     });
 });
 
 // Evento 'scroll' para detectar cuando el usuario hace scroll en la página
 window.addEventListener('scroll', function() {
     // Si el usuario ha desplazado la página más de 100px desde la parte superior
     if (window.scrollY > 100) {
         // Cambia el texto del título principal dentro de la sección 'hero'
         title.textContent = "¡Echa un vistazo a nuestros vehículos!";
     } else {
         // Restaura el texto original del título si el scroll es menor a 100px
         title.textContent = "Encuentra el vehículo de tus sueños";
     }
 });
 