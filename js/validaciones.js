// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  
  // Selecciona el carrusel por su ID
  var carousel = document.querySelector("#teamCarousel");
  
  // Variables para almacenar las posiciones inicial y final del toque
  var touchStartX = 0;
  var touchEndX = 0;

  // Evento 'touchstart': Detecta el inicio del toque en el carrusel
  carousel.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].screenX;
  });

  // Evento 'touchend': Detecta el fin del toque y calcula la diferencia de deslizamiento
  carousel.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].screenX;
    
    // Si el deslizamiento es hacia la izquierda (más de 50px), pasa al siguiente slide
    if (touchStartX - touchEndX > 50) {
      bootstrap.Carousel.getInstance(carousel).next(); // Muestra el siguiente slide
    } 
    // Si el deslizamiento es hacia la derecha (más de 50px), vuelve al slide anterior
    else if (touchEndX - touchStartX > 50) {
      bootstrap.Carousel.getInstance(carousel).prev(); // Muestra el slide anterior
    }
  });
});

// Manejo de deslizamiento en dispositivos táctiles
document.addEventListener("DOMContentLoaded", function() {
  
  // Selecciona el carrusel por su ID
  var carousel = document.querySelector("#teamCarousel");
  
  // Variables para almacenar las posiciones inicial y final del toque
  var touchStartX = 0;
  var touchEndX = 0;

  // Detecta el inicio del toque
  carousel.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX;
  });

  // Detecta el movimiento del toque
  carousel.addEventListener("touchmove", function(event) {
    touchEndX = event.touches[0].clientX;
  });

  // Detecta el final del toque y determina la dirección del deslizamiento
  carousel.addEventListener("touchend", function() {
    // Si el deslizamiento es hacia la izquierda, hace clic en el botón de "siguiente"
    if (touchStartX - touchEndX > 50) {
      document.querySelector("#teamCarousel .carousel-control-next").click();
    } 
    // Si el deslizamiento es hacia la derecha, hace clic en el botón de "anterior"
    else if (touchEndX - touchStartX > 50) {
      document.querySelector("#teamCarousel .carousel-control-prev").click();
    }
  });
});

// Inicializa el carrusel de Bootstrap con configuración personalizada
var myCarousel = new bootstrap.Carousel(document.querySelector('#teamCarousel'), {
  interval: 5000, // Intervalo de tiempo entre cada slide (5000ms = 5 segundos)
  ride: 'carousel' // Inicia el carrusel automáticamente al cargar la página
});
