// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  
  // Selecciona todos los elementos con la clase 'stat-number' que contienen números a animar
  const counters = document.querySelectorAll(".stat-number");
  
  // Define la velocidad del conteo (la cantidad de incremento por segundo)
  const speed = 200; // Velocidad del conteo
  
  // Función para animar los números
  const animateNumbers = () => {
    counters.forEach((counter) => {
      
      // Función interna para actualizar el número en pantalla
      const updateCount = () => {
        
        // Obtiene el valor objetivo (target) del atributo 'data-target' del contador
        const target = +counter.getAttribute("data-target");
        
        // Obtiene el valor actual que se muestra en el contador
        const count = +counter.innerText;

        // Calcula el incremento a mostrar en cada paso
        const increment = target / speed;

        // Si el número actual es menor que el objetivo, actualiza el número
        if (count < target) {
          counter.innerText = Math.ceil(count + increment); // Actualiza el contador
          setTimeout(updateCount, 10); // Llama a 'updateCount' después de 10ms para seguir incrementando
        } else {
          counter.innerText = target; // Si se alcanza el objetivo, establece el valor final
        }
      };
      updateCount(); // Llama a la función para iniciar la animación del número
    });
  };

  // Configuración para el IntersectionObserver
  const options = {
    root: null, // Observa el viewport (la ventana visible del navegador)
    threshold: 0.5, // Ejecuta la animación cuando el 50% del elemento es visible
  };

  // Crea un IntersectionObserver para detectar cuando la sección de estadísticas se vuelve visible
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumbers(); // Llama a la función para animar los números
        observer.disconnect(); // Detiene la observación después de ejecutar la animación
      }
    });
  });

  // Inicia la observación en la sección que contiene las estadísticas
  observer.observe(document.querySelector(".stats-section"));
});

// Añade un evento de 'scroll' para cambiar el estilo de la barra de navegación (navbar) al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  
  // Si el desplazamiento es mayor que 50px, agrega la clase 'scrolled' para cambiar el estilo
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled"); // Si se vuelve a la parte superior, elimina la clase
  }
});

// El evento 'DOMContentLoaded' asegura que el código no se ejecute antes de que el contenido esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    // Si la barra de navegación existe, agrega el evento de scroll
    window.addEventListener("scroll", function () {
      // Aplica la clase 'scrolled' si el scroll es mayor a 50px
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled"); // La elimina si el scroll es menor a 50px
      }
    });
  }
});

