document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#teamCarousel");
    var touchStartX = 0;
    var touchEndX = 0;

    carousel.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            bootstrap.Carousel.getInstance(carousel).next();
        } else if (touchEndX - touchStartX > 50) {
            bootstrap.Carousel.getInstance(carousel).prev();
        }
    });
});


  document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector("#teamCarousel"); // Reemplaza con el ID de tu carrusel
    var touchStartX = 0;
    var touchEndX = 0;

    carousel.addEventListener("touchstart", function(event) {
      touchStartX = event.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", function(event) {
      touchEndX = event.touches[0].clientX;
    });

    carousel.addEventListener("touchend", function() {
      if (touchStartX - touchEndX > 50) {
        document.querySelector("#teamCarousel .carousel-control-next").click();
      } else if (touchEndX - touchStartX > 50) {
        document.querySelector("#teamCarousel .carousel-control-prev").click();
      }
    });
  });

  var myCarousel = new bootstrap.Carousel(document.querySelector('#teamCarousel'), {
    interval: 5000,
    ride: 'carousel'
  });
  