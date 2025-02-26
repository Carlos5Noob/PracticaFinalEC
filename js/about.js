// Añadir un evento de clic al botón o enlace de YouTube
document.getElementById("youtube").addEventListener("click", function(){
    // Redirige al usuario a un video específico en YouTube
    window.location.href = "https://www.youtube.com/watch?v=5LlgE_fom6Q"
})

// Añadir un evento de clic al botón o enlace de Instagram
document.getElementById("instagram").addEventListener("click", function(){
    // Redirige al usuario a un perfil de Instagram usando un enlace directo
    window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/caetanomotorscadiz/%3Fhl%3Des&ved=2ahUKEwjeyb_Q3MKLAxX1VPEDHVXCKdEQFnoECB8QAQ&usg=AOvVaw1quBU7jn-JckHLd4mxmQr_"
})

// Añadir un evento de clic al botón o enlace de Twitter
document.getElementById("twitter").addEventListener("click", function(){
    // Redirige al usuario al perfil de Twitter usando un enlace directo
    window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/Flexicar_es&ved=2ahUKEwiiwcfa3MKLAxXGQvEDHapQMpIQFnoECBIQAQ&usg=AOvVaw3sxa3iOK7vpJ3VtMbZBJV3"
})

// Esperar a que todo el contenido del DOM esté cargado antes de ejecutar el código siguiente
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona todas las imágenes dentro de los elementos con clase 'row'
    let socialImages = document.querySelectorAll('.row img');
    
    // Selecciona el primer párrafo dentro de un elemento con id 'parrafo'
    let paragraph = document.querySelector('#parrafo p');
    
    // Función para mostrar un mensaje de bienvenida al usuario
    function showWelcomeMessage() {
        alert('¡Bienvenido a nuestra página About Us!');
    }
    
    // Llama a la función para mostrar el mensaje de bienvenida
    showWelcomeMessage();

    // Añadir un evento de 'mouseenter' a todas las imágenes sociales
    socialImages.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            // Aumenta el tamaño de la imagen al pasar el mouse sobre ella (efecto de zoom)
            img.style.transform = 'scale(1.1)';
            // Define una transición para el efecto de zoom (duración de 0.3 segundos)
            img.style.transition = 'transform 0.3s';
        });

        // Añadir un evento de 'mouseleave' para devolver la imagen a su tamaño original
        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)'; // Vuelve al tamaño normal
        });
    });

    // Añadir un evento de doble clic al párrafo para cambiar su contenido
    paragraph.addEventListener('dblclick', function() {
        // Cambia el contenido del párrafo al hacer doble clic en él
        paragraph.textContent = 'Gracias por interesarte en nuestra empresa. ¡Esperamos verte pronto!';
    });
});
