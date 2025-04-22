// ============================================================
//  ESCUCHAR CUANDO EL DOCUMENTO ESTÉ CARGADO (DOM COMPLETO)
// ============================================================
// Esto asegura que el código JavaScript solo se ejecute después de que 
// todo el contenido HTML haya sido completamente cargado en el navegador.
document.addEventListener("DOMContentLoaded", () => {
  
  // Selecciona todos los elementos con la clase "stat-number"
  // Estos son los contadores que se van a animar (probablemente en una sección de estadísticas).
  const counters = document.querySelectorAll(".stat-number");
  
  // Define la velocidad del conteo (el número que se va a contar por segundo).
  const speed = 200;

  // ============================================================
  //  FUNCION DE ANIMACIÓN DEL CONTEO DE NÚMEROS
  // ============================================================
  // Esta función anima el conteo de números. Se usa para incrementar 
  // los números de los elementos seleccionados hasta alcanzar un valor objetivo.
  const animateNumbers = () => {
    counters.forEach((counter) => {
      
      // Esta función actualiza el número cada vez que se ejecuta, incrementando el valor.
      const updateCount = () => {
        
        // Se obtiene el valor objetivo de "data-target" en el atributo de cada contador.
        // El "data-target" es el número final que queremos alcanzar.
        const target = +counter.getAttribute("data-target");

        // Se obtiene el número actual del contador.
        const count = +counter.innerText;

        // Calcula cuánto debe incrementarse el contador en cada ciclo.
        const increment = target / speed;

        // Si el número actual es menor que el objetivo, incrementa el número.
        if (count < target) {
          counter.innerText = Math.ceil(count + increment); // Redondea el número hacia arriba.
          setTimeout(updateCount, 10); // Llama a la función nuevamente después de 10 ms para continuar el conteo.
        } else {
          // Si ya se alcanzó el objetivo, ajusta el número al valor final.
          counter.innerText = target;
        }
      };

      // Llama a la función de actualización del conteo.
      updateCount();
    });
  };

  // ============================================================
  //  OBSERVADOR DE INTERSECCIÓN
  // ============================================================
  // El IntersectionObserver observa cuando la sección que contiene
  // los contadores entra en el área visible de la pantalla (por ejemplo, cuando se hace scroll).
  const options = {
    root: null, // El contenedor que queremos observar (null significa la ventana del navegador).
    threshold: 0.5, // El umbral de visibilidad. Se activará cuando el 50% del elemento esté visible.
  };

  // Crea un nuevo observador que ejecutará una función cuando un elemento se cruce con la vista del navegador.
  const observer = new IntersectionObserver((entries, observer) => {
    
    // Recorre las entradas observadas.
    entries.forEach((entry) => {
      if (entry.isIntersecting) {  // Si el elemento está visible en la ventana del navegador.
        animateNumbers();  // Llama a la función de animación de los números.
        observer.disconnect();  // Deja de observar después de que se ejecuta la animación.
      }
    });
  });

  // Observa la sección de estadísticas, que debe tener la clase "stats-section".
  observer.observe(document.querySelector(".stats-section"));
});

// ============================================================
//  FUNCIONALIDAD PARA EL SCROLL Y EL CAMBIO DE ESTILO EN LA BARRA DE NAVEGACIÓN
// ============================================================
// Esta parte cambia la clase de la barra de navegación cuando el usuario hace scroll hacia abajo.
window.addEventListener("scroll", function () {
  
  // Selecciona la barra de navegación utilizando su clase "navbar".
  const navbar = document.querySelector(".navbar");
  
  // Si el usuario ha desplazado la página más de 50 píxeles hacia abajo,
  // se añade la clase "scrolled" a la barra de navegación, lo que podría cambiar su estilo (por ejemplo, hacerla más compacta o cambiar el color).
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    // Si no ha desplazado más de 50 píxeles, elimina la clase "scrolled".
    navbar.classList.remove("scrolled");
  }
});

// ============================================================
//  SEGUNDA FUNCIÓN PARA CAMBIO DE ESTILO DE LA BARRA DE NAVEGACIÓN
// ============================================================
// La misma funcionalidad que el bloque anterior, pero organizada de forma que
// se ejecuta al cargar el documento y cuando la página se desplaza.
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Verifica si la barra de navegación existe en el documento.
  if (navbar) {
    
    // Agrega un "escuchador de evento" para el evento de scroll.
    window.addEventListener("scroll", function () {
      
      // Si el usuario ha desplazado la página más de 50 píxeles hacia abajo,
      // se añade la clase "scrolled" para cambiar el estilo de la barra de navegación.
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        // Si el desplazamiento es menor a 50 píxeles, elimina la clase "scrolled".
        navbar.classList.remove("scrolled");
      }
    });
  }
});
