// Esperamos que el contenido de la página esté completamente cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function () {
  
  // Seleccionamos el carrusel con el ID "teamCarousel".
  var carousel = document.querySelector("#teamCarousel");
  
  // Variables para almacenar la posición inicial y final del toque en el carrusel.
  var touchStartX = 0;
  var touchEndX = 0;

  // Evento que detecta cuando el usuario inicia el toque en la pantalla (touchstart).
  carousel.addEventListener("touchstart", function (event) {
    // Guardamos la posición inicial del toque (X) en la pantalla.
    touchStartX = event.changedTouches[0].screenX;
  });

  // Evento que detecta cuando el usuario termina de tocar la pantalla (touchend).
  carousel.addEventListener("touchend", function (event) {
    // Guardamos la posición final del toque (X) en la pantalla.
    touchEndX = event.changedTouches[0].screenX;

    // Si el desplazamiento en la dirección horizontal (de izquierda a derecha) es mayor a 50px,
    // se mueve al siguiente elemento del carrusel.
    if (touchStartX - touchEndX > 50) {
      bootstrap.Carousel.getInstance(carousel).next();
    }
    // Si el desplazamiento es en la dirección opuesta (de derecha a izquierda),
    // se mueve al elemento anterior del carrusel.
    else if (touchEndX - touchStartX > 50) {
      bootstrap.Carousel.getInstance(carousel).prev();
    }
  });
});


// Segunda parte del código que también gestiona el desplazamiento táctil en el carrusel
document.addEventListener("DOMContentLoaded", function() {
  
  // Seleccionamos nuevamente el carrusel por su ID
  var carousel = document.querySelector("#teamCarousel"); // Asegúrate de que este ID coincida con el carrusel en tu HTML
  
  // Inicializamos las variables para las posiciones del toque.
  var touchStartX = 0;
  var touchEndX = 0;

  // Detecta cuando el usuario comienza a tocar la pantalla (touchstart).
  carousel.addEventListener("touchstart", function(event) {
    // Guardamos la posición horizontal inicial del toque.
    touchStartX = event.touches[0].clientX;
  });

  // Detecta el movimiento del toque en la pantalla (touchmove).
  carousel.addEventListener("touchmove", function(event) {
    // Guardamos la posición final del toque mientras el usuario mueve el dedo.
    touchEndX = event.touches[0].clientX;
  });

  // Detecta cuando el usuario termina de tocar la pantalla (touchend).
  carousel.addEventListener("touchend", function() {
    // Si el desplazamiento fue hacia la izquierda (touchStartX > touchEndX),
    // simulamos un clic en el botón "Siguiente" del carrusel.
    if (touchStartX - touchEndX > 50) {
      document.querySelector("#teamCarousel .carousel-control-next").click();
    }
    // Si el desplazamiento fue hacia la derecha (touchEndX > touchStartX),
    // simulamos un clic en el botón "Anterior" del carrusel.
    else if (touchEndX - touchStartX > 50) {
      document.querySelector("#teamCarousel .carousel-control-prev").click();
    }
  });
});


// Inicializa el carrusel de Bootstrap con una configuración personalizada.
var myCarousel = new bootstrap.Carousel(document.querySelector('#teamCarousel'), {
  
  // Establece el intervalo de tiempo (en milisegundos) entre cada cambio de imagen del carrusel.
  interval: 5000, // El carrusel cambiará cada 5000 ms (5 segundos).
  
  // Configura el carrusel para que comience a moverse automáticamente al cargar la página.
  ride: 'carousel' // Esta opción hace que el carrusel empiece a moverse automáticamente cuando se carga la página.
});
