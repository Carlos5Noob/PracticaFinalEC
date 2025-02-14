document.getElementById("youtube").addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/watch?v=5LlgE_fom6Q"
})

document.getElementById("instagram").addEventListener("click", function(){
    window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/caetanomotorscadiz/%3Fhl%3Des&ved=2ahUKEwjeyb_Q3MKLAxX1VPEDHVXCKdEQFnoECB8QAQ&usg=AOvVaw1quBU7jn-JckHLd4mxmQr_"
})

document.getElementById("twitter").addEventListener("click", function(){
    window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/Flexicar_es&ved=2ahUKEwiiwcfa3MKLAxXGQvEDHapQMpIQFnoECBIQAQ&usg=AOvVaw3sxa3iOK7vpJ3VtMbZBJV3"
})

document.addEventListener('DOMContentLoaded', function() {
    let socialImages = document.querySelectorAll('.row img');
    let paragraph = document.querySelector('#parrafo p');


    function showWelcomeMessage() {
        alert('¡Bienvenido a nuestra página About Us!');
    }

 
    showWelcomeMessage();

   
    socialImages.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s';
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });

  
    paragraph.addEventListener('dblclick', function() {
        paragraph.textContent = 'Gracias por interesarte en nuestra empresa. ¡Esperamos verte pronto!';
    });
});